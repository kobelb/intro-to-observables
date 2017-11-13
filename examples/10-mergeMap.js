import { Observable } from 'rxjs/Rx';

const requestSomething = async (i) => {
  return i + 100;
};

const render = async (i) => {
  const result = await requestSomething(i)
  return `<div>${result}</div>`;
};

export default function () {
  const click$ = Observable.interval(1).take(2);

  return click$.mergeMap(render);
}
