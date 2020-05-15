function myFunction(){
    var temp = document.getElementById("trial").innerHTML;
    var num = parseInt(temp,10);
    var digit = num+5;
    if (digit == 6){

        document.getElementById('trial').innerHTML = "Your probability of risk of stroke is on the LOWER end of the RISK spectrum among all the people who have used this application. However, you are suggested to utilise the Nutrition Assistant tool to ensure that you continue practising healthy lifestyle actions in order to maintain your commendable stroke risk probability.";

    }
    else if(digit == 7){

        document.getElementById('trial').innerHTML = "Your probability of risk of stroke is on the INTERMEDIATE level of the RISK spectrum among all the people who have used this application. Please go ahead and navigate to the Nutrition Assistant to learn about the lifestyle changes that can be made to reduce said risk and ensure that it does not aggravate into a higher probability of risk of stroke.";

    }
    else if( digit == 8) {

        document.getElementById('trial').innerHTML = "Your probability of risk of stroke is on the HIGHER end of the RISK spectrum among all the people who have used this applicaiton. Please get medical attention with a licensed medical professional as soon as poossible regarding the actual risk of health and the lifestyle changes that can be made. Navigate to the Nutrition Assistant in order to understand some of the measures that can be taken to alleviate some stroke risk.<br><a style='background-color:orange'class='btn-rounded-white' href='http://www.google.com/search?q=cardiac+doctors+near+me'>Click here to find medical assistance</a>";

    }


}

function hyperanalyserFunction(){
    var temp = document.getElementById("hyperten").innerHTML;
    if (temp == "You have selected yes for hypertension."){
        document.getElementById("hyper").innerHTML = "<b>Causes of Hypertension could be : </b><br>Smoking<br>Being overweight or obese<br>Lack of physical activity<br>Too much salt in the diet<br>Too much alcohol consumption (more than 1 to 2 drinks per day)<br>Stress<br>Older age<br>Genetics<br>Family history of high blood pressure<br>Chronic kidney disease<br>Adrenal and thyroid disorders<br>Sleep apnea<br><br>";
    }
}

function heartanalyserFunction(){

    var temp =  document.getElementById("heartdis").innerHTML;
    if (temp == "You have selected yes for heartdisease."){
        document.getElementById("heart").innerHTML = "<b>Causes of Heart Disease could be:</b><br>Age<br>Sex<br>Family History<br>Smoking<br>Heart defects you're born with(congenital heartdefects)<br>Coronary artery disease<br>High blood pressure<br>Excessive use of alcohol or caffeine<br>Drug abuse<br>Stress<br>Some over-the-counter medications,prescription medications,dietary supplements and  herbal remedies<br>Valvular heartdisease<br><br>";
    }
}

function bmianalyserFunction(){

    var temp = document.getElementById("bmi").innerHTML;
    var num = parseFloat(temp);
    if ( num < 18.5 ){
        document.getElementById("beemi").innerHTML = " YOU ARE UNDERWEIGHT!<br><br><18.5 is underweight<br>18.5 to 25 it is normal<br>25 to 30 is overweight<br>30+ is obese<br><br>";
    }
    else if( num>=18.5 && num<25.0){
        document.getElementById("beemi").innerHTML = " YOU ARE NORMAL!<br><br><18.5 is underweight<br>18.5 to 25 it is normal<br>25 to 30 is overweight<br>30+ is obese<br><br>";
    }
    else if(num>=25 && num<30.0){
        document.getElementById("beemi").innerHTML = " YOU ARE OVERWEIGHT!<br><br><18.5 is underweight<br>18.5 to 25 it is normal<br>25 to 30 is overweight<br>30+ is obese<br><br>";
    }
    else if(num>=30.0){
        document.getElementById("beemi").innerHTML = " YOU ARE OBESE!<br><br><18.5 is underweight<br>18.5 to 25 it is normal<br>25 to 30 is overweight<br>30+ is obese<br><br>";
    }
}

function sugaranalyserFunction(){

    var temp = document.getElementById("suga").innerHTML;
    var num = parseInt(temp,10);
    if ( num>=50 && num<70){
        document.getElementById("sugari").innerHTML = " YOU HAVE LOW BLOOD SUGAR LEVELS!<br><br>100 mg/dL is normal<br>100-125 mg/dL is prediabetic<br>126+ mg/dL is diabetic<br><br>";
    }
    else if( num == 100){
        document.getElementById("sugari").innerHTML = " YOU HAVE NORMAL BLOOD SUGAR LEVELS!<br><br>100 mg/dL is normal<br>100-125 mg/dL is prediabetic<br>126+ mg/dL is diabetic<br><br>";
    }
    else if( num>100 && num <=125){
        document.getElementById("sugari").innerHTML = " YOU HAVE PREDIABETIC BLOOD SUGAR LEVELS!<br><br>100 mg/dL is normal<br>100-125 mg/dL is prediabetic<br>126+ mg/dL is diabetic<br><br>";
    }
    else if( num>=126){
        document.getElementById("sugari").innerHTML = " YOU HAVE DIABETIC BLOOD SUGAR LEVELS!<br><br>100 mg/dL is normal<br>100-125 mg/dL is prediabetic<br>126+ mg/dL is diabetic<br><br>";
    }
    else{
        document.getElementById("sugari").innerHTML = " <br>100 mg/dL is normal<br>100-125 mg/dL is prediabetic<br>126+ mg/dL is diabetic<br><br>";
    }
}