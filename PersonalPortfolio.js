let Circular_Progress = document.querySelector(".Circular_Progress");
let cr_p_value = document.querySelector(".cr_p_value");
let nar_menu = document.querySelector(".nav");
let iconmenu = document.querySelector(".fa-bars");
let starvalue = 0;
let endvalue = 50;
var string = "this is a string";
let autoincreace = setInterval(() => {
  if (starvalue < endvalue) {
    starvalue++;
    console.log(starvalue);
    Circular_Progress.style.background = `conic-gradient(blue ${
      starvalue * 3.6
    }deg, #fff 0deg)`;
    cr_p_value.innerText = `${starvalue}%`;
  }
}, 70);

// butbon menu

let button_menu = document.querySelector(".fa-solid");
button_menu.addEventListener("click", () => {
  nar_menu.classList.toggle("active");
  iconmenu.classList.toggle("fa-xmark");
});

// night theme

// let night_theme_button = document.querySelector(".fa-moon");
// let contrainer = document.querySelector(".container");
// night_theme_button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#212A3E";
//   contrainer.style.backgroundColor = "#212A3E";
// });
