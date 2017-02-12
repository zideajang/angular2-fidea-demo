import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecommendComponent } from './pagers/recommend/recommend.component';
import { PopularComponent } from './pagers/popular/popular.component';
import { MediaComponent } from './components/media/media.component';
import { TutorialDetailComponent } from './pagers/tutorial-detail/tutorial-detail.component';

import {TutService} from './services/tut.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecommendComponent,
    PopularComponent,
    MediaComponent,
    TutorialDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot([
       {
        path: '',
        redirectTo: '/recommend',
        pathMatch: 'full'
      },
      {
        path: 'recommend',
        component: RecommendComponent
      },
      {
        path: 'popular',
        component: PopularComponent
      },
      {
        path: 'tutorial/:id',
        component: TutorialDetailComponent
      }
    ])
  ],
  providers: [TutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
