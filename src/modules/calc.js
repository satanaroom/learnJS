'use strict';
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue = Math.floor(countValue + (calcCount.value - 1) / 10);
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue = Math.floor(dayValue * 2);
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue = Math.floor(dayValue * 1.5);
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }   
        // setInterval( () => {
        //     totalValue.textContent = total;
        //     if (total < total.value) { 
        //         total++;
        //     }
        // }, 100);
        totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('.calc-type') || 
        target.matches('.calc-square') || 
        target.matches('.calc-day') || 
        target.matches('.calc-count')) {
            countSum();
        }
    });

    //Validation for calc
    document.addEventListener('input', event => {
        if (event.target.matches('.calc-square') || 
        event.target.matches('.calc-day') || 
        event.target.matches('.calc-count')) {
            event.target.value = event.target.value.replace(/\D/gi, '');
        }
    });
};

export default calc;