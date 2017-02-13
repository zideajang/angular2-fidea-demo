import { Component, OnInit } from '@angular/core';

import {Tut} from '../../models/tut';
import { TutService } from '../../services/tut.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  providers: [TutService]
})
export class PopularComponent implements OnInit {
  tuts:Tut[];
  searchName:string;
  constructor(private tutService: TutService) { }

  getTuts():void{
    this.tutService.getTuts().then(tuts => this.tuts = tuts);
  }

  ngOnInit() {
    this.getTuts();
  }

}
