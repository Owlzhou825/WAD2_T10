# WAD2_T10

<!-- How to use Importer! -->
-Run the sql file on my sql

-Remember to create a virtual environment for your python file (make sure your interpreter--- coloured bar down below (usually says like python 3.10.7 64-bit), is on python)
    Type into terminal:
        <!-- create venv -->
        py -m venv venv 
        <!-- access the activate script in the scripts folder -->
        cd venv/Scripts
        activate
        <!-- go back to your main folder -->
        cd ../..

    You should see (venv) before your file path in the terminal

-make sure the environment (usually says 3.10.7 64-bit) is on venv. click it and change to the starred line with venv when the command palette comes up

-install on your venv
    these are the commands to install these:
        py -m pip install pandas
        py -m pip install pymysql
        py -m pip install sqlalchemy

-run the py file
    if you see completed or something like that, you can check your phpmyadmin
    **if you are iOS remember to change the password field to root as well and check the file path to csv

-Next time, if you have to run your venv again, THE FILE IS STILL THERE. you dont have to create the venv again, follow the commands above (or below, right here) to reactivate it
    cd venv/Scripts
    activate
    cd ../..