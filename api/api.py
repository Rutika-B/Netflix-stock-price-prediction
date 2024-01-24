from flask import Flask , request 
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, mean_absolute_error, mean_absolute_percentage_error,r2_score
import os
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)

@app.route('/api/stock' , methods=['POST','GET'])
def get_summary():

     
    open=request.json['open']
    print(open)
    high=request.json['high']
    low=request.json['low']
    volume=request.json['volume']
    open=int(open)
    high=int(high)
    low=int(low)
    volume=int(volume)
    
    df = pd.read_csv(r"D:\React\react-flask-app\kaggle\input\NFLX.csv")
    df.head(10)
    print("what happend dude")
    df.isnull().sum()
    df.shape
    df.info()
    df.describe().T
    train, test = train_test_split(df, test_size = 0.2)
    test_pred = test.copy()
    train.head(10)
    x_train = train[['Open', 'High', 'Low', 'Volume']].values
    x_test = test[['Open', 'High', 'Low', 'Volume']].values
    y_train = train['Close'].values
    y_test = test['Close'].values
    model_lnr = LinearRegression()
    model_lnr.fit(x_train, y_train)
    y_pred = model_lnr.predict(x_test)
    result = model_lnr.predict([[open, high, low, volume]])
    print(result)
        
    
    return {'prediction': result[0]}

        