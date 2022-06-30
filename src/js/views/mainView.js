class mainView {
  _allButtons = document.querySelectorAll("button");
  _sliderBtns = document.querySelector("#slider-btns");
  _sliderElements = document.querySelectorAll(".slider-element");
  _numOfSlides = this._sliderElements.length;
  _mainContainer = document.querySelector(".custom-container");
  _signinPopup = document.querySelector(".signin-popup");
  _signupPopup = document.querySelector(".signup-popup");
  _signinBtn = document.querySelector("#btn-signin");
  _signupBtn = document.querySelector("#btn-signup");
  _signinBtnSubmit = document.querySelector("#btn-signin-submit");
  _signupBtnSubmit = document.querySelector("#btn-signup-submit");
  _formBtnCancel = document.querySelectorAll(".btn-form-cancel");
  _mainSlider = document.querySelector(".main-slider");
  _mainCalculator = document.querySelector(".main-calculator");
  _signinMessage = document.querySelector("#signin-message");
  _signupMessage = document.querySelector("#signup-message");
  _userSignin = document.querySelector("#user-signin");
  _userSignup = document.querySelector("#user-signup");
  _pass1Signup = document.querySelector("#password1-signup");
  _pass2Signup = document.querySelector("#password2-signup");
  _passSignin = document.querySelector("#password-signin");
  _loggedOut = document.querySelector(".logged-out");
  _headerBtns = document.querySelector(".header-btns");
  _headerWelcome = document.querySelector(".header-welcome");
  _userLoggedin = document.querySelector(".username-loggedin");

  removeBtnClicDefaultHandler() {
    this._allButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
      });
    });
  }

  accountHandler() {
    this._signinBtn.addEventListener("click", () => {
      this._mainContainer.classList.add("dimmer-page");
      this._signinPopup.classList.remove("d-none");
    });
    this._signupBtn.addEventListener("click", () => {
      this._mainContainer.classList.add("dimmer-page");
      this._signupPopup.classList.remove("d-none");
    });
    this._formBtnCancel.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._mainContainer.classList.remove("dimmer-page");
        this._signinPopup.classList.add("d-none");
        this._signupPopup.classList.add("d-none");
        this._signinMessage.classList.add("d-none");
        this._signinMessage.classList.remove("d-block");
        this._signupMessage.classList.add("d-none");
        this._signupMessage.classList.remove("d-block");
        this._userSignin.value = "";
        this._passSignin.value = "";
        this._pass1Signup.value = "";
        this._pass2Signup.value = "";
        this._userSignup.value = "";
      });
    });
    this._loggedOut.addEventListener("click", () => {
      this._mainSlider.classList.remove("d-none");
      this._mainCalculator.classList.add("d-none");
      this._headerBtns.classList.remove("d-none");
      this._headerWelcome.classList.add("d-none");
    });
  }

  signinSubmitHandler(handler) {
    this._signinBtnSubmit.addEventListener("click", () => {
      const accounts = handler();
      accounts.forEach((account) => {
        if (
          account.username === this._userSignin.value &&
          account.password === this._passSignin.value
        ) {
          this._mainContainer.classList.remove("dimmer-page");
          this._signinPopup.classList.add("d-none");

          this._mainSlider.classList.add("d-none");
          this._mainCalculator.classList.remove("d-none");
          this._signinMessage.classList.add("d-none");
          this._signinMessage.classList.remove("d-block");
          this._userSignin.value = "";
          this._passSignin.value = "";
          this._headerBtns.classList.add("d-none");
          this._headerWelcome.classList.remove("d-none");
          this._userLoggedin.textContent = account.username.toUpperCase();
          return;
        } else {
          this._signinMessage.classList.add("d-block");
          this._signinMessage.classList.remove("d-none");
          return;
        }
      });
    });
  }

  signupSubmitHandler(handler) {
    this._signupBtnSubmit.addEventListener("click", () => {
      if (
        this._userSignup.value &&
        this._userSignup.value.length >= 5 &&
        this._pass1Signup.value &&
        this._pass1Signup.value === this._pass2Signup.value
      ) {
        this._mainContainer.classList.remove("dimmer-page");
        this._signupPopup.classList.add("d-none");
        handler({
          username: this._userSignup.value.toLowerCase(),
          password: this._pass1Signup.value,
        });
        this._pass1Signup.value = "";
        this._pass2Signup.value = "";
        this._userSignup.value = "";
      } else {
        this._signupMessage.classList.add("d-block");
        this._signupMessage.classList.remove("d-none");
      }
    });
  }

  addBtnSliserHandler(handlerNext, handlerPrev) {
    this._sliderBtns.addEventListener("click", (e) => {
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
