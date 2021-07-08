// Nav
// const navBar = document.getElementByClassName("nav");

// navBar.addEventListener("load", () =>{
//     let navItem = document.createElement("a");
//     navBar.append(a);
// })


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

const bodyText = document.querySelectorAll("p")[0];

document.addEventListener("keydown", () => {
    bodyText.style.color = "teal";
});

const bodyText2 = document.querySelectorAll("p")[1];

document.addEventListener("keyup", () => {
    bodyText2.style.fontSize = "25px";
});
