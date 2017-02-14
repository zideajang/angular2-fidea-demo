import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecommendComponent } from './pagers/recommend/recommend.component';
import { PopularComponent } from './pagers/popular/popular.component';
import { MediaComponent } from './components/media/media.component';
import { TutorialDetailComponent } from './pagers/tutorial-detail/tutorial-detail.component';

import {TutService} from './services/tut.service';
import { RepoListComponent } from './pagers/repo-list/repo-list.component';
import { RepoComponent } from './pagers/repo-list/repo.component';
import { RepoFilterPipe } from './pipes/repo-filter.pipe';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PadComponent } from './pagers/pad/pad.component';
import { SpriteDirective } from './directives/sprite.directive';
import { TutListComponent } from './pagers/tut-list/tut-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecommendComponent,
    PopularComponent,
    MediaComponent,
    TutorialDetailComponent,
    RepoListComponent,
    RepoComponent,
    RepoFilterPipe,
    UserDetailComponent,
    PadComponent,
    SpriteDirective,
    TutListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
