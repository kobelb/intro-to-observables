import { Observable } from 'rxjs/Rx';
import { delay } from 'bluebird';

const instrument = (fn) => {
  let running = 0;
  return async (...args) => {
    console.log(++running + ' running');
    const result = await fn.apply(this, args);
    --running;
    return result;
  };
};

const requestSomething = instrument(async (i) => {
  await delay(20);
  return i + 100;
});

const render = async (i) => {
  const result = await requestSomething(i)
  return `<div>${result}</div>`;
};

export default function () {
  const click$ = Observable.interval(1).take(10);

  return click$.mergeMap(render, null, 2);
}
