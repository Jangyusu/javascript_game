export class Ball {
  constructor() {
    this.answer = null;
    this.strike = 0;
    this.ball = 0;
    this.out = 0;
  }

  setAnswer(maxNum) {
    if (maxNum.length > 10) {
      return console.log('정답을 10개 이상 지정할 수 없습니다')
    }

    const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = [];
    
    for (let i = 0; i < maxNum; i++) {
      const selectNumber = numberArr.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      number.push(selectNumber);
    }
    this.answer = number;
  }
}