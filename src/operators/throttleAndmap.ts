import { Observable, interval } from "rxjs";
import { merge, map, throttleTime } from "rxjs/operators";

var observable = interval(1000);

var observer = {
    next: function(value: any) {
        console.log(value);
    }
};

observable
.pipe(map(function(value){
    return 'hello: ' + value;
}), throttleTime(2000))
.subscribe(observer);

