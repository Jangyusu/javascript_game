import { BaseballGame } from './BaseballGame.js'

(() => {
  const app = document.querySelector('.app');
  const baseballGame = BaseballGame;
  const baseballLayer = baseballGame.getBaseballLayer();
  app.prepend(baseballLayer);

  const historyBtn = document.querySelector('.historyBtn');
  historyBtn.addEventListener('click', () => {
    const history = baseballGame.getBaseballHistory();
    if (!history) {
      return alert('기록이 없습니다.');
    }

    const historyList = document.querySelector('.historyList');
    while(historyList.hasChildNodes()) {
      historyList.removeChild(historyList.firstChild);
    }

    for (let i = 0; i < history.length; i++) {
      let data = `
        <pre>
          DATE: ${history[i].date}
          STRIKE : ${history[i].strike}
          BALL : ${history[i].ball}
          OUT : ${history[i].out}
        </pre>
      `
      historyList.insertAdjacentHTML('beforeend', data)
    }
  });

  const answerBtn = document.querySelector('.answerBtn');
  answerBtn.addEventListener('click', () => {
    alert(baseballGame.getBaseballAnswer());
  });
})();