import { Observable } from 'rxjs/Rx';
import { delay } from 'bluebird';

const requestSomething = async () => {
  console.log('requesting something');
  await delay(50);
  console.log('requested something');
};

const requestSomethingElse = async () => {
  console.log('requesting something else');
  await delay(50);
  console.log('requested something else');
};

export default function () {
  const process$ = Observable
    .of(1)
    .mergeMap(requestSomething)
    .mergeMap(requestSomethingElse);

  const stop$ = Observable.interval(120);

  return process$.takeUntil(stop$);
}


