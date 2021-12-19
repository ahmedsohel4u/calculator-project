const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');
const arr = [];

for (items of btn) {
    items.addEventListener('click', (e) => {
        const inputValue = e.target.innerText;
        screen.value += inputValue;
    });
};


function clearInput () {
    screen.value = '';
};
function sin() {
    screen.value = Math.sin(screen.value);
};
function tan() {
    screen.value = Math.tan(screen.value);
};
function paw() {
    screen.value = Math.pow(screen.value, 2);
};
function cos() {
    screen.value = Math.cos(screen.value)
};
function log() {
    screen.value = Math.log(screen.value);
};
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2)
}
function pi() {
    screen.value = 3.14159265359;
};
function e() {
    screen.value = 2.71828182846;
};