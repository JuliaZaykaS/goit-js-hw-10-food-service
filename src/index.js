import cardTpl from './templates/card.hbs';
import menu from './menu.json';

console.log(cardTpl(menu));
const menuMarkup = cardTpl(menu);

const menuListEl = document.querySelector('.js-menu');
menuListEl.insertAdjacentHTML('beforeend', menuMarkup);

