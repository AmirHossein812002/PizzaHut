//*******
//COUNTER
//*******
const plusEl = document.querySelectorAll(".plus");
const minusEl = document.querySelectorAll(".minus");
const numberEl = document.querySelectorAll(".number");

for (let i = 0; i < plusEl.length; i++) {
    plusEl[i].addEventListener('click', function () {
        const number = parseInt(numberEl[i].textContent) + 1;
        if (number >= 100) {
        
        }
        else if (number <= 9) {
            numberEl[i].textContent = "0" + number;
        } else {
            numberEl[i].textContent = "" + number;
        }
    });
    
    minusEl[i].addEventListener('click', function () {
        const number = parseInt(numberEl[i].textContent) - 1;
        if (number < 0) {
        
        }
        else if (number <= 9) {
            numberEl[i].textContent = "0" + number;
        } else {
            numberEl[i].textContent = "" + number;
        }
    });
}

//*********
//CUSTOMIZE
//*********

const stepEl = document.querySelectorAll(".step");
const toppingsEl = document.querySelectorAll(".toppings");

for (let i = 0; i < stepEl.length; i++) {
    stepEl[i].addEventListener('click', function () {
        for (let j = 0; j < stepEl.length; j++) {
            if (j === i) {
                continue;
            }
            stepEl[j].classList.remove('current');
            toppingsEl[j].classList.remove('current');
        }
        stepEl[i].classList.toggle('current');
        toppingsEl[i].classList.toggle('current');
    });
}
const toppingEl = document.querySelectorAll(".topping");
const customizeImgEl = document.querySelectorAll(".customize-img");
for (let i = 0; i < toppingEl.length; i++) {
    toppingEl[i].addEventListener('click', function () {
        if (i >= 0 && i <=2) {
            for (let j = 0; j < 3; j++) {
                if (i === j)
                    continue;
                toppingEl[j].classList.remove('current');
                customizeImgEl[j].classList.remove('current');
            }
        }
        if (i >= 3 && i <=7) {
            for (let j = 3; j < 8; j++) {
                if (i === j)
                    continue;
                toppingEl[j].classList.remove('current');
                customizeImgEl[j].classList.remove('current');
            }
        }
        if (i >= 8 && i <=10) {
            for (let j = 8; j < 11; j++) {
                if (i === j)
                    continue;
                toppingEl[j].classList.remove('current');
                customizeImgEl[j].classList.remove('current');
            }
        }
        toppingEl[i].classList.toggle('current');
        customizeImgEl[i].classList.toggle('current');
    });
}