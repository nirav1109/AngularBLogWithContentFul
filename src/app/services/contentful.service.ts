import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }
  private client=createClient({
    space:environment.spaceId,
    accessToken:environment.accessTocken
  });

  getAllEntries(){
    
    const promise =  this.client.getEntries();
    return from(promise);
  }

  getAllEntryById(id:string){
    const promise =  this.client.getEntry(id);
    return from(promise);
  }
}
