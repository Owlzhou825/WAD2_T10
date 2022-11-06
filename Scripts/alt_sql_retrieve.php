<?php
    $foodType = $_GET['foodType']; #Get foodType(eg burger or pizza)
    # Step 1: Connect to database
    $dsn = "mysql:host=localhost;dbname=quiz;port=3306";
    $pdo = new PDO($dsn, "root", ""); 

    # Step 2: Prepare a SQL statement
    $Q1 = $_GET['Q1'];
    $Q2 = $_GET['Q2'];
    $Q3 = $_GET['Q3'];
    $Q4 = $_GET['Q4'];

    $sql_arr = array('pizza' => 'select Piz_Result,Piz_Description from pizza where Piz_Meat=:Q1 and Piz_Hated=:Q2 and Piz_Cheese=:Q3 and Piz_Second=:Q4', 
                     'burger' => 'select Bur_Result,Bur_Description from burger where Bur_Bun=:Q1 and Bur_Patty=:Q2 and Bur_Hated=:Q3 and Bur_Cheese=:Q4',
                     'pasta' => 'select Pas_Result,Pas_Description from pasta where Pas_Type=:Q1 and Pas_Meat=:Q2 and Pas_Sauce=:Q3 and Pas_Topping=:Q4',
                     'sandwich' => 'select San_Result,San_Description from sandwich where San_Bread=:Q1 and San_Meat=:Q2 and San_Hated=:Q3 and San_Cooking=:Q4',
                     'steak' => 'select Ste_Result,Ste_Description from steak where Ste_Rarity=:Q1 and Ste_Wine=:Q2 and Ste_Sauce=:Q3 and Ste_Hated=:Q4',
                     'wings' => 'select Win_Result,Win_Description from wings where Win_Flavour=:Q1 and Win_Dip=:Q2 and Win_Cooking=:Q3 and Win_Hated=:Q4');
    
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