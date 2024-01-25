let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Golfer.JPG') {
    myImage.setAttribute ('src', 'images/Family.JPG');
  } else if (mySrc === 'images/Family.JPG') {
    myImage.setAttribute ('src', 'images/Brett.JPG');
  } else if (mySrc === 'images/Brett.JPG') {
    myImage.setAttribute ('src', 'images/Golfer.JPG');
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
