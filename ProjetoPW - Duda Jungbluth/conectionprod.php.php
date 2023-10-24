<?php

$host = "mysql";
$user = "root";
$password = "duda2006";
$database = "produtos";
$port = 80;
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];
$conn = new PDO(
    "mysql:host=$host;dbname=$database;port=$port",
    $user,
    $password,          // ?
    $options
);



