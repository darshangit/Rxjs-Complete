import { Observable } from "rxjs";
import { merge } from "rxjs/operators";

var observable = Observable.create((observer: any) => {
    observer.next('Hey guys !!')
}).pipe(merge())

var observable2 = Observable.create((observer: any) => {
    observer.next('How is it going !!')
})

var observable3 = Observable.create((observer: any) => {
    observer.next('Awesome !!')
})

observable.pipe(merge(observable2,observable3 )).subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }