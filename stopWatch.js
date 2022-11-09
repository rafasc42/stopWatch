let displayEl = document.querySelector("#display");
let startEl = document.querySelector("#start");
let stopEl = document.querySelector("#stop");
let resetEl = document.querySelector("#reset");
let seconds = 0;
let minutes = 0;
let loop = null;

function timer(){
    startEl.removeEventListener("click", timer);
    loop = setInterval(()=>{
        if(minutes < 10 && seconds < 10){
            displayEl.innerHTML = ("0"+minutes+":0"+seconds);
        } else if(minutes < 10 && seconds > 9){
            displayEl.innerHTML = ("0"+minutes+":"+seconds);
        } else if(minutes > 9 && seconds < 10){
            displayEl.innerHTML = (minutes+":0"+seconds);
        } else {
            displayEl.innerHTML = (minutes+":"+seconds);
        }
        seconds ++;
        if(seconds > 60){
            seconds = 0;
            minutes = minutes + 1;
        }
    }, 1000);
}


startEl.addEventListener("click", timer);

stopEl.onclick = function(){
    startEl.addEventListener("click", timer);
    clearInterval(loop);
}

resetEl.addEventListener("click", ()=>{
    startEl.addEventListener("click", timer);
    clearInterval(loop);
    displayEl.innerHTML = ("00:00");
    seconds = 0;
    minutes = 0;
});