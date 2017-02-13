import { Observable } from 'rxjs/Rx';
declare function fetch(url:string);

export function combineObservable(){

    const click$ = Observable.fromEvent(document,'click');

    click$.subscribe(
        (event:MouseEvent)=>{
            // const cirleDiv = document.createElement('span');
            
            // console.log((event.clientY).toFixed(1))
            // cirleDiv.style.position = 'absolute';
            // cirleDiv.style.width = '2rem';
            // cirleDiv.style.height = '2rem';
            // cirleDiv.style.background = 'orangered';
            // // cirleDiv.style.margin = (event.clientY).toFixed(1);
            // // cirleDiv.style.marginLeft = (event.clientX).toFixed(1);
            // document.body.appendChild(cirleDiv);
        }
    )

    const mouse$ = Observable.fromEvent(document, 'mousemove')
            .filter((move:MouseEvent)=>move.clientY > 400);

    mouse$.subscribe(
        // (move:MouseEvent) => console.log(move)
    )

    const combined$ = Observable.combineLatest(mouse$, click$)
    combined$.subscribe(combined=>console.log("combined:",combined[0])); 

    const touch$ = Observable.fromEvent(document,'touch');
    touch$.subscribe(
        (touch:TouchEvent)=>{
            // console.log(touch.touches[0].clientX)
            // console.log(touch.touches[0].clientY)
            // const cirleDiv = document.createElement('div');
            // cirleDiv.className = "circle";
            // cirleDiv.style.top = (touch.touches[0].clientY).toFixed(1);
            // cirleDiv.style.left = (touch.touches[0].clientX).toFixed(1);
            // document.body.appendChild(cirleDiv);
        }
    )
/**
 * // mouse clicks 
 * 
 * |------------------------------- x ------------- x -------------
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

}