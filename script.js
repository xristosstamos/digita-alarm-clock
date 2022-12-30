const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

/*function updateTime() {
    let time = new Date();
    let minutes = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());
    let hour = formatTime(time.getHours());

    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}*/

function formatTime(time) {
    if ( time < 10){
        return '0' + time ;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert(`Alarm set`);
        }
    }
}


function clearAlarm(){
    audio. pause();
    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);