#!/usr/bin/env python
# coding: utf-8

# In[2]:


import os
import pandas as pd
import numpy as np 
import psycopg2 as pg
import csv


# In[18]:


data = pd.read_csv('/home/amauri-tapia/Desktop/items.csv',delimiter = "\t")


# In[19]:


item_id = data['id']
name = data['item_name']
cost = data['cost']
img = data['img']


# In[20]:


try:
    connection = pg.connect(user='postgres',
                                password = os.environ.get('PGPASSWORD'),
                                host = os.environ.get('PGHOST'),
                                port = 5432,
                                database = 'mydb')
    
    cursor = connection.cursor()
    
    with open('items.csv','r') as f:
        reader = csv.reader(f,delimiter='\t')
        next(reader)
        for row in reader:
            query = "insert into radd.items values(%s,%s,%s,%s)"
            
            cursor.execute(query,row)
    
    connection.commit()
    
    count = cursor.rowcount
    print(count, "Transaction was successful")
    
except(Exception, pg.Error) as error:
    if(connection):
        print("No data inserted",error)
        
finally:
    if(connection):
        cursor.close()
        connection.close()
        print("Closed connection")

