import "core-js/stable";
import "regenerator-runtime/runtime";

import mainView from "./views/mainView.js";

const init = function () {
  mainView.removeAfterClickEffect();
};
init();

const sliderBtns = document.querySelector("#slider-btns");
const sliderElements = document.querySelectorAll(".slider-element");

const sliderChange = function (counter, sliders, offset) {
  const numOfSliders = sliders.length;

  if (counter >= numOfSliders && offset < 0) counter = 0;
  if (counter === 0 && offset > 0) counter = numOfSliders - 1;

  sliders.forEach((element) => {
    element.style.transform = `translateX(${counter * offset}px)`;
  });
};

sliderBtns.addEventListener("click", (e) => {
  let offset;
  if (e.target.classList.contains("btn-prev")) offset = +720;
  else if (e.target.classList.contains("btn-next")) offset = -720;
  else return;
  sliderChange(0, sliderElements, offset)
});
