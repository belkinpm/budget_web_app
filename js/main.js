/* создаем пустой массив для значений из полей ввода и присваиваем 
переменной l количество таких полей */
var myInput = document.querySelectorAll('.my-input'),
    myWarn = document.querySelectorAll('.alert'),
    l = myInput.length,

    myCheckbox = document.querySelectorAll('.form-check-input'),

    myButton = document.querySelector('.btn-primary'),
    clearButton = document.querySelector('.btn-secondary'),

    divResult = document.querySelector('.result'),
    myResult = document.createElement('div');
    

/* создаем функцию, которая проверяет число ли ввел пользователь и
в зависимости от значения добавляет/удаляет значение класса */
function checkInputType() {
    for (var i=0; i < l; i++) {
        if (isNaN(myInput[i].value) == true) {
            myWarn[i].classList.remove("hide");
        } else {
            myWarn[i].classList.add("hide");
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
        myWarn[i].classList.add("hide");
        myResult.remove();
    }
}

/* создаем функцию по расчету и выведению бюджета*/
function countBudget() {
    var myBudget = +myInput[0].value;

    for (var i=1; i<l; i++) {
        if (myCheckbox[i-1].checked == true) {
            myBudget -= myInput[i].value;
        } else {
            myBudget -= myInput[i].value*2;
        }
    }

    if (isNaN(myBudget) == true) {
        divResult.append(myResult);
        myResult.className = "alert alert-danger";
        myResult.innerText = "Please, check red fields and enter only numbers or leave a blank fields";
    } else if (myBudget > 0) {
        divResult.append(myResult);
        myResult.className = "alert alert-success";
        myResult.innerText = "Congradulations!\nYou can save " + myBudget + " Rubles during next two weeks!";
    } else if (myBudget < 0) {
        myBudget = myBudget*(-1);
        divResult.append(myResult);
        myResult.className = "alert alert-danger";
        myResult.innerText = "You need to find " + myBudget + " Rubles for next two weeks!\nPlease, cut your expences or find additional income!";
    } else {
        divResult.append(myResult);
        myResult.className = "alert alert-warning";
        myResult.innerText = "Your budget is very tight!\nYou need to check your expences everyday!";
    }
}

myButton.onclick = countBudget;
clearButton.onclick = clearAll;