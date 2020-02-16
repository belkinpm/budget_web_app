/* создаем пустой массив для значений из полей ввода и присваиваем 
переменной l количество таких полей */
var myInputArr = [],
    l = document.getElementsByClassName('my-input').length,
    myWarn = [],
    myButton = document.getElementById('btn'),
    i;

/* создаем функциюб которая наполняет значениями массивы */
function saveArr() {
    for (i = 0; i < l; i++) {
        myInputArr[i] = +document.getElementsByClassName('my-input')[i].value;
        myWarn[i] = document.getElementsByClassName('warning')[i];
    }
}

/* создаем функцию которая проверяет число ли ввел пользователь и
в зависимости от значения добавляет/удаляет значение класса */
function checkInputType() {
    saveArr();

    for (i=0; i < l; i++) {
        if (isNaN(myInputArr[i]) == true) {
            myWarn[i].classList.add("show");
        } else {
            myWarn[i].classList.remove("show");
        }
    }
}

/* создаем функцию которая запускает функцию проверки на число после 
того, как пользователь вышел из поля ввода*/

myButton.onclick = checkInputType;