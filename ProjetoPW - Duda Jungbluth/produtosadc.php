<?php

require "cocectionprod.php";

$output = [];

// valida campos
$output = validate();
if ($output["status"] == "erro"){
    echo json_encode($output);
    exit;
}

$nomeprod = $_POST["nome"];
$precoprod = $_POST["preco"];
$imgprod = $_POST["imagem"];

// insere produto
$sql = "INSERT INTO produtos (nome, preco, url) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->execute([$nomeprod, $precoprod, $imgprod]);


$output["status"] = "sucesso";
$output["message"] = "Usuário cadastrado com sucesso.";
echo json_encode($output);

function validate(){
    $response = [];
    $response["status"] = "erro";

    if (!isset($_POST["nome"]) || !isset($_POST["senha"]) || !isset($_POST["imagem"])){
        $response["message"] = "Campos nome, preco e url da imagem devem estar presentes.";
        $response["field"] = "name";
    }
    elseif (!$_POST["nome"]){
        $response["message"] = "Campo nome deve estar presente.";
        $response["field"] = "name";
    }
    elseif (!$_POST["preco"]){
        $response["message"] = "Campo preco deve estar preenchido.";
        $response["field"] = "preco";
    }

    elseif (!$_POST["url"]){
        $response["message"] = "Campo URl da imagem deve estar presente.";
        $response["field"] = "URL";
    }
    else {
        $response["status"] = "sucesso";
    }

    
    return $response;
}



// Seleciona e manda pro javascript pra ser adicionado na pagina 
