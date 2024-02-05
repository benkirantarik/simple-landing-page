'use strict';

var start_secounds_value = 60 * 60;

function countdown(e) {

    var count = e;

    var x = setInterval(() => {


        if (count == 0) {
            alert('إنتهى العرض');
            document.body.innerHTML = `<div id="end-countdown-div"><h1>إنتهى العرض</h1><button class="p-2">قائمة العروض الجديدة</button></div>`;
            clearInterval(x);
        }

        var hour = Math.floor(count / 3600);
        var min = Math.floor(count / 60 % 60);
        var sec = Math.floor(count % 60);

        if (hour < 10) { hour = `0${hour}` }
        if (min < 10) { min = `0${min}` }
        if (sec < 10) { sec = `0${sec}` }

        countdown_div.innerHTML = `${hour} : ${min} : ${sec}`;

        count--;
    }
        , 1000);


}

countdown(start_secounds_value);