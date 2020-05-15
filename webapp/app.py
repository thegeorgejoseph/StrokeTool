import flask
import pickle
import pandas as pd

with open(f'model/finalized_model.sav', 'rb') as f:
    model = pickle.load(f)

app = flask.Flask(__name__, template_folder='templates')

@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        # Just render the initial form, to get input
        return(flask.render_template('index.html'))
    
    if flask.request.method == 'POST':
        # Extract the input
        gender = flask.request.form['gender']
        if gender == 'male':
            Gender = 1
        else:
            Gender = 0

       
        age = flask.request.form['age']
        Age = float(age)

        hypertension = flask.request.form['hypertension']
        if hypertension == 'yes':
            Hypertension = 1
        else:
            Hypertension = 0
        

        heartdisease = flask.request.form['heartdisease']
        if heartdisease == 'yes':
            Heartdisease = 1
        else:
            Heartdisease = 0
        

        ever_married = flask.request.form['ever_married']
        if ever_married == 'yes':
            Ever_married = 1
        else:
            Ever_married = 0
        

        work_type = flask.request.form['work_type']
        if work_type == "children":
        	Work_type = 0
        elif work_type == "private":
        	Work_type = 1
        elif work_type == "never-worked":
        	Work_type = 2
        elif work_type == "self-employed":
        	Work_type = 3
        elif work_type == "government-job":
        	Work_type = 4
        

        residence_type = flask.request.form['residence_type']
        if residence_type == "urban":
            Residence_type = 1
        else:
            Residence_type = 0 
        


        glucose = flask.request.form['glucose']
        Glucose = float(glucose)

        kilograms = flask.request.form['kilograms']
        meters = flask.request.form['meters']
        KG = float(kilograms)
        MS = float(meters)

        Bmi = KG / (MS*MS)

        smoke = flask.request.form['smoke']
        if smoke == "never-smoked":
            Smoke = 0
        elif smoke == "formerly-smoked":
            Smoke = 1
        elif smoke == "smokes":
            Smoke = 2
        


        # Make DataFrame for model
        input_variables = pd.DataFrame([[Gender, Age, Hypertension, Heartdisease, Ever_married, Work_type, Residence_type, Glucose, Bmi, Smoke]],
                                       columns=['gender', 'age', 'hypertension', 'heartdisease', 'ever_married', 'work_type', 'residence_type', 'glucose', 'bmi', 'smoke'],
                                       dtype=float,
                                       index=['input'])

        # Get the model's prediction
        prediction = model.predict_proba(input_variables)[0]
    
        #Risk Number generator for Javascript
        risk = prediction[0]
        if risk<=0.3:
            riskno = 1
        elif risk>0.3 and risk<=0.7:
            riskno = 2
        elif risk>0.7:
            riskno = 3
        

        # Render the form again, but add in the prediction and remind user
        # of the values they input before
        return flask.render_template('index.html', 
                                     original_input={'gender':gender,
                                                     'age':age,
                                                     'hypertension':hypertension,
                                                     'heartdisease': heartdisease,
                                                     'ever_married': ever_married,
                                                     'work_type': work_type,
                                                     'residence_type': residence_type,
                                                     'glucose':glucose,
                                                     'kilograms':kilograms,
                                                     'meters': meters,
                                                     'smoke' : smoke},
                                     result=prediction[0], riskvar=riskno, hyper= hypertension, heart = heartdisease, bmin = Bmi,sugar = glucose,
                                     )


if __name__ == '__main__':
    app.run(debug=True)