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

function getRealistic()
{
    var rTotal = 0;
    var selectedRealistic = document.forms["frmCareer"]["chkRealistic"];

    for (var sel = 0; sel < selectedRealistic.length; sel++)
    {
      if (selectedRealistic[sel].checked)
      		rTotal += getCareer[selectedRealistic[sel].value]
    }
      
    document.getElementById("lblRealistic").innerHTML = rTotal+ "/9 Checked"
}//End of function getRealisticCareer()