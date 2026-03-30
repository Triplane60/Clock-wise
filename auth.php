<?php
// ==================== auth.php ====================
// Handles: login, register, logout, check session

error_reporting(E_ALL);
ini_set('display_errors', 0);
session_start();
header('Content-Type: application/json');
require_once 'db.php';

$action = $_POST['action'] ?? $_GET['action'] ?? '';

// ── REGISTER ──────────────────────────────────────────────
if ($action === 'register') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Username and password required.']);
        exit;
    }

    if (strlen($password) < 8 || !preg_match('/[a-zA-Z]/', $password)) {
        echo json_encode(['success' => false, 'message' => 'Password must be at least 8 characters and contain a letter.']);
        exit;
    }

    // Check if username exists
    $check = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $check->bind_param("s", $username);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'Username already exists.']);
        exit;
    }

    // Hash password and insert
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed);

    if ($stmt->execute()) {
        $_SESSION['user'] = $username;
        $_SESSION['user_id'] = $conn->insert_id;
        echo json_encode(['success' => true, 'username' => $username]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Registration failed.']);
    }
    exit;
}

// ── LOGIN ──────────────────────────────────────────────────
if ($action === 'login') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Please enter both username and password.']);
        exit;
    }

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo json_encode(['success' => false, 'message' => 'Invalid username or password.']);
        exit;
    }

    $row = $result->fetch_assoc();

    if (password_verify($password, $row['password'])) {
        $_SESSION['user'] = $username;
        $_SESSION['user_id'] = $row['id'];
        echo json_encode(['success' => true, 'username' => $username]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid username or password.']);
    }
    exit;
}

// ── LOGOUT ────────────────────────────────────────────────
if ($action === 'logout') {
    session_destroy();
    echo json_encode(['success' => true]);
    exit;
}

// ── CHECK SESSION ─────────────────────────────────────────
if ($action === 'check') {
    if (isset($_SESSION['user'])) {
        echo json_encode(['loggedIn' => true, 'username' => $_SESSION['user']]);
    } else {
        echo json_encode(['loggedIn' => false]);
    }
    exit;
}

// ── RESET PASSWORD ────────────────────────────────────────
if ($action === 'reset_password') {
    $username    = trim($_POST['username'] ?? '');
    $newPassword = $_POST['new_password'] ?? '';
    $confirm     = $_POST['confirm_password'] ?? '';

    if (empty($username)) {
        echo json_encode(['success' => false, 'message' => 'Please enter a username.']);
        exit;
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo json_encode(['success' => false, 'message' => 'Account not found.']);
        exit;
    }

    if (strlen($newPassword) < 8 || strlen($newPassword) > 10) {
        echo json_encode(['success' => false, 'message' => 'Password must be between 8 and 10 characters.']);
        exit;
    }

    if ($newPassword !== $confirm) {
        echo json_encode(['success' => false, 'message' => 'Passwords do not match.']);
        exit;
    }

    $hashed = password_hash($newPassword, PASSWORD_DEFAULT);
    $update = $conn->prepare("UPDATE users SET password = ? WHERE username = ?");
    $update->bind_param("ss", $hashed, $username);

    if ($update->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Update failed.']);
    }
    exit;
}

echo json_encode(['error' => 'Unknown action']);