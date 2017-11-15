import { Observable } from 'rxjs/Rx';

const requestSomething = async (i) => {
  return i * 100;
};

export default function () {
  return Observable.interval(1000).take(10)
    .mergeMap(i => requestSomething(i));
}