import NumberModel from "./NumberModel";

export interface IObserver {
  update: (model: NumberModel) => void
}