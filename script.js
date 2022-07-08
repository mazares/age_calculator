`use strict`;

console.log(`hello`);

const introText = document.querySelector(`.intro--text`);

const inputBoxItem = document.querySelector(`.input--box--item`);

const inputBoxValue = document.querySelector(`.input--box--value`);

const btnOk = document.querySelector(`.btn--ok`);

const btnReset = document.querySelector(`.btn--reset`);

const infosText = document.querySelector(`.infos--text`);

const now = new Date();

const year = now.getFullYear();

class PersonCl {
    constructor(firstName, birthYear) {
        (this.firstName = firstName), (this.birthYear = birthYear);
    }
}

const listUser = btnOk.addEventListener(`click`, () => {
    const user = new PersonCl(inputBoxItem.value, year - inputBoxValue.value);

    infosText.textContent = `${user.firstName} is ${user.birthYear} years old`;
    introText.textContent = `Hello, ${user.firstName}!`;

    console.log(user.firstName, user.birthYear);
});