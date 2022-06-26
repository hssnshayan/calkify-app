class mainView {
  _allButtons = document.querySelectorAll("button");

  removeAfterClickEffect() {
    this._allButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
      });
    });
  }
}

export default new mainView();
