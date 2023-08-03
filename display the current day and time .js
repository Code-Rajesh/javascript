// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38

const todaydate = new Date();


const day = todaydate.getDay();

const hr = todaydate.getHours();
const min= todaydate.getMinutes();
const sec = todaydate.getSeconds();

const dayname = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];



document.getElementById('day').innerHTML = "Today Is "+ ":"+dayname[day]+".";

if(hr>=12){
    document.getElementById('time').innerHTML="Current Time Is"+":"+ (hr-12)+"  "+"PM"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}

else
{
    document.getElementById('time').innerHTML="Current Time Is"+":"+ hr+"  "+"AM"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}



