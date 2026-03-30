<?php
// ==================== get_watch.php ====================
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json');
require_once 'db.php';

$name = $_GET['name'] ?? '';

if (empty($name)) {
    echo json_encode(['error' => 'No product name provided.']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM products WHERE name = ?");
$stmt->bind_param("s", $name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['error' => 'Product not found.']);
    exit;
}

$row = $result->fetch_assoc();

echo json_encode([
    'name'        => $row['name'],
    'description' => $row['description'],
    'specs'       => $row['specs'],
    'price'       => $row['price'],
    'stock'       => $row['stock'],
    'category'    => $row['category'],
    'image_main'  => $row['image_main'],
    'image_2'     => $row['image_2'],
    'image_3'     => $row['image_3']
]);