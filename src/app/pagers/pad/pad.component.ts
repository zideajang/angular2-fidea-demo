import { Component, OnInit } from '@angular/core';
import { combineObservable } from '../../services/combine-observable'
@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html'
  
})
export class PadComponent implements OnInit {

  constructor() {
    combineObservable();
   }

  ngOnInit() {
  }

}
