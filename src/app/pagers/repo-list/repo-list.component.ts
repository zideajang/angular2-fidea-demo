import { Component, OnInit } from '@angular/core';

import { Repo } from '../../models/repo';
import { RepoService } from '../../services/repo.service';
import { RepoFilterPipe } from '../../pipes/repo-filter.pipe';

import { initObservable } from '../../services/init-observable'
import { combineObservable } from '../../services/combine-observable'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  
  providers: [RepoService]
})
export class RepoListComponent implements OnInit {
  repos:Repo[]
  constructor(private repoService: RepoService) {

    //Rxjs 第一个部分内容 介绍 Observable , Subcribe 和 Operator
    // initObservable();
    //
    combineObservable()
   }

  getRepos():void{
    this.repoService.getRepos().then(repos => this.repos =repos);
  }
  

  onSelected(repo:Repo){
    console.log("click on item id: " + repo.id);
  }

  ngOnInit() {
    this.getRepos();
  }

}
