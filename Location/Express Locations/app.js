const menus = document.querySelectorAll('.menu');
const adDiv = document.querySelector('.adDiv');
const adDaily = document.querySelector('.adCFME');
// const menuDivTransform = document.querySelector('.menuDivTransform');
const expandAd = document.querySelector('.expandAd');
const main = document.querySelector('#main-content');
const featuresContainer = document.querySelector('.featuresContainer');

document.addEventListener('click', e => {
    let target = e.target;

    adDiv.classList.add('adDivTransform');
    featuresContainer.style['margin-top'] = '100px';

    if (target === adDaily) {
        e.target.classList.add('d-none');
        expandAd.classList.remove('d-none');

    } else {
        expandAd.classList.add('d-none');
        adDaily.classList.remove('d-none');
        adDiv.classList.remove('adDivTransform');
    }
})