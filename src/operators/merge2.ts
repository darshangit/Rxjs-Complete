import { interval, merge } from "rxjs";
import { mapTo } from "rxjs/operators";

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = merge(first.pipe(mapTo('FIRST')),
second.pipe(mapTo('SECOND')),
third.pipe(mapTo('THIRD')),
fourth.pipe(mapTo('Fourth')));

example.subscribe(val => addItem(val));

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }