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
        updateClock();
        setInterval(updateClock, 1000);
    }
    countTimer('10 november 2020');

    //Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        body.addEventListener('click', event => {
            let target1 = event.target;
            const target2 = event.target;
            target1 = target1.closest('.menu');
            if (target1) {
                handlerMenu();
            } else if (target2.classList.contains('close-btn')) {
                handlerMenu();
            } else if (target2.matches('ul>li>a')) {
                handlerMenu();
            }
        });
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
        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = "none";
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = "none";
                }
            }
        });
    };
    togglePopUp();
    //Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            ulDots = document.querySelector('.portfolio-dots');
        let currentSlide = 0,
            interval;
        for (let i = 0; i < slide.length; i++) {
            const dot = document.createElement("li");
            if (i === 0) {
                dot.classList.add("dot-active");
            }
            dot.classList.add("dot");
            ulDots.append(dot);
        }
        const dot = document.querySelectorAll('.dot');
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlider = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlider = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlider();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlider();
            }
        });
        startSlider(1500);
    };
    slider();
    //Our Team switch
    const switchTeam = () => {
        document.addEventListener('mouseover', event => {
            if (event.target.matches('.command__photo')) {
                event.target.src = event.target.dataset.img;
            }
        });
        document.addEventListener('mouseout', event => {
            if (event.target.matches('.command__photo')) {
                const datasetImg = event.target.dataset.img,
                    originSrc = datasetImg.replace(/a(?=.jpg)/g, "");
                event.target.src = originSrc;
            }
        });
    };
    switchTeam();
    //Validation for culc
    document.addEventListener('input', event => {
        if (event.target.matches('.calc-item')) {
            event.target.value = event.target.value.replace(/\D/gi, '');
        }
    });
});
