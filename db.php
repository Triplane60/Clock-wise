<?php
// ==================== db.php ====================
// Include this file in all other PHP files

error_reporting(E_ALL);
ini_set('display_errors', 0);

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "clockwise_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$conn->set_charset("utf8mb4");