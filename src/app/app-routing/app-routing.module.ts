import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendComponent } from '../pagers/recommend/recommend.component';
import { PopularComponent } from '../pagers/popular/popular.component';
import { RepoListComponent } from '../pagers/repo-list/repo-list.component';
import { MediaComponent } from '../components/media/media.component';

import { TutorialDetailComponent } from '../pagers/tutorial-detail/tutorial-detail.component';

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
      // {
      //   path: 'popular',
      //   component: PopularComponent
      // },
      {
        path: 'repos',
        component: RepoListComponent
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
