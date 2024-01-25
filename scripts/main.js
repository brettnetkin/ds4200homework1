let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Golfer.jpg') {
    myImage.setAttribute ('src', 'images/Family.jpg');
  } else if (mySrc === 'images/Family.jpg') {
    myImage.setAttribute ('src', 'images/Brett.jpg');
  } else if (mySrc === 'images/Brett.jpg') {
    myImage.setAttribute ('src', 'images/Golfer.jpg');
  }
}

let myButton = document.querySelector('button');
let myButton2 = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Brett Netkin\'s website, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to Brett Netkin\'s website, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}