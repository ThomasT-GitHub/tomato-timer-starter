let timerID;

let studyBtn = document.getElementById('study-btn');
let breakBtn = document.getElementById('break-btn');

studyBtn.addEventListener('click', function () {
    clearInterval(timerID);
    startTimer(1500);
    updateStudySessionCount();
})

breakBtn.addEventListener('click', function () {
    clearInterval(timerID);
    startTimer(300);
    updateBreakSessionCount();
})

function updateTimerDisplay(minutes, seconds) {
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let time = document.getElementById('time-left');
    time.innerText = minutes + ":" + seconds;
}

function startTimer(duration) {
    minutes = Math.floor(duration / 60);
    seconds = Math.floor(duration % 60);

    updateTimerDisplay(minutes, seconds);

    timerID = setInterval(() => {
        duration = duration - 1;

        minutes = Math.floor(duration / 60);
        seconds = Math.floor(duration % 60);

        updateTimerDisplay(minutes, seconds);
        
        if (duration === 0) {
            clearInterval(timerID);
            return;
        }
    }, 1000)
}

function updateStudySessionCount() {
    let count = document.getElementById('study-count');
    count.innerText = parseInt(count.innerText) + 1;
}

function updateBreakSessionCount() {
    let count = document.getElementById('break-count');
    count.innerText = parseInt(count.innerText) + 1;
}