import { isValidInn } from "./validators";
import paySystem from "./changeSystem";
export class InnFormWidget {
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

        if(isValidInn(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        }
       
        if (isValidInn(value)) {
          paySystem(value);
        } 
        else {
          alert("Invalid card number");
        }
  
    }
    
}