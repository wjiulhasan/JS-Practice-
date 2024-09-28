let [seconds,minuts,hour]=[0,0,0];
let displaytime = document.getElementById("displaytime");
let timer= null;
function stopwatch(){
    seconds++;
    if(seconds== 60){
        seconds = 0;
        minuts++;
        if(minuts==60){
            minuts= 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minuts < 10 ? "0" + minuts : minuts;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displaytime.innerHTML= h +":"+ m  +":" + s;
}
function Start() {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [seconds,minuts,hour]=[0,0,0];
    displaytime.innerHTML = "00:00:00";
}