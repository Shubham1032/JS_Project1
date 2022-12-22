//                     DIGITAl CLOCK  !!!!!


// TO get current time !!!  

let hourElement=document.getElementById("hour");
let minuteElement=document.getElementById("min");
let secondElement=document.getElementById("sec");
let timezone=document.getElementById("timezone");
let grab=document.getElementById("grab");
let Good=document.getElementById("Good");
let imagepg=document.getElementById("imagepg");

function clock(){
    let timer=new Date();
   // console.log(timer);
    let hours=timer.getHours();
    let minutes=timer.getMinutes();
    let seconds=timer.getSeconds();
    
    minuteElement.innerText=`${minutes}    min`;
    secondElement.innerText=`${seconds}      sec `;
    hourElement.innerText=`${hours}     hours`;
    if(hours>=12 && hours<16){
        timezone.innerText="PM";
        Good.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP";
        grab.innerText="LET'S HAVE SOME LUNCH !!";
       imagepg.style.backgroundImage="URL('./lunch_image.png')";
    }
   else if(hours>=16 && hours<20){
    timezone.innerText="PM";
        Good.innerText="GOOD EVENING !!";
        grab.innerText="STOP YAWNING,GET SOME TEA.. ITS JUST EVENING!";
        imagepg.style.backgroundImage="URL('./EVENINGiMAGE.png')";
    }
 else  if(hours>=20 && hours<=24){
    timezone.innerText="PM";
        Good.innerText="GOOD NIGHT !!";
        grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        imagepg.style.backgroundImage="URL('./NIGHTIMAGE.png')";
    };
    
// to not display time in 24 hour format
 function hoursdisplay(){
    if(hours>=12){
        let newhours=hours-12;
        hourElement.innerText=`${newhours}   hours`;
    }
 }
 hoursdisplay();
}
setInterval(clock,1000);




let selectwakeup=document.getElementById("selectwakeup");
let selectlunch=document.getElementById("selectlunch");
let selectnap=document.getElementById("selectnap");
let selectnight=document.getElementById("selectnight");
let wakeup;
let lunchtext;
let naptime;
let nighttime;

selectwakeup.addEventListener("change",function(event){
    wakeup=`Wake UP Time:${(event.target.selectedOptions[0].text)}`;
})
selectlunch.addEventListener("change",function(event){
    lunchtime=`Lunch Time :${(event.target.selectedOptions[0].text)}`;
})
selectnap.addEventListener("change",function(event){
    naptime=`Nap Time:${(event.target.selectedOptions[0].text)}`;
})
selectnight.addEventListener("change",function(event){
    nighttime=`Night Time :${(event.target.selectedOptions[0].text)}`;
})

// to get text from select by set alarm button
let setAlarmbtn=document.getElementById("setAlarm");
setAlarmbtn.addEventListener("mouseover",function(){
    setAlarm.innerText="PARTY TIME !!!!";
})
setAlarmbtn.addEventListener("mouseleave", function(){
    setAlarm.innerText="SET ALARM ";
})
setAlarmbtn.addEventListener("click", function(){
    wakeupsummry.innerText=wakeup;
    lunchsummry.innerText=lunchtime;
    napsummry.innerText=naptime;
    nightsummry.innerText=nighttime;

})