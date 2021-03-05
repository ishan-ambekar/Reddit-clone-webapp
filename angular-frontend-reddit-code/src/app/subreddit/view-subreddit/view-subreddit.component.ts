import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { SubredditModel } from '../subreddit-model';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  subredditId!: number;
  subreddit!: SubredditModel;

  constructor(private subredditService: SubredditService, private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.subredditId = this.activatedRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.getSubredditById();
  }

  getSubredditById() {
    this.subredditService.getSubredditById(this.subredditId).subscribe(data => {
      this.subreddit = data;
    }, error => {
      throwError(error);
    })
  }

}
