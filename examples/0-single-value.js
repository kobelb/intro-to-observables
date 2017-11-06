import { Observable } from 'rxjs/Rx'

export default function () {
  const observable = Observable.of(1);

  observable.subscribe(
    // next
    value => console.log(`next: ${value}`),
    // error
    err => console.error(`error: ${err}`),
    // complete
    () => console.log('COMPLETE!\n')
  );
}