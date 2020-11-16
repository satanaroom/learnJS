'use strict';

const output = document.getElementById('output');

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                resolve(response);
            } else {
                reject(request.statusText);
            }
        });
        request.send();
    });
};

const outputPhotos = (data) => {
    // const random = Math.floor(Math.random() * data.length);
    // const obj = data[random];
    data.forEach((item) => {
        output.insertAdjacentHTML('beforebegin', 
        `<h4>${item.title}</h4>
        <img src="${item.thumbnailUrl}" alt="${item.title}">`);
    });
};

const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
    twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');


// oneImg
//     .then(outputPhotos)
//     .catch(error => console.log(error));

// twoImg
//     .then(outputPhotos)
//     .catch(error => console.log(error));

Promise.all([oneImg, twoImg])
    .then(outputPhotos)
    .catch(error => console.log(error));

// Promise.all([oneImg, twoImg]);


// getData(urlPhotos)
//     .then(outputPhotos)
//     .catch(error => console.error(error));