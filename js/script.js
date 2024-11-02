
  // this is the time project by using jquery

//creat a function that redy the jquery File
$(document).ready(function (){
//creat avariable that tell about the current Time
function creatTime(){
let date= new Date()

//slects hour, min and second,
let hour=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()

//setting the am,pm

let session="AM"
//creat a condition that cheack the date is correctly set
if(hour == 0){
    hour= 12;
}
//cheack if hour greaterthan 12 it's that set the session

if(hour >= 12){
    session="PM"
}
//if hour lessthan or equals to 12 hour - 12 
if (hour > 12) {
    hour = hour-12;
  
 
   
}

hour = hour<10?"0"+hour:hour;
min = min<10?"0"+min:min;
sec = sec<10?"0"+sec:sec;

$(".hour").text(hour)
$(".min").text(min)
$(".sec").text(sec)
$(".period").text(session)

//to call the function in every second
setTimeout(creatTime,1000)
}

creatTime()

})

 