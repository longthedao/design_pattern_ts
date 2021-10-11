import NumberModel from './NumberModel';
import { IObserver } from './type';

type History = {
  number: number
  color: string
}

class HistoryObserver implements IObserver {
  history: HTMLElement;
  previous?: History[];

  constructor(historyId) {
    this.history = document.querySelector(historyId);
    this.previous = [];
  }

  update(model: NumberModel) {
    this.previous.push({number: model.number, color: model.color});

    let previousHistory =
      this.previous.length > 1
        ? this.previous[this.previous.length - 2]
        : undefined;

    this.history.innerText = !!previousHistory
      ? `Previous state of quare: number is ${previousHistory.number} and color is ${previousHistory.color.toUpperCase()}`
      : '';
  }
}

export default HistoryObserver;
