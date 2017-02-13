import { Observable } from 'rxjs/Rx';
declare function fetch(url:string);

export function initObservable(){

    // --------- lesson one ------------

    // var keys$  = Observable.fromEvent(document,'keyup')
    //             .do((keyUp:KeyboardEvent)=>console.log(keyUp.key))
    // keys$.subscribe();

    //----------- lesson two -----------
    //----------- lesson three --------
    // fetch('https://api.github.com/users/zideajang/repos')
    //     .then(res=>res.json())
    //     .then(repo=>console.log(repo));

    

    const reposUrl = 'https://api.github.com/users/zideajang/repos'
    const reposPromise = fetch(reposUrl)
                            .then(res=>res.json());
    const repos$ = Observable.fromPromise(reposPromise)
                            // .do(repos=>console.log(repos));
                            // .map((key,index)=>{
                            //     console.log(key," => ",index);
                            // })

    const firstRepo$ = repos$.map((repos)=>{
        console.log(repos[0])
        return repos[0]
    });

    firstRepo$.subscribe(
        repo=>console.log("first repo", repo.name)
    )

    repos$.subscribe(
        repos => console.log("new lessons", repos),

        error => console.error("error",error),

        ()=>console.log("done")
    );





}