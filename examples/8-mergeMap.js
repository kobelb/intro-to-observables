import { Observable } from 'rxjs/Rx';

const requestSomething = async (i) => {
  return i + 100;
};

export default function () {
  return Observable.of(0)
    .mergeMap(i => requestSomething(i));
}