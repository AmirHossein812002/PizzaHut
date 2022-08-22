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
