let headerElement = document.getElementById("header");

function changeTitle(){
    titleElement.innerText = "wow hello";
    titleElement.style.color = "red";
}
//setTimeout(changeTitle, 1000);


let clickMeBtn = document.getElementById("clickMe")
clickMeBtn.addEventListener("click", changeTitle)