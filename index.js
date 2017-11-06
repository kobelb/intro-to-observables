import fs from 'fs';
import path from 'path';

const number = process.argv[2];

const examplesFolder = './examples';
const exampleFile = fs.readdirSync(examplesFolder).find(file => file.startsWith(number));

const observable = require(path.join(__dirname, examplesFolder, exampleFile)).default();
if (observable) {
  observable.subscribe(
    value => console.log(`next: ${value}`),
    err => console.error(`error: ${err}`),
    () => console.log('COMPLETE!\n')
  );
}
