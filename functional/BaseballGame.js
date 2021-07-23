export const BaseballGame = {
  data: {
    title: 'BaseballGame',
    version: '1.0.0',
    author: 'ys'
  },

  init() {
    console.log(`
      title = ${this.data.title}
      version = ${this.data.version}
      author = ${this.data.author}
    `);

    this.setAnswer();
    this.setBaseballLayer();
  },

  setAnswer() {
    const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = [];
    
    for (let i = 0; i < 4; i++) {
      const selectNumber = numberArr.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      number.push(selectNumber);
    }
    number = number.join('');
    this.data.answer = number;
  },

  setBaseballLayer() {
    let baseballInput = document.createElement("input");
    baseballInput.type = 'number';

    let baseballForm = document.createElement("form");
    this.data.baseballForm = baseballForm;
    this.setBaseballInputEvent();
    baseballForm.appendChild(baseballInput);

    let baseballLayer = document.createElement('div');
    baseballLayer.className = 'baseballLayer';
    this.data.baseballLayer = baseballLayer;
    baseballLayer.appendChild(baseballForm);

    return this.data.baseballLayer;
  },

  setBaseballInputEvent() {
    this.getBaseballForm().addEventListener('submit', e => {
      e.preventDefault();

      this.data.strike = 0;
      this.data.ball = 0;
      this.data.out = 0;


      const number = e.target.firstChild.value;
      const numberArr = number.toString().split('');
      for (let i = 0; i < 4; i++) {
        if (Number(numberArr[i]) === Number(this.data.answer[i])) {
          this.data.strike++;
        } else if (this.data.answer.indexOf(Number(numberArr[i])) > -1) {
          this.data.ball++;
        } else {
          this.data.out++;
        }
      }

      if (this.data.answer === number) {
        alert('홈런!!');
      } else {
        console.log(`
          strike: ${this.data.strike}
          ball: ${this.data.ball}
          out: ${this.data.out}
        `);
      }
      this.setBaseballHistory(this.data.strike, this.data.ball, this.data.out);
    });
  },

  setBaseballHistory(strike, ball, out) {
    if (!this.data.history) {
      this.data.history = [];
    }
    this.data.history.push({
      date: new Date(),
      strike,
      ball,
      out
    })
  },

  getBaseballLayer() {
    return this.data.baseballLayer;
  },

  getBaseballForm() {
    return this.data.baseballForm;
  },

  getBaseballHistory() {
    return this.data.history;
  },

  getBaseballAnswer() {
    return this.data.answer;
  }
}
BaseballGame.init();