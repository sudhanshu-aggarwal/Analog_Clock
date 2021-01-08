let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('minute');
let secondHand = document.getElementById('second');



function rotating() {

    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let sec = second * (360/60) - 90;
    let min = (minute * (360/60)) + (second/10) -90;
    let hr = (hour * (360/12)) + (minute/2) - 90;


    hourHand.style.transform = "rotate(" + hr + "deg)";
    minuteHand.style.transform = "rotate(" + min + "deg)";
    secondHand.style.transform = "rotate(" + sec + "deg)";
}

setInterval(rotating, 1000);