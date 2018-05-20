import { Observable, Subject, interval } from "rxjs";
import { skipUntil } from "rxjs/operators";

var observable1 = Observable.create((data: any) => {
    var i =1;
    setInterval(() => {
        data.next(i++)
    }, 1000);
})

var observable2 = new Subject();

//doesnt start until 5 sex are met and the second is the emmited
setTimeout(() => {
    observable2.next('Heyyyyy!!')
}, 5000)

var newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }