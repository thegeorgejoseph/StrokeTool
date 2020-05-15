//Global Variables
var getCareer = new Array();
getCareer["chkRealistic1"] = 1;
getCareer["chkRealistic2"] = 1;
getCareer["chkRealistic3"] = 1;
getCareer["chkRealistic4"] = 1;
getCareer["chkRealistic5"] = 1;
getCareer["chkRealistic6"] = 1;
getCareer["chkRealistic7"] = 1;
getCareer["chkRealistic8"] = 1;
getCareer["chkRealistic9"] = 1;

function get1Realistic()
{
    var rTotal = 0;
    var selectedRealistic = document.forms["frm1Career"]["chkRealisticone"];

    for (var sel = 0; sel < selectedRealistic.length; sel++)
    {
      if (selectedRealistic[sel].checked)
      		rTotal += getCareer[selectedRealistic[sel].value]
    }
      
    document.getElementById("lbl1Realistic").innerHTML = rTotal+ "/9 of the causes of Heartdisease selected."
}//End of function getRealisticCareer()