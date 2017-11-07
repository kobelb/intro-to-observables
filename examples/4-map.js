import { Observable } from 'rxjs/Rx'

export default function () {
  return Observable.of(0)
    .map(i => ++i);
}