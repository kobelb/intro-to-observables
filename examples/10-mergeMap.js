import { Observable } from 'rxjs/Rx';

const requestSomething = (i) => {
  return i + 100;
};

const render = async (i) => {
  const result = requestSomething(i)
  return `<div>${result}</div>`;
};

export default function () {
  const click$ = Observable.interval(10).take(2);

  return click$.mergeMap(render);
}
