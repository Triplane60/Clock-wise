<?php
// ==================== orders.php ====================
// Handles: place order, get orders, update status, delete order

session_start();
header('Content-Type: application/json');
require_once 'db.php';

$action = $_POST['action'] ?? $_GET['action'] ?? '';

// ── PLACE ORDER ───────────────────────────────────────────
if ($action === 'place_order') {
    $data = json_decode(file_get_contents('php://input'), true);

    $id             = $data['id'] ?? '';
    $customer       = $data['customer'] ?? '';
    $address        = $data['address'] ?? '';
    $contact        = $data['contact'] ?? '';
    $paymentMethod  = $data['paymentMethod'] ?? '';
    $total          = $data['total'] ?? '';
    $arrivalDate    = $data['arrivalDate'] ?? '';
    $orderDate      = $data['date'] ?? date('m/d/Y, g:i:s A');
    $items          = $data['items'] ?? [];
    $user_id        = $_SESSION['user_id'] ?? null;

    if (empty($id) || empty($customer) || empty($address) || empty($items)) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
        exit;
    }

    // Insert order
    $stmt = $conn->prepare("INSERT INTO orders (id, user_id, customer_name, address, contact, payment_method, total, arrival_date, status, order_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', ?)");
    $stmt->bind_param("sisssssss", $id, $user_id, $customer, $address, $contact, $paymentMethod, $total, $arrivalDate, $orderDate);

    if (!$stmt->execute()) {
        echo json_encode(['success' => false, 'message' => 'Failed to save order: ' . $stmt->error]);
        exit;
    }

    // Insert order items
    $itemStmt = $conn->prepare("INSERT INTO order_items (order_id, product_name, quantity, price) VALUES (?, ?, ?, ?)");
    foreach ($items as $item) {
        $name     = $item['name'] ?? '';
        $qty      = (int)($item['quantity'] ?? 1);
        $price    = (float)($item['price'] ?? 0);
        $itemStmt->bind_param("ssid", $id, $name, $qty, $price);
        $itemStmt->execute();
    }

    // Update stock in DB
    foreach ($items as $item) {
        $name = $item['name'] ?? '';
        $qty  = (int)($item['quantity'] ?? 1);
        $stockStmt = $conn->prepare("UPDATE products SET stock = stock - ? WHERE name = ? AND stock >= ?");
        $stockStmt->bind_param("isi", $qty, $name, $qty);
        $stockStmt->execute();
    }

    echo json_encode(['success' => true, 'order_id' => $id]);
    exit;
}

// ── GET CUSTOMER ORDERS ───────────────────────────────────
if ($action === 'get_customer_orders') {
    if (!isset($_SESSION['user_id'])) {
        echo json_encode(['success' => false, 'orders' => []]);
        exit;
    }

    $user_id = $_SESSION['user_id'];
    $stmt = $conn->prepare("SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $orders = [];
    while ($row = $result->fetch_assoc()) {
        // Get items for this order
        $itemStmt = $conn->prepare("SELECT * FROM order_items WHERE order_id = ?");
        $itemStmt->bind_param("s", $row['id']);
        $itemStmt->execute();
        $itemResult = $itemStmt->get_result();

        $items = [];
        while ($item = $itemResult->fetch_assoc()) {
            $items[] = [
                'name'     => $item['product_name'],
                'quantity' => (int)$item['quantity'],
                'price'    => (float)$item['price']
            ];
        }

        $orders[] = [
            'id'            => $row['id'],
            'customer'      => $row['customer_name'],
            'address'       => $row['address'],
            'contact'       => $row['contact'],
            'paymentMethod' => $row['payment_method'],
            'total'         => $row['total'],
            'arrivalDate'   => $row['arrival_date'],
            'status'        => $row['status'],
            'date'          => $row['order_date'],
            'items'         => $items
        ];
    }

    echo json_encode(['success' => true, 'orders' => $orders]);
    exit;
}

// ── GET ALL ORDERS (ADMIN) ────────────────────────────────
if ($action === 'get_admin_orders') {
    $stmt = $conn->query("SELECT * FROM orders ORDER BY order_date DESC");
    $orders = [];

    while ($row = $stmt->fetch_assoc()) {
        $itemStmt = $conn->prepare("SELECT * FROM order_items WHERE order_id = ?");
        $itemStmt->bind_param("s", $row['id']);
        $itemStmt->execute();
        $itemResult = $itemStmt->get_result();

        $items = [];
        while ($item = $itemResult->fetch_assoc()) {
            $items[] = [
                'name'     => $item['product_name'],
                'quantity' => (int)$item['quantity'],
                'price'    => (float)$item['price']
            ];
        }

        $orders[] = [
            'id'            => $row['id'],
            'customer'      => $row['customer_name'],
            'address'       => $row['address'],
            'contact'       => $row['contact'],
            'paymentMethod' => $row['payment_method'],
            'total'         => $row['total'],
            'arrivalDate'   => $row['arrival_date'],
            'status'        => $row['status'],
            'date'          => $row['order_date'],
            'items'         => $items
        ];
    }

    echo json_encode(['success' => true, 'orders' => $orders]);
    exit;
}

// ── UPDATE ORDER STATUS ───────────────────────────────────
if ($action === 'update_status') {
    $data     = json_decode(file_get_contents('php://input'), true);
    $order_id = $data['order_id'] ?? '';
    $status   = $data['status'] ?? '';

    $allowed = ['active', 'pending-release', 'released', 'delivered'];
    if (!in_array($status, $allowed)) {
        echo json_encode(['success' => false, 'message' => 'Invalid status.']);
        exit;
    }

    // If releasing, restore stock
    if ($status === 'released') {
        $itemStmt = $conn->prepare("SELECT * FROM order_items WHERE order_id = ?");
        $itemStmt->bind_param("s", $order_id);
        $itemStmt->execute();
        $itemResult = $itemStmt->get_result();

        while ($item = $itemResult->fetch_assoc()) {
            $restoreStmt = $conn->prepare("UPDATE products SET stock = stock + ? WHERE name = ?");
            $restoreStmt->bind_param("is", $item['quantity'], $item['product_name']);
            $restoreStmt->execute();
        }
    }

    $stmt = $conn->prepare("UPDATE orders SET status = ? WHERE id = ?");
    $stmt->bind_param("ss", $status, $order_id);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Update failed.']);
    }
    exit;
}

// ── DELETE ORDER ──────────────────────────────────────────
if ($action === 'delete_order') {
    $data     = json_decode(file_get_contents('php://input'), true);
    $order_id = $data['order_id'] ?? '';

    $stmt = $conn->prepare("DELETE FROM orders WHERE id = ?");
    $stmt->bind_param("s", $order_id);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Delete failed.']);
    }
    exit;
}

// ── CLEAR ALL ADMIN ORDERS ────────────────────────────────
if ($action === 'clear_admin_orders') {
    $conn->query("DELETE FROM orders");
    echo json_encode(['success' => true]);
    exit;
}

echo json_encode(['error' => 'Unknown action']);