let clock = document.querySelector('h2#clock');

function test(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

test();
setInterval(test, 1000);
