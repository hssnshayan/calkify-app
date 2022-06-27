class mainView {
  _allButtons = document.querySelectorAll("button");
  _sliderBtns = document.querySelector("#slider-btns");
  _sliderElements = document.querySelectorAll(".slider-element");
  _numOfSlides = this._sliderElements.length;

  removeAfterClickEffect() {
    this._allButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
      });
    });
  }

  addBtnSliserHandler(handlerNext, handlerPrev) {
    this._sliderBtns.addEventListener("click", (e) => {
      console.log(this._counter);
      if (e.target.classList.contains("btn-next"))
        handlerNext(this._sliderElements, this._numOfSlides);
      if (e.target.classList.contains("btn-prev"))
        handlerPrev(this._sliderElements, this._numOfSlides);
    });
  }

  addKeySliserHandler(handlerNext, handlerPrev) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight")
        handlerNext(this._sliderElements, this._numOfSlides);
      if (e.key === "ArrowLeft")
        handlerPrev(this._sliderElements, this._numOfSlides);
    });
  }
  
  autoSliderHandler(handler) {
    handler(this._sliderElements, this._numOfSlides);
  }
}

export default new mainView();
