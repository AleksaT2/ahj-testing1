/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/validators.js
function isValidInn(value) {
  const cardNumber = value.match(/\d/g).join("");
  let sum = 0;
  let s = 0;
  if (cardNumber.length % 2 === 0) {
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 === 0) {
        if (cardNumber[i] * 2 > 9) {
          sum += cardNumber[i] * 2 - 9;
        } else {
          sum += cardNumber[i] * 2;
        }
      } else {
        sum += +cardNumber[i];
      }
    }
  } else {
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        if (cardNumber[i] * 2 > 9) {
          sum += cardNumber[i] * 2 - 9;
        } else {
          sum += cardNumber[i] * 2;
        }
      } else {
        sum += +cardNumber[i];
      }
    }
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/changeSystem.js
function paySystem(number) {
  document.querySelectorAll(".card-item").forEach(el => {
    el.classList.remove("active");
  });
  const firstNum = number.slice(0, 1);
  switch (firstNum) {
    case "2":
      document.querySelector(".cardMir").classList.add("active");
      break;
    case "3":
      document.querySelector(".cardAmericanExpress").classList.add("active");
      break;
    case "4":
      document.querySelector(".cardVisa").classList.add("active");
      break;
    default:
      break;
  }
  const twoNum = number.slice(0, 2);
  switch (+twoNum) {
    case 50:
    case 56:
    case 57:
    case 58:
    case 67:
    case 63:
      document.querySelector(".cardMaestro").classList.add("active");
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      document.querySelector(".cardMastercard").classList.add("active");
      break;
    case 62:
      document.querySelector(".cardUnionPay").classList.add("active");
      break;
    default:
      break;
  }
}
;// CONCATENATED MODULE: ./src/js/widget.js


class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }
  static get markup() {
    return `
        <h3>Check your credit card number</h3>
      <ul class="cardList">
        <li class="card-item cardVisa">
          <span class="hidden">Visa</span>
        </li>
        <li class="card-item cardMastercard">
          <span class="hidden">mastercard</span>
        </li>
        <li class="card-item cardMaestro">
          <span class="hidden">mastercard</span>
        </li>
        <li class="card-item cardMir">
          <span class="hidden">mir</span>
        </li>
        <li class="card-item cardAmericanExpress">
          <span class="hidden">express</span>
        </li>
        <li class="card-item cardUnionPay">
          <span class="hidden">unionpay</span>
        </li>
      </ul>
      <form class="card-form-widget">
        <div class="form-control">
          <input
            id="numberCard-input"
            type="text"
            class="input"
          />
        </div>
        <button class="submit" id="card-submit">Click to Validate</button>
      </form>
        `;
  }
  static get submitSelector() {
    return '.submit';
  }
  static get inputSelector() {
    return '.input';
  }
  static get selector() {
    return '.card-form-widget';
  }
  bindToDOM() {
    this.parentEl.innerHTML = InnFormWidget.markup;
    this.element = this.parentEl.querySelector(InnFormWidget.selector);
    this.submit = this.element.querySelector(InnFormWidget.submitSelector);
    this.input = this.element.querySelector(InnFormWidget.inputSelector);
    this.element.addEventListener('submit', this.onSubmit);
  }
  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    if (isValidInn(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
    if (isValidInn(value)) {
      paySystem(value);
    } else {
      alert("Invalid card number");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector('.container');
const app_form = new InnFormWidget(container);
app_form.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map