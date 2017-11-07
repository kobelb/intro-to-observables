import { Observable } from 'rxjs/Rx';

const requestIncrement = async (i) => {
  return new Promise(resolve => setTimeout(() => resolve(++i), 3000));
};

export default function () {
  return Observable.of(0)
    .mergeMap(i => requestIncrement(i));
}