import { Injectable } from '@angular/core';
import {Tut} from '../models/tut'

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const TUTS:Tut[] = [
  {title:"nodejs",summary:"summary of nodejs",description:"the description of nodejs",img:"http://zidea2017.duapp.com/mydata/image/icon_64_nodejs.png"},
  {title:"nodejs",summary:"summary of nodejs",description:"the description of nodejs",img:"http://zidea2017.duapp.com/mydata/image/icon_64_nodejs.png"},
  {title:"nodejs",summary:"summary of nodejs",description:"the description of nodejs",img:"http://zidea2017.duapp.com/mydata/image/icon_64_nodejs.png"},
  {title:"nodejs",summary:"summary of nodejs",description:"the description of nodejs",img:"http://zidea2017.duapp.com/mydata/image/icon_64_nodejs.png"},
  {title:"nodejs",summary:"summary of nodejs",description:"the description of nodejs",img:"http://zidea2017.duapp.com/mydata/image/icon_64_nodejs.png"}
]

//http://zidea2017.duapp.com/mydata/tuts.php

@Injectable()
export class TutService {
   private tutsUrl = 'http://zidea2017.duapp.com/mydata/tuts.php'; 
  constructor(private http: Http) { }


// return this.http.get(this.heroesUrl)
//                .toPromise()
//                .then(response => response.json().data as Hero[])
//                .catch(this.handleError);
  getTuts():Promise<Tut[]> {
    return this.http.get(this.tutsUrl)
                    .toPromise()
                    .then(response => response.json().data as Tut[])
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
