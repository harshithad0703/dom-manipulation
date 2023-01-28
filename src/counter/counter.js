let count = 0;


const createCounter = () => {

    const incrementCount = () => {
        count = count + 1;
        updateCount();
    };
    const decrementCount = () => {
        count = count - 1;
        updateCount();
    };
    const updateCount = () => {
        countValue.innerText = `count : ${count}`;
    };
    const counterContainer = document.createElement("div");
    const counterHeading = document.createElement("h1");
    const counterPara = document.createElement("p");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    counterContainer.classList.add("counterContainer");
    counterHeading.classList.add("counterHeading");
    counterPara.id = "countValue";
    incrementButton.id = "incrementButton";
    decrementButton.id = "decrementButton";

    counterHeading.innerText = "Counter";
    counterPara.innerText = `count : ${count}`;
    incrementButton.innerText = "+";
    decrementButton.innerText = "-";

    incrementButton.onclick = incrementCount;
    decrementButton.addEventListener("click", decrementCount);

    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterPara);
    counterContainer.appendChild(incrementButton);
    counterContainer.appendChild(decrementButton);

    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(counterContainer);
    
}

