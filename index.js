import example from './examples/1-single-value';

example().subscribe(
  next => console.log(next),
  err => console.error(err),
  () => console.log('DONE')
);