import { Observable } from 'rxjs/Rx'

export default function () {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve('hiya'), 3000);
  });

  return Observable.from(promise);
}
