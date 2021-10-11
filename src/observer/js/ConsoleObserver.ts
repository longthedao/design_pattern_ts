import NumberModel from './NumberModel';
import { IObserver } from './type';

class ConsoleObserver implements IObserver {
  console: HTMLElement;

  constructor(consoleId) {
    this.console = document.querySelector(consoleId);
  }

  update(model: NumberModel) {
    let log = `This number is ${
      model.number
    } and color is ${model.color.toUpperCase()}`;

    this.console.innerText = log;
  }
}

export default ConsoleObserver
