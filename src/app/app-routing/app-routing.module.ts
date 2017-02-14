import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendComponent } from '../pagers/recommend/recommend.component';
import { PopularComponent } from '../pagers/popular/popular.component';
import { RepoListComponent } from '../pagers/repo-list/repo-list.component';
import { PadComponent } from '../pagers/pad/pad.component';
import { MediaComponent } from '../components/media/media.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component'

import { TutorialDetailComponent } from '../pagers/tutorial-detail/tutorial-detail.component';
import { TutListComponent } from '../pagers/tut-list/tut-list.component';

const routes:Routes = [
       {
        path: '',
        redirectTo: '/repos',
        pathMatch: 'full'
      },
      {
        path: 'recommend',
        component: RecommendComponent
      },
      
      {
        path: 'pad',
        component: PadComponent
      },
      {
        path: 'repos',
        component: RepoListComponent
      },
      {
        path: 'tuts',
        component: TutListComponent
      },
      {
        path: 'user',
        component: UserDetailComponent
      },
      {
        path: 'tutorial/:id',
        component: TutorialDetailComponent
      }
    ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
