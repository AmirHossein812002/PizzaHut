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
        
        } else if (number <= 9) {
            numberEl[i].textContent = "0" + number;
        } else {
            numberEl[i].textContent = "" + number;
        }
    });
    
    minusEl[i].addEventListener('click', function () {
        const number = parseInt(numberEl[i].textContent) - 1;
        if (number < 0) {
        
        } else if (number <= 9) {
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
let priceEl = document.querySelectorAll(".customize-specification-number")[0];
let caloriesEl = document.querySelectorAll(".customize-specification-number")[1];

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
let cal = +0;
for (let i = 0; i < toppingEl.length; i++) {
    toppingEl[i].addEventListener('click', function () {
                let dough = false, sauce = false, cheese = false;
                if (i >= 0 && i <= 2) {
                    for (let j = 0; j < 3; j++) {
                        if (i === j)
                            continue;
                        if (toppingEl[j].classList.contains('current')) {
                            dough = true;
                        }
                        toppingEl[j].classList.remove('current');
                        customizeImgEl[j].classList.remove('current');
                    }
                }
                if (i >= 3 && i <= 7) {
                    for (let j = 3; j < 8; j++) {
                        if (i === j)
                            continue;
                        if (toppingEl[j].classList.contains('current')) {
                            sauce = true;
                        }
                        toppingEl[j].classList.remove('current');
                        customizeImgEl[j].classList.remove('current');
                    }
                }
                if (i >= 8 && i <= 10) {
                    for (let j = 8; j < 11; j++) {
                        if (i === j)
                            continue;
                        if (toppingEl[j].classList.contains('current')) {
                            cheese = true;
                        }
                        toppingEl[j].classList.remove('current');
                        customizeImgEl[j].classList.remove('current');
                    }
                }
                toppingEl[i].classList.toggle('current');
                customizeImgEl[i].classList.toggle('current');
                let price = +0;
                let calories = +0;
                if (i >= 0 && i <= 2) {
                    if (dough) {
                        price = 0;
                        calories = 0
                    } else {
                        price = 2;
                        calories = 100;
                    }
                } else if (i >= 3 && i <= 7) {
                    if (sauce) {
                        price = 0;
                        calories = 0
                    } else {
                        price = 1;
                        calories = 100;
                    }
                } else if (i >= 8 && i <= 10) {
                    if (cheese) {
                        price = 0;
                        calories = 0;
                    } else {
                        price = 3;
                        calories = 250;
                    }
                } else if (i >= 11 && i <= 19) {
                    price = 3;
                    calories = 200;
                } else {
                    price = 1.5;
                    calories = 75;
                }
                if (toppingEl[i].classList.contains('current')) {
                    priceEl.textContent = parseInt(priceEl.textContent) + price;
                    cal+= calories;
                    if (cal >= 1000) {
                        caloriesEl.textContent = (cal / 1000) + 'k';
                    } else {
                        caloriesEl.textContent = cal;
                    }
                } else {
                    priceEl.textContent = parseInt(priceEl.textContent) - price;
                    cal-=calories;
                    if (cal >= 1000) {
                        caloriesEl.textContent = (cal / 1000) + 'k';
                    } else {
                        caloriesEl.textContent = cal;
                    }
                }
            }
    );
}

//******
//FOOTER
//******

const yearEl = document.querySelector(".year");
const currenYear = new Date().getFullYear();
yearEl.textContent = currenYear;

//******
//MOBILE
//******

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle("nav-open");
});

//**********
//STICKY NAV
//**********

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
    } else {
        document.body.classList.add("sticky");
    }
}, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});
observer.observe(sectionHeroEl);

//*****************************
//CUSTOMIZE SPECIFICATION WIDTH
//*****************************

const calEl = document.querySelector(".calories");

window.matchMedia("(max-width:39em)").addEventListener('change', function (e) {
    if (window.matchMedia("(max-width:39em)").matches) {
        calEl.textContent = "cal";
    } else {
        calEl.textContent = "calories";
    }
});

let width = screen.width;
width*=(window.devicePixelRatio || 1);

if (width <= '39em') {
    calEl.textContent = "cal";
} else {
    calEl.textContent = "calories";
}