
setTimeout(function() {
    setInterval(getTime, 10);
}, 10);

function getTime() {
    var date = new Date();
    var hur = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();


    var timeData1 = document.getElementById("TimeData1");
    var timeData2 = document.getElementById("TimeData2");
    var timeData3 = document.getElementById("TimeData3");
    var timeData4 = document.getElementById("TimeData4");
    var timeData5 = document.getElementById("TimeData5");
    var timeData6 = document.getElementById("TimeData6");
    var timeData7 = document.getElementById("TimeData7");
    var timeData8 = document.getElementById("TimeData8");
    var timeData9 = document.getElementById("TimeData9");
    var timeData10 = document.getElementById("TimeData10");


    if (timeData1 == null
        && timeData2 == null
        && timeData3 == null
        && timeData4 == null
        && timeData5 == null
        && timeData6 == null
        && timeData7 == null
        && timeData8 == null
        && timeData9 == null
        && timeData10 == null
        ) {
        return;
    }

    if (Number(hur) < 10)
        hur = '0' + hur;

    if (Number(min) < 10)
        min = '0' + min;

    if (Number(sec) < 10)
        sec = '0' + sec;

    var time = hur + ":" + min + ":" + sec;
    timeData1.innerText = time;
    timeData2.innerText = time;
    timeData3.innerText = time;
    timeData4.innerText = time;
    timeData5.innerText = time;
    timeData6.innerText = time;
    timeData7.innerText = time;
    timeData8.innerText = time;
    timeData9.innerText = time;
    timeData10.innerText = time;
}
