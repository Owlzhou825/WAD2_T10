
<?php
    $foodType = $_GET['foodType']; #Get foodType(eg burger or pizza)
    # Step 1: Connect to database
    $dsn = "mysql:host=localhost;dbname=quiz;port=3306";
    $pdo = new PDO($dsn, "root", ""); 

    # Step 2: Prepare a SQL statement
    if($foodType == "pizza"){
        $pizMeat = $_GET['pizMeat'];
        $pizHated = $_GET['pizHated'];
        $pizCheese = $_GET['pizCheese'];
        $piz2meat = $_GET['piz2meat'];
        $sql = 'select Piz_Result,Piz_Description from pizza where Piz_Meat=:pizMeat and Piz_Hated=:pizHated and Piz_Cheese=:pizCheese and Piz_Second=:piz2meat';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':pizMeat', $pizMeat, PDO::PARAM_STR);
        $stmt->bindParam(':pizHated', $pizHated, PDO::PARAM_STR);
        $stmt->bindParam(':pizCheese', $pizCheese, PDO::PARAM_STR);
        $stmt->bindParam(':piz2meat', $piz2meat, PDO::PARAM_STR);
    }
    elseif($foodType == "burger"){
        $burBun = $_GET['burBun'];
        $burHated = $_GET['burHated'];
        $burPatty = $_GET['burPatty'];
        $burCheese = $_GET['burCheese'];
        $sql = 'select Bur_Result,Bur_Description from burger where Bur_Bun=:burBun and Bur_Patty=:burPatty and Bur_Hated=:burHated and Bur_Cheese=:burCheese';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':burBun', $burBun, PDO::PARAM_STR);
        $stmt->bindParam(':burPatty', $burPatty, PDO::PARAM_STR);
        $stmt->bindParam(':burHated', $burHated, PDO::PARAM_STR);
        $stmt->bindParam(':burCheese', $burCheese, PDO::PARAM_STR);
    }
    elseif($foodType == "pasta"){
        $pasType = $_GET['pasType'];
        $pasMeat = $_GET['pasMeat'];
        $pasSauce = $_GET['pasSauce'];
        $pasTop = $_GET['pasTop'];
        $sql = 'select Pas_Result,Pas_Description from pasta where Pas_Type=:pasType and Pas_Meat=:pasMeat and Pas_Sauce=:pasSauce and Pas_Topping=:pasTop';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':pasType', $pasType, PDO::PARAM_STR);
        $stmt->bindParam(':pasMeat', $pasMeat, PDO::PARAM_STR);
        $stmt->bindParam(':pasSauce', $pasSauce, PDO::PARAM_STR);
        $stmt->bindParam(':pasTop', $pasTop, PDO::PARAM_STR);
    }
    elseif($foodType == "sandwich"){
        $sanBread = $_GET['sanBread'];
        $sanMeat = $_GET['sanMeat'];
        $sanHated = $_GET['sanHated'];
        $sanCook = $_GET['sanCook'];
        $sql = 'select San_Result,San_Description from sandwich where San_Bread=:sanBread and San_Meat=:sanMeat and San_Hated=:sanHated and San_Cooking=:sanCook';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':sanBread', $sanBread, PDO::PARAM_STR);
        $stmt->bindParam(':sanMeat', $sanMeat, PDO::PARAM_STR);
        $stmt->bindParam(':sanHated', $sanHated, PDO::PARAM_STR);
        $stmt->bindParam(':sanCook', $sanCook , PDO::PARAM_STR);
    }
    elseif($foodType == "steak"){
        $steRarity = $_GET['steRarity'];
        $steWine = $_GET['steWine'];
        $steSauce = $_GET['steSauce'];
        $steHated = $_GET['steHated'];
        $sql = 'select Ste_Result,Ste_Description from steak where Ste_Rarity=:steRarity and Ste_Wine=:steWine and Ste_Sauce=:steSauce and Ste_Hated=:steHated';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':steRarity', $steRarity, PDO::PARAM_STR);
        $stmt->bindParam(':steWine', $steWine, PDO::PARAM_STR);
        $stmt->bindParam(':steSauce', $steSauce, PDO::PARAM_STR);
        $stmt->bindParam(':steHated', $steHated, PDO::PARAM_STR);
    }
    elseif($foodType == "wings"){
        $winFlav = $_GET['winFlav'];
        $winDip = $_GET['winDip'];
        $winCook = $_GET['winCook'];
        $winHated = $_GET['winHated'];
        $sql = 'select Win_Result,Win_Description from wings where Win_Flavour=:winFlav and Win_Dip=:winDip and Win_Cooking=:winCook and Win_Hated=:winHated';
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':winFlav', $winFlav, PDO::PARAM_STR);
        $stmt->bindParam(':winDip', $winDip, PDO::PARAM_STR);
        $stmt->bindParam(':winCook', $winCook, PDO::PARAM_STR);
        $stmt->bindParam(':winHated', $winHated, PDO::PARAM_STR);
    }
    
    # Step 3: Run the SQL statement
    $stmt->execute();
    
    # Step 4: Retrieve results
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    if($row = $stmt->fetch()) {
        $result = implode(" ",$row);
        echo "$result";
    }
    else{
        echo "Item not available";
    }

    # Step 5: Free up resources
    $stmt = null;
    $pdo = null;

    ?>

