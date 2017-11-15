import { Observable } from 'rxjs/Rx'

export default function () {
  return Observable.from([0, 1, 2])
    .map(i => i * 100);
}