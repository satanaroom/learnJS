'use strict';
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            if (window.innerWidth >= 768) {
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
            document.querySelectorAll('.form-name').forEach((elem)=> {
                elem.value = '';
            });
            document.querySelectorAll('.form-phone').forEach((elem)=> {
                elem.value = '';
            });
            document.querySelectorAll('.form-email').forEach((elem)=> {
                elem.value = '';
            });
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
                document.querySelectorAll('.form-name').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('.form-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('.form-email').forEach((elem)=> {
                    elem.value = '';
                });
            }
        }
    });
};

export default togglePopUp;