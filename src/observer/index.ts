import ConsoleObserver from './js/ConsoleObserver';
import ElementObserver from './js/ElementObserver';
import HistoryObserver from './js/HistoryObserver';
import NumberModel from './js/NumberModel';

const model = new NumberModel();
const selfObserver = new ElementObserver('#elementObserver');
const consoleObserver = new ConsoleObserver('.console');
const historyObserver = new HistoryObserver('.history');

model.addObserver(selfObserver);
model.addObserver(consoleObserver);
model.addObserver(historyObserver);

const button = document.querySelector('.btn');

console.log(model);

button.addEventListener('click', (event) => {
  model.increment();
  console.log(model);
});

export const Observer = () => {
  console.log('Observer mounted');
};
