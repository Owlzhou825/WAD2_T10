<?php
    $sql_arr = array('pizza' => 'select Piz_Result,Piz_Description from pizza where Piz_Meat=:Q1 and Piz_Hated=:Q2 and Piz_Cheese=:Q3 and Piz_Second=:Q4', 
                    'burger' => 'select Bur_Result,Bur_Description from burger where Bur_Bun=:Q1 and Bur_Patty=:Q2 and Bur_Hated=:Q3 and Bur_Cheese=:Q4',
                    'pasta' => 'select Pas_Result,Pas_Description from pasta where Pas_Type=:Q1 and Pas_Meat=:Q2 and Pas_Sauce=:Q3 and Pas_Topping=:Q4',
                    'sandwich' => 'select San_Result,San_Description from sandwich where San_Bread=:Q1 and San_Meat=:Q2 and San_Hated=:Q3 and San_Cooking=:Q4',
                    'steak' => 'select Ste_Result,Ste_Description from steak where Ste_Rarity=:Q1 and Ste_Wine=:Q2 and Ste_Sauce=:Q3 and Ste_Hated=:Q4',
                    'wings' => 'select Win_Result,Win_Description from wings where Win_Flavour=:Q1 and Win_Dip=:Q2 and Win_Cooking=:Q3 and Win_Hated=:Q4');
?>