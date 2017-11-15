import { Observable } from 'rxjs/Rx';

export default function () {
  const interval$ = Observable.interval(1);

  const stop$ = Observable.interval(100);

  return interval$.takeUntil(stop$);
}
