<?php
// ==================== get_all_watches.php ====================
// Called once on page load to populate watchData in JavaScript
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json');
require_once 'db.php';

$result = $conn->query("SELECT * FROM products");
$watches = [];

while ($row = $result->fetch_assoc()) {
    $watches[$row['name']] = [
        'category' => $row['category'] ?? '',
        'desc'     => $row['description'] ?? '',
        'specs'    => $row['specs'] ?? '',
        'price'    => isset($row['price']) ? (float)$row['price'] : 0,
        'stock'    => isset($row['stock']) ? (int)$row['stock'] : 10,
        'images'   => array_filter([
            $row['image_main'] ?? '',
            $row['image_2'] ?? '',
            $row['image_3'] ?? ''
        ])
    ];
}

echo json_encode(['success' => true, 'watches' => $watches]);
