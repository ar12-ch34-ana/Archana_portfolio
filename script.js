/* Created by Tivotal */

let text = document.querySelector(".multiText");

let writeText = () => {
  setTimeout(() => {
    text.textContent = "Python  Developer";
  }, 500);

  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 4500);

  setTimeout(() => {
    text.textContent = "Java Developer";
  }, 8500);
};

writeText();

setInterval(writeText, 12000);
