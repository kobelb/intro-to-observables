import { Observable } from 'rxjs/Rx';
import { delay } from 'bluebird';

const requestSomething = async (i) => {
  await delay(20);
  return i + 100;
};

const render = async (i) => {
  const result = await requestSomething(i)
  return `<div>${result}</div>`;
};

export default function () {
  const click$ = Observable.interval(1).take(2);

  return click$.switchMap(render);
}
