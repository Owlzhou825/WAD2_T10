import pandas as pd
from sqlalchemy import create_engine

#Database connection
host="localhost"
user="root"
password=""
port=3306
database="quiz"

def get_connection():
    return create_engine(
        url="mysql+pymysql://{0}:{1}@{2}:{3}/{4}".format(
            user, password, host, port, database
        )
    )

if __name__ == '__main__':
  
    try:
        engine = get_connection()
        print(
            f"Connection to the {host} for user {user} created successfully.")
    except Exception as ex:
        print("Connection could not be made due to the following error: \n", ex)

burger_r=pd.read_csv(r'Data\burger.csv', delimiter=';', engine='python', encoding='utf8',)
pasta_r=pd.read_csv(r'Data\pasta.csv', delimiter=';',engine='python', encoding='utf8',)
pizza_r= pd.read_csv(r'Data\pizza.csv', delimiter=';', engine='python', encoding='utf8',)
sandwich_r=pd.read_csv(r'Data\sandwich.csv', delimiter=';',engine='python', encoding='utf8',)
steak_r=pd.read_csv(r'Data\steak.csv', delimiter=';',engine='python', encoding='utf8',)
wings_r=pd.read_csv(r'Data\wings.csv', delimiter=';',engine='python', encoding='utf8',)

engine = get_connection()
conn = engine.connect()

from sqlalchemy.dialects.mysql import insert

def insert_on_duplicate(table, conn, keys, data_iter):
    insert_stmt = insert(table.table).values(list(data_iter))
    on_duplicate_key_stmt = insert_stmt.on_duplicate_key_update(insert_stmt.inserted)
    conn.execute(on_duplicate_key_stmt)

burger_r.to_sql(con = engine, name='burger', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)
pasta_r.to_sql(con = engine, name='pasta', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)
pizza_r.to_sql(con = engine, name='pizza', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)
sandwich_r.to_sql(con = engine, name='sandwich', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)
steak_r.to_sql(con = engine, name='steak', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)
wings_r.to_sql(con = engine, name='wings', if_exists='append', chunksize = 1000, index = False, method = insert_on_duplicate)

