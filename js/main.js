// -- render content --
function CreateElement(name, container) {

    this.parent = document.querySelector(container);

    this.tag = {
        div: "div",
        span: "span",
        input: "input",
        lable: "lable",
        close: "button"
    },

    this.class = {
        group: "input-group flex-nowrap",
        descript: "input-group-prepend",
        span: "input-group-text capital",
        input: "form-control my-input",
        alert: "alert alert-danger",
        check: "form-group form-check",
        checkbox: "form-check-input",
        lable: "form-check-lable",
        close: "btn btn-light"
    },

    this.attribute = {
        span_id: "addon-wrapping",
        input_type: "text",
        input_placeholder: "Input your value",
        check_type: "checkbox"
    },

    this.text = {
        alert: "Please, enter a number or leave a blank field.",
        check: "One week only",
        close: "⊝"
    },

    this.createElem = function() {
        var group = document.createElement(this.tag.div);
        group.className = this.class.group;
        this.parent.append(group);

        var descript = document.createElement(this.tag.div);
        descript.className = this.class.descript;
        group.append(descript);

        var span = document.createElement(this.tag.span);
        span.className = this.class.span;
        span.setAttribute('id', this.attribute.span_id);
        span.innerText = name;
        descript.append(span);

        var input = document.createElement(this.tag.input);
        input.className = this.class.input;
        input.setAttribute('type', this.attribute.input_type);
        input.setAttribute('placeholder', this.attribute.input_placeholder);
        group.append(input);

        var close = document.createElement(this.tag.div);
        close.className = this.class.close;
        close.innerText = this.text.close;
        group.append(close);

        // -- make a button instead element
        close.onclick = function() {
            addButton = new CreateButton(name, container);
            addButton.createBut();
            group.remove();
            descript.remove();
            alert.remove();
            check.remove();
        }

        // -- check input number or not
        input.onblur = function() {
            if (isNaN(input.value) == true) {
                check.after(alert);
            } else {
                alert.remove();
            }
        }

        var alert = document.createElement(this.tag.div);
        alert.className = this.class.alert;
        alert.innerText = this.text.alert;

        var check = document.createElement(this.tag.div);
        check.className = this.class.check;
        group.after(check);

        var checkbox = document.createElement(this.tag.input);
        checkbox.className = this.class.checkbox;
        checkbox.setAttribute('type', this.attribute.check_type);
        check.append(checkbox);

        var lable = document.createElement(this.tag.lable);
        lable.className = this.class.lable;
        lable.innerText = this.text.check;
        check.append(lable);
    }
}

function CreateButton(name, container) {
    this.parent = document.querySelector(container);
    var elem = new CreateElement(name, container);

    this.createBut = function() {
        var button = document.createElement('button');
        button.setAttribute('id', name);
        button.className = "btn btn-outline-primary";
        button.innerText = "+ " + name;
        this.parent.prepend(button);
        
        // -- make an element instead button
        button.onclick = function() {
            elem.createElem();
            button.remove();
        }
    }
}

var budget = new CreateElement('budget', '.incomes');
budget.createElem();

var expenceName = [
    'food',
    'bills',
    'gazoline',
    'debt',
    'home staff',
    'education',
    'wear',
    'taxes',
    'investments'
    ,'pets',
    'sport',
    'beauty',
    'gifts',
    'not planned'
];

for (var j = 0; j < expenceName.length; j++) {
    name = expenceName[j];
    var addButton = new CreateButton(name, '.expences');
    addButton.createBut();
}

// -- count result
var myButton = document.querySelector('.btn-primary'),
    clearButton = document.querySelector('.btn-secondary'),
    myResult = document.createElement('div');

function clearAll() {
    var alert = document.querySelectorAll('.alert');
    for (var i = 0; i < alert.length; i++) {
        alert[i].remove();
    }

    myResult.remove();
}

function countBudget() {
    var myInput = document.querySelectorAll('.my-input'),
        myCheckbox = document.querySelectorAll('.form-check-input'),
        divResult = document.querySelector('.result'),
        myBudget = +myInput[0].value;

    for (var i = 1; i < myInput.length; i++) {
        if (myCheckbox[i].checked == true) {
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