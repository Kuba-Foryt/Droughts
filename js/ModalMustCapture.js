import { UI } from "./UI.js";

export class ModalMustCapture extends UI {
  #captureModal = null;
  #captureModalText = null;
  #captureModalLanguageBtn = null;
  #captureModalBtn = null;
  languageBtn = null;

  handleElements() {
    this.#captureModal = this.getElement(this.UISelectors.captureModal);
    this.#captureModalText = this.getElement(this.UISelectors.captureModalText);
    this.#captureModalLanguageBtn = this.getElement(
      this.UISelectors.captureModalLanguageBtn
    );
    this.#captureModalBtn = this.getElement(this.UISelectors.captureModalBtn);
    this.languageBtn = this.getElement(this.UISelectors.languageBtn);
  }

  addEventListeners() {
    this.#captureModalBtn.addEventListener(
      "click",
      this.hideCapturePopup.bind(this)
    );
  }

  hideCapturePopup(e) {
    e.preventDefault();
    this.#captureModal.classList.add("mustCapture__modal--hidden");
    this.languageBtn.classList.remove("languageButton--hidden");
  }

  revealCaptureModalPopup() {
    this.#captureModal.classList.remove("mustCapture__modal--hidden");
  }

  modalTextInEnglish() {
    this.#captureModalText.innerText =
      "Capture is obligatory! Pieces with possible capture move are marked with blue color";
    this.#captureModalBtn.innerText = "GOT IT!";
  }

  modalTextInPolish() {
    this.#captureModalText.innerText =
      "Bicie jest obowiązkowe! Piony, które mogą wykonać bicie zaznaczono na niebiesko";
    this.#captureModalBtn.innerText = "OK!";
  }

  init() {
    this.handleElements();
  }
}