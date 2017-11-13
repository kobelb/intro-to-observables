import { Observable } from 'rxjs/Rx';
import { delay } from 'bluebird';

const requestSomething = (i) => {
  await delay(20);
  return i + 100;
};

const render = async (i) => {
  const result = requestSomething(i)
  return `<div>${result}</div>`;
};

export default function () {
  const click$ = Observable.interval(1).take(2);

  return click$.switchMap(render);
}
