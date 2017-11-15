import { Observable } from 'rxjs/Rx'

export default function () {
  return Observable.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .filter(i => i % 2 === 0);
}