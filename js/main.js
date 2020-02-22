/* создаем пустой массив для значений из полей ввода и присваиваем 
переменной l количество таких полей */
var myInput = document.querySelectorAll('.my-input'),
    myWarn = document.querySelectorAll('.warning'),
    l = myInput.length,
    myButton = document.getElementById('btn'),
    clearButton = document.getElementById('clrBtn');

/* создаем функцию, которая проверяет число ли ввел пользователь и
в зависимости от значения добавляет/удаляет значение класса */
function checkInputType() {
    for (var i=0; i < l; i++) {
        if (isNaN(myInput[i].value) == true) {
            myWarn[i].classList.add("show");
            myInput[i].classList.add("red-border");
        } else {
            myWarn[i].classList.remove("show");
            myInput[i].classList.remove("red-border");
        }
    }
}

/* созадем функцию по проверке введеных значений в любом из полей ввода, 
когда пользователь покидает это поле ввода */
function checkAll() {
    for (var i=0; i < l; i++) {
        myInput[i].onblur = checkInputType;
    }
}

/* запускаем функцию по проверке введеных значений */
checkAll(); 

function clearAll() {
    for (var i=0; i < l; i++) {
        myWarn[i].classList.remove("show");
        myInput[i].classList.remove("red-border");
    }
}

/* создаем функцию по расчету и выведению бюджета*/
function countBudget() {
    var myBudget = +myInput[0].value;

    for (var i=1; i<l; i++) {
        myBudget -= myInput[i].value*2;
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