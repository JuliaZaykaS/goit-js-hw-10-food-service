import cardTpl from './templates/card.hbs';
import menu from './menu.json';

// Шаблон разметки

const menuMarkup = cardTpl(menu);

const menuListEl = document.querySelector('.js-menu');
menuListEl.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme', };

// Смена темы
const checkboxEl = document.querySelector('#theme-switch-toggle');

checkboxEl.addEventListener('change', OnCheckboxChange);


savedUserTheme();

function OnCheckboxChange() {

    if (!document.body.classList.contains(Theme.LIGHT)) {

        addLightTheme();

        localStorage.setItem('theme', Theme.LIGHT);
        localStorage.removeItem('checked');
    }

    addDarkTheme();

    if (document.body.classList.contains(Theme.DARK)) {
        document.body.classList.remove(Theme.LIGHT);

        localStorage.setItem('theme', Theme.DARK);
        localStorage.setItem('checked', checkboxEl.checked);

    }

}

// Получение темы из localStorage
function savedUserTheme() {

    const checkedValue = localStorage.getItem('checked');

    if (checkedValue) {
        localStorage.setItem('theme', Theme.DARK);
        checkboxEl.checked = true;
        addDarkTheme();
    }
}

// Функции добавления тем
function addDarkTheme() {
    document.body.classList.toggle(Theme.DARK);

}

function addLightTheme() {
    document.body.classList.toggle(Theme.LIGHT);

}





