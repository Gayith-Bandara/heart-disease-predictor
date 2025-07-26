from flask import Flask, request, jsonify
import joblib
import numpy as np

app=Flask(__name__)

model = joblib.load('heart_disease_model.pkl')

@app.route("/")
def index():
    return "Hello World"

@app.route("/predict", methods=['POST'])
def predict():
    data = request.get_json(force=True)

    #['age', 'trestbps', 'chol', 'thalch', 'oldpeak', 'sex', 'fbs', 'exang', 'cp', 'restecg', 'slope']

    # sex - Male=1, Female=0
    # fbs - True=1, False=0
    # exang - True=1, False=0
    # cp - typical angina=0, asymptomatic=3, non-anginal=2, atypical angina=1
    # restecg - lv hypertrophy=2, normal=0, st-t abnormality=1
    # slope - downsloping=2, flat=1, upsloping=0

    features = [
        data['age'],
        data['trestbps'],
        data['chol'],
        data['thalch'],
        data['oldpeak'],
        data['sex'],
        data['fbs'],
        data['exang'],
        data['cp'],
        data['restecg'],
        data['slope']
    ]

    input_array = np.array(features).reshape(1, -1)
    # reshape is used to change the shape of the array to have one row and as many columns as needed

    prediction = model.predict(input_array)

    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run()