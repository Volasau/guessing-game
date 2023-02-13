const number = 1409;

function setRange(min, max) {
  let myNumber = Math.round(min + (max - min) / 2);

  if (number < min || number > max) {
    return `Иди ты в ..., сам одгадывай :) Нету этого числа в предложенном диапазоне`;
  }
  if (myNumber === number) {
    return `Возьми с полки пирожок :) чемпион, число = ${myNumber}`;
  } else if (myNumber > number) {
    return setRange(min, myNumber);
  } else {
    return setRange(myNumber, max);
  }
}

console.log(setRange(0, 4048));
console.log(setRange(-35, 1360));

class GuessingGame {
  constructor() {}

  setRange(min, max) {
    GuessingGame.last = max;
    GuessingGame.first = min;
    GuessingGame.myNumber = Math.round((min + (max - min)) / 2);
  }

  guess() {
    GuessingGame.myNumber;
    // console.log(GuessingGame.myNumber);
    return GuessingGame.myNumber;
  }

  lower() {
    GuessingGame.last = GuessingGame.myNumber;
    GuessingGame.myNumber = Math.round(
      GuessingGame.first + (GuessingGame.myNumber - GuessingGame.first) / 2
    );
  }

  greater() {
    GuessingGame.first = GuessingGame.myNumber;
    GuessingGame.myNumber = Math.round(
      GuessingGame.myNumber + (GuessingGame.last - GuessingGame.myNumber) / 2
    );
  }
}

module.exports = GuessingGame;
