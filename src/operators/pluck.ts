import { from } from "rxjs";
import { pluck } from "rxjs/operators";

from([
    {first: 'gary', last: 'simon', age:'34'},
    {first: 'Dash', last: 'simon', age:'34'},
    {first: 'Samash', last: 'simon', age:'34'},
]).pipe(pluck('first')).subscribe((x: any) => addItem(x))


function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
  }