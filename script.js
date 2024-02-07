let hours = 0;
let minutes = 0 ;
let seconds  = 0;
let remainingHours = 0;
let remainingminutes = 0;
let remainingseconds = 0;
let interval;

let inputHour = document.getElementById("inputHour");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");

let disHour = document.getElementById("disHour");
let disminutes = document.getElementById("disminutes");
let disSeconds = document.getElementById("disSeconds");

let inputDiv = document.getElementById("inputDiv");

//buttons
let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnReset = document.getElementById("btnReset");

let endText = document.getElementById("endText")

function renderDisplay(){
     disHour.innerHTML = hours < 10 ? "0" + hours : hours ;
     disminutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
     disSeconds.innerHTML= seconds < 10 ? "0" + seconds : seconds;
}


function clk(){


    if (remainingHours === 0 && remainingminutes === 0 && remainingseconds === 0){
        hours = parseInt(inputHour.value);
        minutes = parseInt(inputMinutes.value);
        seconds = parseInt(inputSeconds.value);
    }else {
        hours = remainingHours;
        minutes = remainingminutes;
        seconds = remainingseconds; 
    }

   
    

    inputDiv.style.display = "none";
    btnStop.style.display = "flex";
    btnStart.style.display = "none";
    btnReset.style.display = "flex";

    interval = setInterval(function(){
        if (hours === 0 && minutes === 0 && seconds === 0){
            stopTimer();
            endText.style.display = "block"
        }else{
            if(seconds > 0){
                seconds--;
            }else {
                if(minutes > 0){
                    minutes--;
                    seconds = 59;
                }else{
                    if(hours > 0){
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }       
            }
        }
        renderDisplay();

    },1000)

    
}

function stopTimer(){
    clearInterval(interval);
    interval = null;
    remainingHours = hours;
    remainingminutes = minutes;
    remainingseconds = seconds;
    btnStart.style.display = "flex";

}

function resetTimer(){
    stopTimer ();
    hours = 0;
    minutes = 0;
    seconds = 0;
    remainingHours = 0;
    remainingminutes = 0;
    remainingseconds = 0;
    
    renderDisplay();

    inputDiv.style.display = "flex";
    inputHour.value = "00"
    inputMinutes.value = "00"
    inputSeconds.value = "00"
    btnStop.style.display = "none";
    btnReset.style.display = "none";
    endText.style.display = "none"


}