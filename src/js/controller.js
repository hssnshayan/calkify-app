import "core-js/stable";
import "regenerator-runtime/runtime";

import mainView from "./views/mainView.js";

const init = function () {
  mainView.removeAfterClickEffect();
};
init();

const btnLogin = document.querySelector("#btn-signin");
const btnLogout = document.querySelector("#btn-signup");

const sliderElements = document.querySelectorAll('.slider-element')
const sliderImages = document.querySelectorAll('.slider-img')

// sliderImages.forEach((element, i)=>{
//   element.style.width = `${sliderElements.length * 100}%`;
//   sliderElements[i].style.transform = `translateX(+${i * 240 * 2}px)`;
// })

// btnLogin.addEventListener("click", () => {
//   sliderElements.forEach((element, index)=>{
//     console.log(element)
//     element.style.transform = `translateX(-${index * 240}px)`;
//   })
// });

btnLogout.addEventListener("click", () => {
  // img3.scrollIntoView({ behavior: "smooth" });
});
