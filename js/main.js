var myInput = document.getElementsByTagName('input');
var myWarn = document.getElementsByClassName('warning');
var myButton = document.getElementById('btn');

/*
This function checks type of input valuу 
and add text if value is not a number */
function myFunc() {
    for (i=0; i < 3; i++) {
        myInputValue = +myInput[i].value;
        if (isNaN(myInputValue) == true) {
            myWarn[i].classList.add("show");
        } else {
            myWarn[i].classList.remove("show");
        }
    }
}
function checkAll() {
    for (i=0; i < 3; i++) {
        myInput[i].onblur = myFunc;
    }
}
checkAll();

/*
This function counts budget
function countBudget() {
}

myButton.onclick = countBudget; */