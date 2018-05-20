import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

var observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys');
    observer.next('How are you');
    setInterval(() => {
      observer.next('I am good');
    }, 2000);
    // observer.complete();
    // observer.next('This iwll not send');
  } catch (err) {
    observer.error(err);
  }
}).pipe(share());

var observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
);

// var observer2 = observable.subscribe(
//     (x: any) => addItem(x),
//   );

// observer.add(observer2)

setTimeout(() => {
  // observer.unsubscribe();

  var observer2 = observable.subscribe((x: any) =>
    addItem('Subscriber 2 ' + x)
  );
}, 1000);

function addItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
