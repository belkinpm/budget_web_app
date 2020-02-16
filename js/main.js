/* создаем пустой массив для значений из полей ввода и присваиваем 
переменной l количество таких полей */
var myInputArr = [],
    myInput = document.getElementsByClassName('my-input'),
    l = myInput.length,
    myWarn = [],
    myButton = document.getElementById('btn'),
    clearButton = document.getElementById('clrBtn'),
    i;

/* создаем функцию, которая наполняет значениями массивы */
function saveInput() {
    for (i = 0; i < l; i++) {
        myInputArr[i] = +myInput[i].value;
        myWarn[i] = document.getElementsByClassName('warning')[i];
    }
}

/* создаем функцию, которая проверяет число ли ввел пользователь и
в зависимости от значения добавляет/удаляет значение класса */
function checkInputType() {
    saveInput();

    for (i=0; i < l; i++) {
        if (isNaN(myInputArr[i]) == true) {
            myWarn[i].classList.add("show");
            myInput[i].classList.add("red-border");
        } else {
            myWarn[i].classList.remove("show");
            myInput[i].classList.remove("red-border");
        }
    }
}

function clearAll() {
    saveInput();

    for (i=0; i < l; i++) {
        myWarn[i].classList.remove("show");
        myInput[i].classList.remove("red-border");
    }
}

/* созадем функцию по проверке введеных значений в любом из полей ввода, 
когда пользователь покидает это поле ввода */
function checkAll() {
    for (i=0; i < l; i++) {
        myInput[i].onblur = checkInputType;
    }
}

/* запускаем функцию по проверке введеных значений*/
checkAll();

/* создаем функцию по расчету и выведению бюджета*/
function countBudget() {
    i = 1;
    var myBudget = +myInput[0].value;

    for (i=1; i<l; i++) {
        myInputArr[i] = +myInput[i].value;
        myBudget = myBudget - myInputArr[i]*2;
    }
    if (isNaN(myBudget) == true) {
        alert('Please, check red fields and enter only numbers or leave a blank fields')
    } else if (myBudget > 0) {
        alert('Congradulations!\nYou can save ' + myBudget + 'rub during next two weeks!');
    } else if (myBudget < 0) {
        myBudget = myBudget*(-1);
        alert('You need to find ' + myBudget + 'rub for next two weeks!\nPlease, cut your expences or find additional income!');
    } else {
        alert('Your budget is very tight!\nYou need to check your expences everyday!');
    }
}

myButton.onclick = countBudget;
clearButton.onclick = clearAll;