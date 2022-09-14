import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  blog : Observable<any> | undefined
  constructor(private route:ActivatedRoute, private service:ContentfulService) { }

  ngOnInit() {
    
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.blog = this.service.getAllEntryById(id);
    });
  }

}
