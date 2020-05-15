//Global Variables
var getCareer = new Array();
getCareer["chkRealistic1"] = 1;
getCareer["chkRealistic2"] = 1;
getCareer["chkRealistic3"] = 1;
getCareer["chkRealistic4"] = 1;
getCareer["chkRealistic5"] = 1;
getCareer["chkRealistic6"] = 1;

function get2Realistic()
{
    var rTotal = 0;
    var selectedRealistic = document.forms["frm2Career"]["chkRealistic"];

    for (var sel = 0; sel < selectedRealistic.length; sel++)
    {
      if (selectedRealistic[sel].checked)
      		rTotal += getCareer[selectedRealistic[sel].value]
    }
      
    document.getElementById("lbl2Realistic").innerHTML = rTotal+ "/6 Checked"
}//End of function getRealisticCareer()