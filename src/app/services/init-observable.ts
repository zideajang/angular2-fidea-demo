import { Observable } from 'rxjs/Rx';

export function initObservable(){
    var keys$  = Observable.fromEvent(document,'keyup')
                .do((keyUp:KeyboardEvent)=>console.log(keyUp.key))
    keys$.subscribe();
    // var key$ = ObservableInput.fromEvent(document,'keyup')
    //             .do((keyUp:KeyboardEvent)=>console.log(keyUp.key));
    // ObservableInput.fromEvent(document,'keyup')
}