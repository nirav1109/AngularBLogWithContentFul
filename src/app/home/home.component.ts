import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs : Observable<any> | undefined;
  constructor(private service:ContentfulService) { }

  ngOnInit() {
    this.blogs = this.service.getAllEntries();
  }

}
