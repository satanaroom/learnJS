window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';
    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            return { timeRemaining, hours, minutes, seconds };
        }
        const updateClock = function() {
            const timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.timeRemaining < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(updateClock);
            }
        };
        setInterval(updateClock, 1000);
    }
    countTimer('10 november 2020');

    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li>a');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();
    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');
        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (window.innerWidth > 768) {
                    popup.style.display = "block";
                    popupContent.style.opacity = "0";
                    let x = 0;
                    const timer = setInterval(() => {
                        x += 0.1;
                        popupContent.style.opacity = `${x}`;
                        if (popupContent.style.opacity === "1.1") {
                            clearInterval(timer);
                        }
                    }, 20);
                } else {
                    popup.style.display = "block";
                }
            });
        });
        popupClose.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                let x = 1;
                const timer = setInterval(() => {
                    x -= 0.1;
                    popupContent.style.opacity = `${x}`;
                    if (popupContent.style.opacity === "-0.1") {
                        clearInterval(timer);
                        popup.style.display = "none";
                    }
                }, 1);
            } else {
                popup.style.display = "none";
            }
        });
    };
    togglePopUp();
});
