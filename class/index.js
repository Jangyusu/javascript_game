import { User } from './user'
import { Ball } from './ball';
import { History } from './history';

export class Baseball {
  constructor() {
    this.user = {};
    this.started = false;
  }

  start() {
    if (User.name) {
      this.started = true;
      Ball.setAnswer(5);
      console.log('게임이 시작되었습니다. 정답을 맞춰보세요 [Baseball.submit(number)]')
    } else {
      console.log('게임을 시작하기 전 유저를 설정해주세요 [Baseball.setUser(playerName)]');
    }
  }

  setUser(name, age) {
    this.user = new User(name, age);
  }

  submit(num) {
    if (!this.started) {
      return console.log('제출하기 전 게임을 먼저 시작해주세요');
    }

    if (Object.keys(this.user).length === 0 && this.user.constructor === Object) {
      return console.log('제출하기 전 유저를 먼저 설정해주세요');
    }
    
    if (Ball.answer.join('') === num) {
      console.log('홈런!!');
    } else {
      Ball.strike = 0;
      Ball.ball = 0;
      Ball.out = 0;

      const numberArr = num.toString().split('');
      for (let i = 0; i < 4; i++) {
        if (Number(numberArr[i]) === Ball.answer[i]) {
          Ball.strike++;
        } else if (Ball.answer.indexOf(Number(numberArr[i])) > -1) {
          Ball.ball++;
        } else {
          Ball.out++;
        }
      }
      console.log(`
        strike: ${Ball.strike}
        ball: ${Ball.ball}
        out: ${Ball.out}
      `)
    }

    History.saveHistory(num);
  }

  showHistory() {
    if (History.history.length) {
      History.history.forEach(history => {
        console.log(`
          name: ${this.user.name}
          strike: ${history.strike}
          ball: ${history.ball}
          out: ${history.out}
        `)
      })
    } else {
      console.log('게임 기록이 없습니다');
    }
  }
}

window.baseball = new Baseball