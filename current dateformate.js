// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();



const month = date.getMonth();
const day   = date.getDay();
const year  = date.getFullYear();
const monthar = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

if(day<10)
{
    document.getElementById('date').innerHTML=(monthar[month])+"-"+"0"+day+"-"+year;
}
else{
    document.getElementById('date').innerHTML=(monthar[month])+"-"+day+"-"+year;
}


