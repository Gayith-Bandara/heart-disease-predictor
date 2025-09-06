from flask import Flask, request, jsonify
import joblib
import numpy as np

app=Flask(__name__)

model = joblib.load('heart_disease_model.pkl')

@app.route("/test", methods=['GET'])
def test():
    return jsonify({'message' : 'Hello World'})

@app.route("/predict", methods=['POST'])
def predict():
    data = request.get_json(force=True)

    #ensures that the incomming data is converted to the correct order and contains only the values (array of values)
    features = [
        data['bmi'],
        data['smoking'],
        data['drinking'],
        data['stroke'],
        data['phealth'],
        data['mhealth'],
        data['diffwalking'],
        data['sex'],
        data['agecategory'],
        data['race'],
        data['diabetes'],
        data['exercise'],
        data['genhealth'],
        data['sleep'],
        data['asthma'],
        data['kidneydisease'],
        data['skincancer']
    ]

    input_array = np.array(features).reshape(1, -1)
    # reshape is used to change the shape of the array to have one row and as many columns as needed

    prediction = model.predict(input_array)

    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run()