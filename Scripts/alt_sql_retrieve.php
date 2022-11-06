<?php
    include('../Data/sqlStatements.php');
    $foodType = $_GET['foodType']; #Get foodType(eg burger or pizza)
    # Step 1: Connect to database
    $dsn = "mysql:host=localhost;dbname=quiz;port=3306";
    $pdo = new PDO($dsn, "root", ""); 

    # Step 2: Prepare a SQL statement
    $Q1 = $_GET['Q1'];
    $Q2 = $_GET['Q2'];
    $Q3 = $_GET['Q3'];
    $Q4 = $_GET['Q4'];
    $sql = $sql_arr[$foodType];
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':Q1', $Q1, PDO::PARAM_STR);
    $stmt->bindParam(':Q2', $Q2, PDO::PARAM_STR);
    $stmt->bindParam(':Q3', $Q3, PDO::PARAM_STR);
    $stmt->bindParam(':Q4', $Q4, PDO::PARAM_STR);
    
    # Step 3: Run the SQL statement
    $stmt->execute();
    
    # Step 4: Retrieve results
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    if($row = $stmt->fetch()) {
        echo json_encode($row);
    }
    else{
        echo "Item not available";
    }

    # Step 5: Free up resources
    $stmt = null;
    $pdo = null;

?>