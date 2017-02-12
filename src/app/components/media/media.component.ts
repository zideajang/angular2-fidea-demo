import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {
  tutorial:Tutorial;
  
  constructor() { }

  ngOnInit() {
  }

}
