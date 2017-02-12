import { Component, OnInit } from '@angular/core';
import {Tutorial} from '../../models/tutorial';
const TUTORIALS: Tutorial[] = [
  { id: 1,title: "angular2-第一课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 2,title: "angular2-第二课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 3,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 4,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 5,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 6,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 7,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 8,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 9,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 10,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 11,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 12,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 13,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 14,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" },
  { id: 15,title: "angular2-第三课", summary: 'angular2', imagePath: "http://zidea2017.duapp.com/mydata/image/icon_64_angular2.png" }
  
  
];
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html'
  
})
export class RecommendComponent implements OnInit {
  tutorials:Tutorial[] = TUTORIALS;
  selectedTutorial: Tutorial;
  constructor() { }

  ngOnInit() {
  }

  onSelect(tutorial: Tutorial): void {
    this.selectedTutorial = tutorial;
  }

}
