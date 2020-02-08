let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "images/pioners.jpg") {
    myImage.setAttribute("src","images/oktyabryata.jpg");
  } else {
    myImage.setAttribute("src","images/pioners.jpg");
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Введите Ваше имя');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Привет,' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привет,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
