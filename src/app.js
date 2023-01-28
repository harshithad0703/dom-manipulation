function app() {

    const appContainer = document.createElement("div");
    const appHeading = document.createElement("h1");
    const timerRadioContainer = document.createElement("div");
    const timerRadio = document.createElement("input");
    const timerRadioLabel = document.createElement("label");
    const countRadioContainer = document.createElement("div");
    const countRadio = document.createElement("input");
    const countRadioLabel = document.createElement("label");

    appContainer.classList.add("appContainer");
    appHeading.classList.add("appHeading");
    timerRadioContainer.classList.add("timerRadioContainer");
    timerRadio.classList.add("timerRadio");
    timerRadioLabel.classList.add("timerRadioLabel");
    countRadioContainer.classList.add("countRadioContainer");
    countRadio.classList.add("countRadio");
    countRadioLabel.classList.add("countRadioLabel");

    appHeading.innerText = "DOM MANIPULATION";
    timerRadio.type = "radio";
    timerRadio.value = "timer";
    timerRadio.id = "timer";
    timerRadioLabel.htmlFor = "timer";
    timerRadioLabel.innerText = "TIMER";

    countRadio.type = "radio";
    countRadio.value = "counter";
    countRadio.id = "counter";
    countRadioLabel.htmlFor = "counter";
    countRadioLabel.innerText = "COUNTER";


    countRadio.addEventListener('click', () => {
        countRadio.checked = true;
        timerRadio.checked = false;
        createCounter();

        const timerContainer = document.querySelector(".timerContainer");
        if (timerContainer !== null) {
            timerContainer.remove();
        }
    });

    timerRadio.addEventListener('click', () => {
        timerRadio.checked = true;
        countRadio.checked = false;
        createTimer();

        const counterContainer = document.querySelector(".counterContainer");
        if (counterContainer !== null) {
            counterContainer.remove();
        }
    });

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(appContainer);
    appContainer.appendChild(appHeading);
    appContainer.appendChild(countRadioContainer);
    countRadioContainer.appendChild(countRadio);
    countRadioContainer.appendChild(countRadioLabel);
    appContainer.appendChild(timerRadioContainer);
    timerRadioContainer.appendChild(timerRadio);
    timerRadioContainer.appendChild(timerRadioLabel);
    
}

app();