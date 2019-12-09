<?php
    $conn = new mysqli("localhost", "root", "", "final");
    if($conn->connect_error){
        die("Connection Failed!".$conn->connect_error);
    };
    
    
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])) {
        $action = $_GET['action'];
    }

    if($action == 'read') {
        $sql = $conn->query("SELECT * FROM user");
        $users = array();
        while($row= $sql->fetch_assoc()) {
            array_push($users, $row);
        }
        $result['users'] = $users;
    }

    if($action == 'creat') {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $sum = $_POST['sum'];
        $sql = $conn->query("INSERT INTO users (name, phone, sum) 
          VALUES ('$name','$phone','$sum')");
    }


    echo json_encode($result);
?>