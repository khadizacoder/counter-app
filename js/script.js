const counterText = document.getElementById('counterText');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const clearBtn = document.getElementById('clearBtn');

let counter = parseInt(localStorage.getItem('counter')) || '00';
counterText.innerText = counter;
let countId = null

startBtn.addEventListener('click', () => {
    if (countId) return;
    countId = setInterval(() => {
        counter++;
        localStorage.setItem('counter', counter);
        if (counter < 10) {
            counterText.innerText = '0' + counter;

        } else {
            counterText.innerText = counter;
        }
    }, 500);
});
stopBtn.addEventListener('click', () => {
    clearInterval(countId)
    countId = null;
});

clearBtn.addEventListener('click', () => {
    // clearInterval(countId);
    // countId = null;
    counter = 0;
    counterText.innerText = counter;
    localStorage.removeItem('counter');
});

