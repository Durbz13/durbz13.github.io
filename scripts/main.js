const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/311160.png") {
    myImage.setAttribute("src", "images/firefox-icon.png");
  } else {
    myImage.setAttribute("src", "images/311160.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mountains are cool, ${myName}`;
  }
}
myButton.onclick = () => {
  setUserName();
};
