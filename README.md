# WAD2_T10

<!-- How to use Importer! -->
-Run the sql file on my sql<br />

-Remember to create a virtual environment for your python file (make sure your interpreter--- coloured bar down below (usually says like python 3.10.7 64-bit), is on python)<br />
    Type into terminal:<br />
        <!-- create venv -->
        py -m venv venv <br />
        <!-- access the activate script in the scripts folder -->
        cd venv/Scripts<br />
        activate<br />
        <!-- go back to your main folder -->
        cd ../..<br />

You should see (venv) before your file path in the terminal<br />

-make sure the environment (usually says 3.10.7 64-bit) is on venv. click it and change to the starred line with venv when the command palette comes up<br />

-install on your venv<br />
    these are the commands to install these:<br />
        py -m pip install pandas<br />
        py -m pip install pymysql<br />
        py -m pip install sqlalchemy<br />

-run the py file<br />
    if you see completed or something like that, you can check your phpmyadmin<br />
    **if you are iOS remember to change the password field to root as well and check the file path to csv<br />

-Next time, if you have to run your venv again, THE FILE IS STILL THERE. you dont have to create the venv again, follow the commands above (or below, right here) to reactivate it<br />
    cd venv/Scripts<br />
    activate<br />
    cd ../..<br />

If i made a mistake here: refer to this article (just the first half about setting up venv)<br />
https://code.visualstudio.com/docs/python/tutorial-flask