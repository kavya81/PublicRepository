import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserstoriesService {
  baseUrl='http://localhost:56322';

  private userstories=new Subject<any>();
  userstories$=this.userstories.asObservable();

  private user=new Subject<any>();
  user$=this.user.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponsee$=this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService,private router:Router) { }

  getAllUserStories(){
    const url = `${this.baseUrl}/api/user`;
    this.crudService.Read(url).subscribe(
      data => {
        this.userstories.next(data);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
      
    );
  }

  createUserstories(userstories){
    const url = `${this.baseUrl}/api/user`;
    this.crudService.Create(url,userstories).subscribe(
      data =>{
        this.userstories.next(data);
        console.log('saved');
        this.router.navigate(['/user']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  loadUserstories(id){
    const url = `${this.baseUrl}/api/user/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.user.next(data);
      }
    );
  }

  editUserstories(userstories,id){
    const url = `${this.baseUrl}/api/user/${id}`;
    this.crudService.Update(url,userstories).subscribe(
      data =>{
        this.userstories.next(data);
        console.log('edited');
        this.router.navigate(['/user']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }


  deleteUserstories(id){
    const url = `${this.baseUrl}/api/user/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.userstories.next(data);
        console.log('deleted successfully');
        this.router.navigate(['/user']);
      }
    );
  }
}
