'use strict';
/*анимация для фильтра на стр catalog из базового курса js 
не работает функция hidden*/
let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let fitlerIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('filterhidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    fitlerIcon.classList.toggle('filterIconPink');

    if (fitlerIcon.getAttribute('src') === 'images/productscardcapsule-photo.jpg') {
        fitlerIcon.setAttribute('src', 'images/fitlerHover.svg')
    } else {
        fitlerIcon.setAttribute('src', 'images/productscardcapsule-photo.jpg')
    }
});


let fitlerHeader = document.querySelectorAll('.filterCategoryHeader');
fitlerHeader.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let fitlerSize = document.querySelector('.filterSizes');
let fitlerSizeWrap = document.querySelector('.filterSizeWrap');
ftlerSizeWrap.addEventListener('click', function () {
    fitlerSizes.classList.toggle('hidden');
});

/*дз, не совсем понимаю куда это вшить в js 
поэтому не отображается цена и стоимость*/

const products = [
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },
    { title: 'ELLERY X M'O CAPSULE', price: '$52.00' },

]
const renderProduct = (title, price) => {
    return <div class='productscardcapsule-photo'>
        <h3>${title}</h3>
        <p>${price}</p>
        <button class='buy-btn'> Купить</button>
    </div>
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};
renderPage(products);

/*функция для клика в корзину, тоже из базового js, 
не работает функция hidden 
не понимаю почему*/

let baksetTotalValue = document.querySelector('.basketTotalValue');
let catrIconWrap = document.querySelector('.cartIconWrap');
let headerioc = document.querySelector('headerico');
let bakset = document.querySelector('basket');

bakset.addEventListener('click', function () {

    bakset.classList.toggle('hidden');
    headerioc.classList.toggle('headerico.IconRed');


    if (basket.getAttribute('src') === 'images/productscardcapsule-photo.jpg') {
        basket.setAttribute('src', 'images/filterHover.svg')
    } else {
        basket.setAttribute('src', 'images/productscardcapsule-photo.jpg')
    }
});

/*тут хочу вывести итоговое количество товаров после клика*/

let baksetTotalValue = document.querySelector('.basketTotalValue');
baksetTotalValue.addEventListener(click, function () {
    const baksetTotalValue = i;
    var
        i = 0;
    if (i++ < 1) {
        console.log(++i);
    }
});

