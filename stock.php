<?php
// ==================== stock.php ====================
// Handles: get stock, update stock

header('Content-Type: application/json');
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'] ?? $_POST['action'] ?? $_GET['action'] ?? '';

// ── GET ALL STOCK ─────────────────────────────────────────
if ($action === 'get_stock') {
    $result = $conn->query("SELECT name, stock FROM products");
    $stock = [];
    while ($row = $result->fetch_assoc()) {
        $stock[$row['name']] = (int)$row['stock'];
    }
    echo json_encode(['success' => true, 'stock' => $stock]);
    exit;
}

// ── UPDATE SINGLE STOCK ───────────────────────────────────
if ($action === 'update_stock') {
    $name     = $data['name'] ?? '';
    $newStock = (int)($data['stock'] ?? 0);

    if (empty($name) || $newStock < 0) {
        echo json_encode(['success' => false, 'message' => 'Invalid data.']);
        exit;
    }

    $stmt = $conn->prepare("UPDATE products SET stock = ? WHERE name = ?");
    $stmt->bind_param("is", $newStock, $name);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Update failed.']);
    }
    exit;
}

echo json_encode(['error' => 'Unknown action']);