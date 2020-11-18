'use strict';
const sendForm = () => {
    //Валидация номера телефона
    document.addEventListener('input', event => {
        if (event.target.matches('.form-phone')) {
            event.target.value = event.target.value.replace(/[^+0-9]/gi, '');
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
        let shell;
        
        if (event.target === form1) {
            shell = form1;
        } else if (event.target === form2) {
            shell = form2;
        } else if (event.target === form3) {
            shell = form3;
        }
        shell.appendChild(statusMessage);
            statusMessage.style.color = `white`;
            statusMessage.innerHTML = loadMessage;
        const removeStatusMessage = () => {
            statusMessage.remove();
        };
            setTimeout(removeStatusMessage, 7000);
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