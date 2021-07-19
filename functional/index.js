function Baseball() {
  this.started = false;
  this.playerName = '';
  this.myHistory = []

  this.start = function() {
    if (this.playerName) {
      this.started = true;
      this.answer = new setAnswer();
      console.log('게임이 시작되었습니다. 정답을 맞춰보세요 [Baseball.submit(number)]')
    } else {
      console.log('게임을 시작하기 전 유저를 설정해주세요 [Baseball.setUser(playerName)]');
    }
  }
  
  this.setUser = function(playerName) {
    this.playerName = playerName;
    console.log('유저가 설정되었습니다. 게임을 시작해주세요 [Baseball.start()]');
  }

  this.submit = function(number) {
    if (!this.started) {
      return console.log('제출하기 전 게임을 먼저 시작해주세요');
    }

    if (!this.playerName) {
      return console.log('제출하기 전 유저를 먼저 설정해주세요');
    }
    
    if (this.answer.join('') === number) {
      console.log('홈런!!');
    } else {
      this.strike = 0;
      this.ball = 0;
      this.out = 0;

      const numberArr = number.toString().split('');
      for (let i = 0; i < 4; i++) {
        if (Number(numberArr[i]) === this.answer[i]) {
          this.strike++;
        } else if (this.answer.indexOf(Number(numberArr[i])) > -1) {
          this.ball++;
        } else {
          this.out++;
        }
      }
      console.log(`
        strike: ${this.strike}
        ball: ${this.ball}
        out: ${this.out}
      `)
    }

    this.saveHistory(number);
  }

  this.history = function() {
    if (this.myHistory.length) {
      this.myHistory.forEach(history => {
        console.log(`
          name: ${this.playerName}
          strike: ${history.strike}
          ball: ${history.ball}
          out: ${history.out}
        `)
      })
    } else {
      console.log('게임 기록이 없습니다');
    }
  }

  this.saveHistory = function(number) {
    this.myHistory.push({
      playerName: this.playerName,
      number: number,
      strike: this.strike,
      ball: this.ball,
      out: this.out
    })
  }
}

function setAnswer() {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let number = [];
  
  for (let i = 0; i < 4; i++) {
    const selectNumber = numberArr.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    number.push(selectNumber);
  }
  return number;
}