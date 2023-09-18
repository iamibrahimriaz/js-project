// Tab Part JS
let tabButtons = document.querySelectorAll(".tab-btn");

function tabButton(btn_class) {
    var tab_btn = document.querySelectorAll(".tab-btn");
    tab_btn.forEach((btn) => {
        if(btn.className.includes(btn_class)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function tabContent(content_class) {
    var tab_contents = document.querySelectorAll(".tab-content");
    tab_contents.forEach((content) => {
        if(content.className.includes(content_class)) {
            content.classList.add("active");
        } else {
            content.classList.remove("active");
        }
    });
}

tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (this.className.includes("one")) {
            tabButton('one');
            tabContent('one');
        }
        if (this.className.includes("two")) {
            tabButton('two');
            tabContent('two');
        }
        if (this.className.includes("three")) {
            tabButton('three');
            tabContent('three');
        }
    });
});

let allertButton1 = document.querySelector("#allert_one");
allertButton1.addEventListener('click', function () {
    alert('Welcome to JS Fundamentals'); 
    alert('Best of Luck');
});

let promptButton1 = document.querySelector("#prompt_one");
promptButton1.addEventListener('click', function () {
    let player = prompt('How Many Players play cricket in each team?', '');
    player == 11 ? alert('Right!') : alert('Wrong.')
});


let confirmButton1 = document.querySelector("#confirm_one");
confirmButton1.addEventListener('click', function () {
    let js = confirm('Let\'s learn JS Fundamentals');

    js ? alert('Welcome!') : alert('Tata!')
});





  