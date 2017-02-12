import { Injectable } from '@angular/core';
import {Tut} from '../models/tut'

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
  constructor() { }

  getTuts():Promise<Tut[]> {
    return Promise.resolve(TUTS);
  }

}
