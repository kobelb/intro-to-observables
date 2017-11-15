import { Observable } from 'rxjs/Rx';

export default function () {
  const fast$ = Observable.of('fast');
  const slow$ = Observable.of('slow').delay(1000);
  const optimizerSlow$ = Observable.of('optimizerSlow').delay(5000);

  return Observable.combineLatest(fast$, slow$, optimizerSlow$);
}
