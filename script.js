let s = 1; //seconds
let m = 1;// minutes
let h = 1;// hours

const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")


setInterval(function () {

    if (s < 60) {
        if (s < 10) {
            seconds.innerHTML = "0" + s++;
        }
        else {
            seconds.innerHTML = s++;
        }

    }
    else {
        s = 0;
        if (s < 10) {
            seconds.innerHTML = "0" + s++;
        }
        else {
            seconds.innerHTML = s++;
        }
        ///////////////////MINUTES///////////////////
        if (m < 60) {
            if (m < 10) {
                minutes.innerHTML = "0" + m++;
            }
            else {
                minutes.innerHTML = m++;
            }

        }
        else {
            m = 0;
            if (m < 10) {
                minutes.innerHTML = "0" + m++;
            }
            else {
                minutes.innerHTML = m++;

            }
            //////////////////HOURS///////////////////
            if (h < 12) {
                if (h < 10) {
                    hours.innerHTML = "0" + h++;
                }
                else {
                    hours.innerHTML = h++;
                }

            }
            else {
                h = 0;
                if (h < 10) {
                    hours.innerHTML = "0" + h++;
                }
                else {
                    hours.innerHTML = h++;
                }

            }
        }
    }
}, 1000)

setInterval(function () {
    const blinker1 = document.querySelectorAll("[id='blinker1']");

    for (let i = 0; i < blinker1.length; i++) {
        blinker1[i].classList.toggle("d-none");
        console.log(blinker1.length)

    }

}, 500)





