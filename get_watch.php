<?php
require_once 'db.php';  

if (isset($_GET['name'])) {
    $name   = $conn->real_escape_string($_GET['name']);
    $sql    = "SELECT * FROM products WHERE name = '$name'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode($result->fetch_assoc());
    } else {
        echo json_encode(["error" => "Watch not found"]);
    }
}
?>