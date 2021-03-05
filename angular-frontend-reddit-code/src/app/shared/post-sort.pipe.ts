import { Pipe, PipeTransform } from '@angular/core';
import { PostModel } from './post-model';

@Pipe({
  name: 'postSort'
})
export class PostSortPipe implements PipeTransform {

  transform(posts: any, field: any): PostModel[] {
    posts.sort((a: any, b: any) => {
      if(a.id < b.id)
        return 1;
      else if(a.id > b.id)
        return -1;
      else
        return 0;
    });

    return posts;
  }

}
