/* DOOM MANIPULATION */
let secondsSpan = document.querySelector('#seconds');
let minutesSpan = document.querySelector('#minutes');   
const timerButton  = document.querySelector('#timer--button');  
const mainContent = document.querySelector('#principal');

/* VARIABLES RELATIVAS */
let secondsValue = 0;
let minutesValue = 0;
let currentInterval;
let currentButton;

/* BUTTON START */
const btn1 = document.querySelector('#start');
btn1.addEventListener('click', start);


function start() {
    currentButton = event.target;
    currentButton.disabled = true;
    currentInterval = setInterval(() => {
        secondsValue += 1;
        if (secondsValue === 60) {
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        };
        secondsSpan.textContent = formatValue(secondsValue);
    }, 10);
};

function formatValue (value) {
    return ('0' + value).slice(-2);
};


/* BUTTON STOP */
const btn2 = document.querySelector('#stop');
btn2.addEventListener('click', stop);

function stop () {
    if (currentButton) {
        currentButton.disabled = false;
    };

    clearInterval(currentInterval);
};

/* BUTTON RESTART */
const btn3 = document.querySelector('#restart');
btn3.addEventListener('click', reset);

function reset () {
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = '00';
    minutesSpan.textContent = '00';
};

function startTimer () {
    event.preventDefault();
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);

    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    secondsValue = seconds;
    minutesValue = minutes;

    currentInterval = setInterval(() => {
        secondsValue -= 1;
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        };
        if (minutesValue === 0 && secondsValue === 0) {
            clearInterval(currentInterval);
            const container = document.querySelector('.hero--time');
            const title = document.createElement('h2');
            title.textContent = "El timer a terminado";
            container.append(title);
        };
        minutesSpan.textContent =  formatValue(minutes);
        secondsSpan.textContent =  formatValue(secondsValue);
    }, 1000);
};
/* TIMMER BUTTON */
function executeTimer() {
    
    mainContent.innerHTML = `
    <h1 class="hero--title">Timer</h1>
    <div class="hero--time">
    <p id="time">
    <span id="minutes">00 :</span>
            <span id="seconds">00</span>
        </p>
    </div>
    <div class="hero--buttons">
        <form onsubmit="startTimer()">
            <input class="input1"
            type="number" placeholder="Escribe los minutos"
            id="minutesInput" name="minutes">
            </input>
            <input class="input2"
            type="number" placeholder="Escribe los segundos"
            id="secondsInput" name="seconds">
            </input>
            <button type="submit">Start</button>
        </form>
    </div>
    `;
    secondsSpan = document.querySelector('#seconds');
    minutesSpan = document.querySelector('#minutes');
};


function executeChronometer () {

    mainContent.innerHTML = `
    <h1 class="hero--title">Chrometer</h1>
    <div class="hero--time">
        <p id="time">
            <span id="minutes">00 :</span>
            <span id="seconds">00</span>
        </p>
    </div>
    <div class="hero--buttons">
        <button class="button header--button" type="button"
        id="start">
            Start
        </button>
        <button class="button header--button" type="button"
        id="stop">
            Stop
        </button>
        <button class="button header--button" type="button"
        id="restart">
            Restart
        </button>
    </div>
    `;
    secondsSpan = document.querySelector('#seconds');
    minutesSpan = document.querySelector('#minutes'); 
};

