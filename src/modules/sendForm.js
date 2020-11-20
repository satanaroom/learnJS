'use strict';
const sendForm = () => {
    //Валидация номера телефона
    document.addEventListener('input', event => {
        if (event.target.matches('.form-phone')) {
            event.target.value = event.target.value.replace(/^[\+]?[0-9]{1}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{17}$/im, '');
            document.addEventListener('change', event => {
                if (event.target.matches('.form-phone')) {
                    event.target.value = event.target.value.replace(/^\D/gi, '');
                    event.target.value = event.target.value.replace(/\D$/gi, '');
                    if (event.target.value.length < 5) {
                        event.target.value = '';
                    } 
                }
            });
        } else if (event.target.matches('.form-name') || 
        event.target.matches('#form2-name')) {
            event.target.value = event.target.value.replace(/[^А-Яа-яЁе ]/gi, '');
        } else if (event.target.matches('#form2-message')) {
            event.target.value = event.target.value.replace(/[^А-Яа-яЁе \,\.\!\?]/gi, '');
        } 
    });

    const errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся!';

    let loadMessage = `<div class="loadMessage"></div>`;

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        let shell,
            emailShell;
        
        if (event.target === form1) {
            shell = form1;
            emailShell = document.getElementById("form1-email");
        } else if (event.target === form2) {
            shell = form2;
            emailShell = document.getElementById("form2-email");
        } else if (event.target === form3) {
            shell = form3;
            emailShell = document.getElementById("form3-email");
        }

        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            address = emailShell.value;
        if(reg.test(address) === false) {
            alert('Введите корректный e-mail');
            return false;
        }

        shell.appendChild(statusMessage);

        statusMessage.style.color = `white`;
        statusMessage.innerHTML = loadMessage;
        const removeStatusMessage = () => {
            setTimeout(() => {
                const popup = document.querySelector('.popup');
                popup.style.display = "none";
            }, 2000);
            statusMessage.remove();
        };
        setTimeout(removeStatusMessage, 5000);

        const formData = new FormData(shell);
        let body = {};
        for (let value of formData.entries()) {
            body[value[0]] = value[1];
        }

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            })
            .then(() => {
                document.querySelectorAll('.form-name').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('.form-phone').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('.form-email').forEach((elem)=> {
                    elem.value = '';
                });
                document.querySelectorAll('.top-form').forEach((elem)=> {
                    elem.value = '';
                });
                let messageInput = document.getElementById('form2-message');
                messageInput.value = '';
            });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });     
    };
};

export default sendForm;