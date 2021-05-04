import { Component } from '@angular/core';
import{NewsFeedService} from '../news-feed.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles:any

  constructor(private newsService:NewsFeedService) {
    this.loadNews()
  }
  loadNews(){
    this.newsService.getNews("top-headlines?country=us").subscribe( news=> {
      this.articles=news['articles'];
      console.log(this.articles);
    })

}

}