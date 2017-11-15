import { Observable } from 'rxjs/Rx';

export default function () {
  const interval$ = Observable.interval(10).take(5);

  return interval$.scan((acc, i) => acc + i, 0);
}
