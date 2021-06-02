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
addLightTheme();
// if (!localStorage.getItem('theme') === Theme.LIGHT) {

//     localStorage.setItem('theme', Theme.LIGHT);
// }

function OnCheckboxChange() {

    if (!document.body.classList.contains(Theme.LIGHT)) {

        addLightTheme();

        localStorage.setItem('theme', Theme.LIGHT);
        localStorage.removeItem('checked');
    }

    addDarkTheme();

    if (document.body.classList.contains(Theme.DARK)) {
        // document.body.classList.remove(Theme.LIGHT);

        localStorage.setItem('theme', Theme.DARK);
        localStorage.setItem('checked', checkboxEl.checked);

    }

}

// Получение темы из localStorage
function savedUserTheme() {

    const checkedValue = localStorage.getItem('checked');
    const themeValue = localStorage.getItem('theme');

    if (checkedValue) {
        localStorage.setItem('theme', Theme.DARK);
        checkboxEl.checked = true;
        addDarkTheme();
    };
    addLightTheme();
    // } else { addLightTheme() };
    // if (themeValue === Theme.LIGHT) {
    //     addLightTheme();
    // }
}

// Функции добавления тем
function addDarkTheme() {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);

    // localStorage.setItem('theme', Theme.DARK);
    // localStorage.setItem('checked', checkboxEl.checked);


}

function addLightTheme() {
    // document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.add(Theme.LIGHT);
    // checkboxEl.checked = false;
    // localStorage.setItem('theme', Theme.LIGHT);

}





