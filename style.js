//                     DIGITAl CLOCK  !!!!!


// TO get current time !!!  

let hourElement=document.getElementById("hour");
let minuteElement=document.getElementById("min");
let secondElement=document.getElementById("sec");
let timezone=document.getElementById("timezone");
let grab=document.getElementById("grab");
let Good=document.getElementById("Good");
let imagepg=document.getElementById("imagepg");
let forcomp=new Date().getHours();


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
      

    //    imagepg.style.backgroundImage="URL('./EVENINGiMAGE.png')";
    }
   else if(hours>=16 && hours<20){
    timezone.innerText="PM";
       
    //    imagepg.style.backgroundImage="URL('./lunch_image.png')";
    }
 else  if(hours>=20 && hours<=24){
    timezone.innerText="PM";
      
        // imagepg.style.backgroundImage="URL('./NIGHTIMAGE.png')";
    };
    
// to not display time in 24 hour format
 function hoursdisplay(){
    if(hours>12){
        let newhours=hours-12;
        hourElement.innerText=`${newhours}   hours`;
    }
    // forcomp=hours;
 }
 hoursdisplay();
}
setInterval(clock,1000);




let selectwakeup=document.getElementById("selectwakeup");

let selectlunch=document.getElementById("selectlunch");
let lunchvalues;
let selectnap=document.getElementById("selectnap");
let napvalues;

let selectnight=document.getElementById("selectnight");
let nightvalues;
let wakeup;
let lunchtext;
let naptime;
let nighttime;
let wakeupvalues;
selectwakeup.addEventListener("change",function(event){
    wakeup=`Wake UP Time:${(event.target.selectedOptions[0].text)}`;
    wakeupvalues=event.target.selectedOptions[0].value;
    
})
console.log(wakeupvalues)
selectlunch.addEventListener("change",function(event){
    
    lunchtext=`Lunch Time :${(event.target.selectedOptions[0].text)}`;
    lunchvalues=event.target.selectedOptions[0].value;
})

selectnap.addEventListener("change",function(event){
    naptime=`Nap Time:${(event.target.selectedOptions[0].text)}`;
    napvalues=event.target.selectedOptions[0].value;
    
   
})
selectnight.addEventListener("change",function(event){
    nighttime=`Night Time :${(event.target.selectedOptions[0].text)}`;
    nightvalues=event.target.selectedOptions[0].value;
})
console.log(nightvalues)

// to get text from select by set alarm button
let setAlarmbtn=document.getElementById("setAlarm");
setAlarmbtn.addEventListener("mouseover",function(){
    setAlarm.innerText="PARTY TIME !!!!";
})
setAlarmbtn.addEventListener("mouseleave", function(){
    setAlarm.innerText="SET ALARM ";
})

 ///////////////// -->   set alarm button       <-- \\\\\\\\\\\\

setAlarmbtn.addEventListener("click", function(){
  
    wakeupsummry.innerText=wakeup;
  
    lunchsummry.innerText=lunchtext;
    napsummry.innerText=naptime;
    nightsummry.innerText=nighttime;
   // console.log(timezone.innerText)
   if(forcomp>12){
    forcomp-=12
}
   console.log(forcomp);
   console.log(wakeupvalues);
   console.log(lunchvalues);
   console.log(timezone.innerText)
    if(wakeupvalues==forcomp && timezone.innerText=="PM" || wakeupvalues==forcomp && timezone.innerText=="AM"){
        imagepg.style.backgroundImage="URL('./MORINGIMAGE.png')";
        Good.innerHTML="GOOD MORNING!! ";
        grab.innerHTML="HAVE SOME BREAKFAST !!";
    }
   
    else if(lunchvalues==forcomp && timezone.innerText=="AM" || lunchvalues==forcomp && timezone.innerText=="PM"){
        imagepg.style.backgroundImage="URL('./lunch_image.png')";
        Good.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP";
        grab.innerHTML="LET'S HAVE SOME LUNCH !!";

    }
   
    else if(napvalues==forcomp && timezone.innerText=="AM" || napvalues==forcomp && timezone.innerText=="PM"){
        imagepg.style.backgroundImage="URL('./EVENINGiMAGE.png')";
        Good.innerText="GOOD EVENING !!";
        grab.innerText="STOP YAWNING,GET SOME TEA.. ITS JUST EVENING!";
    }
   
    else if(nightvalues==forcomp && timezone.innerText=="AM" || nightvalues==forcomp && timezone.innerText=="PM"){
        imagepg.style.backgroundImage="URL('./NIGHTIMAGE.png')";
        Good.innerText="GOOD NIGHT !!";
        grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    }
   
    
})
