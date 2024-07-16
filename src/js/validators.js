export function isValidInn(value) {
    const cardNumber = value.match(/\d/g).join("");
    let sum = 0;
    let s = 0;
    if (cardNumber.length % 2 === 0) {
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 === 0) {
        if (cardNumber[i] * 2 > 9) {
            sum += cardNumber[i] * 2 - 9;
        } 
        else {
            sum += cardNumber[i] * 2;
        }
      } 
      else {
        sum += +cardNumber[i];
      }
    }
  } 
  else {
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        if (cardNumber[i] * 2 > 9) {
            sum += cardNumber[i] * 2 - 9;
        } 
        else {
            sum += cardNumber[i] * 2;
        }
      } 
      else {
        sum += +cardNumber[i];
      }
    }
  }
  return sum % 10 === 0;
}