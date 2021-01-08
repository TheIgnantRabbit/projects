const menus = document.querySelectorAll('.menu');
const menuDiv = document.querySelector('.menuDiv');
const menuDaily = document.querySelector('.menuDaily');
const menuChicken = document.querySelector('.menuChicken');
const menuCatering = document.querySelector('.menuCatering');
// const menuDivTransform = document.querySelector('.menuDivTransform');
const expandDaily = document.querySelector('.expandDaily');
const expandChicken = document.querySelector('.expandChicken');
const expandCatering = document.querySelector('.expandCatering');
const main = document.querySelector('#main-content');
const featuresContainer = document.querySelector('.featuresContainer');

document.addEventListener('click', e => {
    let target = e.target;

    menuDiv.classList.add('menuDivTransform');
    featuresContainer.style['margin-top'] = '100px';

    if (target === menuDaily) {
        e.target.classList.add('d-none');
        expandDaily.classList.remove('d-none');
        expandChicken.classList.add('d-none');
        expandCatering.classList.add('d-none');

        menuChicken.classList.remove('d-none');
        menuCatering.classList.remove('d-none');

    } else if (target === menuChicken) {
        e.target.classList.add('d-none');
        expandChicken.classList.remove('d-none');
        expandDaily.classList.add('d-none');
        expandCatering.classList.add('d-none');

        menuDaily.classList.remove('d-none');
        menuCatering.classList.remove('d-none');
    } else if (target === menuCatering) {
        e.target.classList.add('d-none');
        expandCatering.classList.remove('d-none');
        expandChicken.classList.add('d-none');
        expandDaily.classList.add('d-none');

        menuChicken.classList.remove('d-none');
        menuDaily.classList.remove('d-none');
    } else {
        expandCatering.classList.add('d-none');
        expandChicken.classList.add('d-none');
        expandDaily.classList.add('d-none');

        menuChicken.classList.remove('d-none');
        menuDaily.classList.remove('d-none');
        menuCatering.classList.remove('d-none');

        menuDiv.classList.remove('menuDivTransform');
    }
})