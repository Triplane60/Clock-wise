<?php
// Script to update image_scale values for specific watches
require_once 'db.php';

// Scale values for specific watches
$scale_updates = [
    'Navitimer' => 1.2,
    'Navitimer B01 Chronograph 46' => 1.2,
    'Chronomat' => 1.2,
    'Super Avenger B01 Chronograph 46' => 1.2,
    'Lady Premier 32' => 1.2,
    'Professional Endurance Pro 38' => 1.2,
    'MRG-B5000' => 1.0,
    'Royal Oak Concept Split-Seconds' => 0.9,
    'Kalla Geneva Diamond and White Gold' => 0.9,
    'Overseas Tourbillon Skeleton Titanium' => 0.9,
    'Circus Minute Repeater' => 0.9,
    'Grand Complications Celestial Rose Gold' => 0.9,
    'Superocean' => 1.2,
    'Professional' => 1.2,
    'Endurance Pro' => 1.2,
    'Top Time' => 1.2,
    'Premier' => 1.2,
    'Avenger' => 1.2,
    'Colt' => 1.2,
    'Duograph' => 1.2,
    'Chronograph' => 1.2,
    'Ocean Classic' => 1.2
];

echo "<h3>Updating Image Scale Values</h3>";

foreach ($scale_updates as $watch_name => $scale) {
    $stmt = $conn->prepare("UPDATE products SET image_scale = ? WHERE name = ?");
    $stmt->bind_param("ds", $scale, $watch_name);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo "✓ Updated '{$watch_name}' scale to {$scale}<br>";
        } else {
            echo "- '{$watch_name}' not found in database (no update needed)<br>";
        }
    } else {
        echo "✗ Error updating '{$watch_name}': " . $conn->error . "<br>";
    }
    $stmt->close();
}

echo "<br><strong>Update complete!</strong>";

// Show current scale values
echo "<br><br><h3>Current Scale Values in Database:</h3>";
$result = $conn->query("SELECT name, image_scale FROM products ORDER BY name");
if ($result && $result->num_rows > 0) {
    echo "<table border='1' style='border-collapse: collapse; margin-top: 10px;'>";
    echo "<tr><th>Watch Name</th><th>Image Scale</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . htmlspecialchars($row['name']) . "</td><td>" . $row['image_scale'] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No products found.";
}

$conn->close();
?>
