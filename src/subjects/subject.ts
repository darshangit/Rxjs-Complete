import { Subject } from "rxjs";

var subject = new Subject()

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

subject.next('The first thing is sent');

var observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next('The second thing has been sent')
subject.next('The Third thing has been sent')

observer2.unsubscribe();

subject.next('Final thing has been sent')


function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }