// document.getElementsByClassName('main-title')[0].style.color = 'red'

document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

let links = document.querySelectorAll('.menu-item > a');

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({ behavior: 'smooth' });
    }
}

let buttons = document.getElementsByClassName('product-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    }
}

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');


document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
    }
}


let prices = document.getElementsByClassName('products-item-price');
document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = '$';
    let coefficient = 1;

    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 89;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 7.7;
        // }else if (currentCurrency === '¥'){
        //     newCurrency = 'KGS';
        //     coefficient = 65;
        // }else if (currentCurrency === 'KGS'){
        //     newCurrency = '₸'
        //     coefficient = 5;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency
    }
}

const form = document.getElementById('order-form');

form.addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const burgerInput = document.getElementById('burger');

    if (!nameInput.checkValidity()) {
        alert('Пожалуйста, введите только буквы в поле с именем!');
        event.preventDefault();
    }
    if (!phoneInput.checkValidity()) {
        alert('Пожалуйста, введите только цифры в поле с телефоном!');
        event.preventDefault();
    }
    if (!burgerInput.checkValidity()) {
        alert('Пожалуйста, введите только буквы в поле с именем!');
        event.preventDefault();
    }
});
