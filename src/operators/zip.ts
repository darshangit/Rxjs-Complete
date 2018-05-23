import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

const sourceOne = of('hello');
const sourceTwo = of('two');
const sourceThree = of('three');
const sourceFour = of('four');

const example = zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(3000)),
  sourceFour.pipe(delay(3000))
);

example.subscribe(val => addItem(val));

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }


