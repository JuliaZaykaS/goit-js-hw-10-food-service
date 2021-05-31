import cardTpl from './templates/card.hbs';
import menu from './menu.json';

// Шаблон разметки

// console.log(cardTpl(menu));
const menuMarkup = cardTpl(menu);

const menuListEl = document.querySelector('.js-menu');
menuListEl.insertAdjacentHTML('beforeend', menuMarkup);


// Смена темы
const checkboxEl = document.querySelector('#theme-switch-toggle');
console.log(checkboxEl);

// console.log(checkboxEl.getAttribute('checked'));

checkboxEl.addEventListener('change', OnCheckboxChange);

const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme', };

// document.body.classList.add(Theme.LIGHT);
populateTextarea();

function OnCheckboxChange(evt) {
    // const checkboxValue = evt.target.value;
    // console.log(checkboxValue);
    // const checkboxValue = evt.target.value;
    // document.body.classList.add(Theme.LIGHT);


    if (!document.body.classList.contains(Theme.LIGHT)) {
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem('LIGHT', Theme.LIGHT);
        localStorage.removeItem('DARK');
        checkboxEl.removeAttribute('checked');
        localStorage.removeItem('checked');
    }

    document.body.classList.toggle(Theme.DARK);
    if (document.body.classList.contains(Theme.DARK)) {
        document.body.classList.remove(Theme.LIGHT);

        checkboxEl.setAttribute('checked', true);
        localStorage.setItem('checked', true);
        localStorage.setItem('DARK', Theme.DARK);
        localStorage.removeItem('LIGHT');
    }

}
function populateTextarea() {

    const checkedValue = localStorage.getItem('checked');
    console.log(checkedValue);
    if (checkedValue) {

         localStorage.setItem('DARK', Theme.DARK);

    }
}
// Сохранение темы в localStorage



// if (document.body.classList.contains('light-theme')) {

//     localStorage.setItem(Theme.LIGHT);
//     localStorage.removeItem(Theme.DARK);
// } else {

//     localStorage.setItem(Theme.DARK, [Theme.DARK]);
//     localStorage.removeItem(Theme.LIGHT);
// }





