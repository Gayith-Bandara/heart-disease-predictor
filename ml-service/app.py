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

    features = [
        data['BMI'],
        data['Smoking'],
        data['AlcoholDrinking'],
        data['Stroke'],
        data['PhysicalHealth'],
        data['MentalHealth'],
        data['DiffWalking'],
        data['Sex'],
        data['AgeCategory'],
        data['Race'],
        data['Diabetic'],
        data['PhysicalActivity'],
        data['GenHealth'],
        data['SleepTime'],
        data['Asthma'],
        data['KidneyDisease'],
        data['SkinCancer']
    ]

    input_array = np.array(features).reshape(1, -1)
    # reshape is used to change the shape of the array to have one row and as many columns as needed

    prediction = model.predict(input_array)

    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run()