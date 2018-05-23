import { from } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

const people = [
    { name: 'Sue', age: 25},
    { name: 'Joe', age: 30},
    { name: 'Frank', age: 25},
    { name: 'Sarah', age: 35}
];

const source = from(people);

const example = source.pipe(
    groupBy(person => person.age),
    mergeMap(group => group.pipe(toArray()))
);

example.subscribe(val => {addItem(val)
console.log(val);
});

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }
