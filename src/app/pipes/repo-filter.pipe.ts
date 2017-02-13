import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repoFilter'
})
export class RepoFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value.name)
    return true;
  }

}
