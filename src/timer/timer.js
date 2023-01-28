function createTimer() {
    let hour = 0;
    let minute = 0;
    let second = 0;
    let ms = 0;
    let timer = null;

    const timerContainer = document.createElement("div");
    const timerHeading = document.createElement("h1");
    const timerValue = document.createElement("p");
    const timerButtonContainer = document.createElement("div");
    const resetButton = document.createElement("button");
    const startButton = document.createElement("button");
    const stopButton = document.createElement("button");

    timerContainer.classList.add("timerContainer");
    timerHeading.classList.add("timerHeading");
    timerValue.classList.add("timerValue");
    timerButtonContainer.classList.add("timerButtonContainer");
    startButton.classList.add("startButton");
    resetButton.classList.add("resetButton");
    stopButton.classList.add("stopButton");

    timerHeading.innerText = "Timer";
    timerValue.innerHTML = `00<span></span>:00<span></span>:00<span></span>`;
    startButton.innerText = "Start";
    resetButton.innerText = "Reset";
    stopButton.innerText = "Stop";

    function displayTimer() {
        ms += 10;
        if (ms == 1000) {
            ms = 0;
            second++;
            if (second == 60) {
                minute++;
                second = 0;
                if (minute == 60) {
                    hour++;
                    minute = 0;
                }
            }
        }

        let hrStr = (hour < 10) ? "0" + hour : hour;
        let minStr = (minute < 10) ? "0" + minute : minute;
        let secStr = (second < 10) ? "0" + second : second;
        let msStr = ""
        if (ms < 10) {
            msStr = "00" + ms;
        }
        else if (ms < 100) {
            msStr = "0" + ms;
        }
        else {
            msStr = ms;
        }
        timerValue.innerHTML = `${hrStr}<span></span>:${minStr}<span></span>:${secStr}<span></span>`;
    }
    startButton.addEventListener('click', () => {
        if (timer !== null) {
            return;
        }
        timer = setInterval(displayTimer, 10); 
    });

    stopButton.addEventListener('click', () => {
        clearInterval(timer);
        timer = null;
    })

    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        timer = null;
        timerValue.innerHTML = `00<span></span>:00<span></span>:00<span></span>`;
        ms = 0;
        second = 0;
        minute = 0;
        hour = 0;
    })

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(timerContainer);
    timerContainer.appendChild(timerHeading);
    timerContainer.appendChild(timerValue);
    timerContainer.appendChild(timerButtonContainer);
    timerButtonContainer.appendChild(startButton);
    timerButtonContainer.appendChild(resetButton);
    timerButtonContainer.appendChild(stopButton);
}
