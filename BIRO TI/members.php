<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "struktur";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch family tree data
$sql = "SELECT * FROM `members`;";
$result = $conn->query($sql);

$tree = [];
while($row = $result->fetch_assoc()) {
    $tree[$row['parent_id']][] = $row;
}

$conn->close();
echo json_encode($tree);
?>
