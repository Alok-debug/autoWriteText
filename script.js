const text = 'This text will be auto written on the screen';
let index = 0;

function autoWrite() {
    let end = index % text.length;
    document.body.innerText = text.slice(0, end);
    index++;
}
setInterval(autoWrite, 100);