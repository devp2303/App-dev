let titleElement = document.getElementById("header");

function changeTitle(){
    titleElement.innerText = "Welcome to my website "+ nameInput.value +"!";
    titleElement.style.color = "red";
    titleElement.style.fontSize = "xx-large"
}

function changeBackground(){
    document.body.style.backgroundImage = "url('img_tree.png')";
    //document.body.style.backgroundImage = "url('https://1000logos.net/wp-content/uploads/2019/09/Maryland-Terrapins-Logo-1996.png')";
}
let clickMeBtn = document.getElementById("clickMe")
clickMeBtn.addEventListener("click", changeBackground)

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

function changeGreeting() {
    greeting.innerText = nameInput.value;
}

nameInput.addEventListener("input", changeTitle);