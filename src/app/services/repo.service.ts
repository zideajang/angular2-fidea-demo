import { Injectable } from '@angular/core';
import { Repo } from '../models/repo';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//https://api.github.com/users/zideajang/repos
@Injectable()
export class RepoService {
  //设定要查找用户名称{user}
  private githubApiUrl:string = "https://api.github.com/users/zideajang/repos";
  constructor(private http:Http) { }

  getRepos():Promise<Repo[]>{
    return this.http.get(this.githubApiUrl)
                  .toPromise()
                  .then(function(response){
                    console.log(response.json().data);
                    return response.json() as Repo[]
                  })
                  // .map(response=> console.log(response))
                  // .then(response => response.json().data as Repo[])
                  .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
