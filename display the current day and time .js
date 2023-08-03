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

if(hr>=12 && hr<=15){
    document.getElementById('time').innerHTML="Current Time Is"+":"+ (hr-12)+"  "+"PM NOON"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}
else if(hr>=15 && hr<=20) {
    document.getElementById('time').innerHTML="Current Time Is"+":"+ (hr-12)+"  "+"PM EVENING"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}

else if(hr>=20 && hr<=24)
{
    document.getElementById('time').innerHTML="Current Time Is"+":"+ (hr-12)+"  "+"PM NIGHT"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
    
}
else if(hr==24){
    document.getElementById('time').innerHTML="Current Time Is"+":"+ hr+"  "+"MIDNIGHT"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}

else{
document.getElementById('time').innerHTML="Current Time Is"+":"+ hr+"  "+"AM"+"  "+":"+"  "+min+"  "+":"+"  "+sec;
}