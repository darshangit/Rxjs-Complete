import { AsyncSubject } from "rxjs";

// Only the last value is sent and set only when complete()is called

var subject = new AsyncSubject()

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    () => addItem('Observer 1 completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    )
    subject.complete()
}, 200)

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }