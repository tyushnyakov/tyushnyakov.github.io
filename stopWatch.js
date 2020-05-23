const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let time = 0;
let stop;
document.querySelector('.clock').textContent = '00:00:0' + time;
            
function createClock() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60 - hours * 60) ;
    let seconds = time % 60;   
    if (hours < 10) {hours = '0' + hours};
    if (minutes < 10) {minutes = '0' + minutes};
    if (seconds < 10) {seconds = '0' + seconds};
                
     document.querySelector('.clock').textContent = hours + ':' + minutes + ':' + seconds;  
                
    time++;
}            

                
startBtn.onclick = () => {
    stop = setInterval(createClock, 1000);
    startBtn.disabled = true;
    };
stopBtn.onclick = () => {
    clearInterval(stop);
    startBtn.disabled = false;
    };
resetBtn.onclick = () => {
    clearInterval(stop);
    startBtn.disabled = false;
    time = 0;
    document.querySelector('.clock').textContent = '00:00:00';
}