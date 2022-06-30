import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import mainView from "./views/mainView.js";
import { SLIDER_DELAY } from "./config.js";

const sliderChange = function (sliders, count) {
  sliders.forEach((element, index) => {
    element.style.transform = `translateX(-${100 * count}%)`;
  });
};

const nextSlide = function (slides, numOfSlides) {
  if (model.state.sliderCounter === numOfSlides - 1)
    model.state.sliderCounter = 0;
  else model.state.sliderCounter++;
  sliderChange(slides, model.state.sliderCounter);
};

const prevSlide = function (slides, numOfSlides) {
  if (model.state.sliderCounter === 0)
    model.state.sliderCounter = numOfSlides - 1;
  else model.state.sliderCounter--;
  sliderChange(slides, model.state.sliderCounter);
};

const autoSlider = function (slides, numOfSlides) {
  setInterval(() => {
    nextSlide(slides, numOfSlides);
  }, SLIDER_DELAY * 1000);
};

const getAccounts = function () {
  return model.state.accounts;
};

const updateAccounts = function (account) {
  model.state.accounts.push(account);
};

const init = function () {
  mainView.removeBtnClicDefaultHandler();
  mainView.addBtnSliserHandler(nextSlide, prevSlide);
  mainView.addKeySliserHandler(nextSlide, prevSlide);
  mainView.autoSliderHandler(autoSlider);
  mainView.accountHandler();
  mainView.signinSubmitHandler(getAccounts);
  mainView.signupSubmitHandler(updateAccounts);
};

init();
