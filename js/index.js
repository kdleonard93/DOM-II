// Button variables
const btn1 = document.querySelectorAll(".btn")[0];
const btn2 = document.querySelectorAll(".btn")[1];
const btn3 = document.querySelectorAll(".btn")[2];


btn1.addEventListener("click", () => {
btn1.style.color ="red";
});

btn2.addEventListener("mouseover", () => {
btn2.style.backgroundColor = "goldenrod";
});

btn3.addEventListener("dblclick", () => {
btn3.style.borderRadius = "40px";
});


// text variables

const bodyText = document.querySelector("p");

document.addEventListener("keydown", () => {
    bodyText.style.color = "teal";
});

