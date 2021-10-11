import NumberModel from './NumberModel';
import { IObserver } from './type';

class ElementObserver implements IObserver {
  element: HTMLElement;

  constructor(elementId: string) {
    this.element = document.querySelector(elementId);
  }

  update(model: NumberModel) {
    this.element.innerHTML = model.number.toString();
    this.element.style.backgroundColor = model.color;
  }
}

export default ElementObserver
