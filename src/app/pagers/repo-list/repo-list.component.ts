import { Component, OnInit } from '@angular/core';

import { Repo } from '../../models/repo';
import { RepoService } from '../../services/repo.service';
import { RepoFilterPipe } from '../../pipes/repo-filter.pipe';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  
  providers: [RepoService]
})
export class RepoListComponent implements OnInit {
  repos:Repo[]
  constructor(private repoService: RepoService) { }

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
