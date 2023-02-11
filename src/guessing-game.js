function setRange(min, max, xxx) {
  let myNumber = Math.round(min + (max - min) / 2);

  if (xxx < min || xxx > max) {
    return `Иди ты в ..., сам одгадывай :) Нету этого числа в предложенном диапазоне`;
  }
  if (myNumber === xxx) {
    return `Возьми с полки пирожок :) чемпион, число = ${xxx}`;
  } else if (myNumber > xxx) {
    return setRange(min, myNumber, xxx);
  } else {
    return setRange(myNumber, max, xxx);
  }
}

console.log(setRange(0, 4048, 409));
console.log(setRange(-354, 73, -36));
console.log(setRange(10, 124, 1));

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
