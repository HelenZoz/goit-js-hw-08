//Для цього додай до проекту і використовуй бібліотеку
//lodash.throttle.

var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('input[name=email]');
const messageEl = document.querySelector('textarea[name=message]');

// Нехай ключем для сховища буде рядок "feedback-form-state".
let FFS_KEY = "feedback-form-state";

// Відстежуй на формі подію input, і щоразу записуй у локальне 
// сховище об'єкт з полями email і message, у яких зберігай поточні 
// значення полів форми.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 
// мілісекунд.

formEl.addEventListener('input', throttle(handleInputText, 500));
formEl.addEventListener('submit', handleFormSubmit);

let formData = {};


function handleInputText(e) {

    formData[e.target.name] = e.target.value;
    localStorage.setItem(FFS_KEY, JSON.stringify(formData));
    // console.log({ email: `${emailEl.value}`, message: `${messageEl.value}` });

}

// Під час сабміту форми очищуй сховище і поля форми, а також виводь
// у консоль об'єкт з полями email, message та їхніми поточними значеннями.
function handleFormSubmit(e) {
    e.preventDefault();

    if (emailEl.value !== '' && messageEl.value !== '') {
        localStorage.removeItem(FFS_KEY);

        // formData.email = emailEl.value;
        // formData.message = messageEl.value;
        console.log({ email: `${emailEl.value}`, message: `${messageEl.value}` });

        e.target.reset();
        return;
    }
    alert('Все поля должны быть заполнены!');
}

// // Під час завантаження сторінки перевіряй стан сховища, і якщо там
// // є збережені дані, заповнюй ними поля форми.В іншому випадку поля
// // повинні бути порожніми.
usersText();

function usersText() {
    const saveText = localStorage.getItem(FFS_KEY);
    const obj = JSON.parse(saveText);

    if (obj) {
        formData = obj;
        emailEl.value = obj.email;
        messageEl.value = obj.message;
    }
}


