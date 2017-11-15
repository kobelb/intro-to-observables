import { Observable } from 'rxjs/Rx'

export default function () {
  return Observable.interval(1000).take(10)
    .filter(i => i % 2 === 0);
}