<?php
// ==================== db.php ====================
// Include this file in all other PHP files

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "clockwise_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$conn->set_charset("utf8mb4");