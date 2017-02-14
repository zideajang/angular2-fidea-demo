import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-tut-list',
  templateUrl: './tut-list.component.html'
})
export class TutListComponent implements OnInit {

  constructor(http:Http) {

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Content-Type', 'Access-Control-Allow-Headers');
    
    const response$:Observable<Response> = http.get('http://localhost:8000/tuts')
                .map( (res:Response) => res.json() );
    response$.subscribe(
      res=>console.log(res),
      ()=>{},
      ()=>console.log("completed!")
    );
   }

  ngOnInit() {
  }

}
