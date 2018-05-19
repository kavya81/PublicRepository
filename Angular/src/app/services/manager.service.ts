import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl='http://localhost:56322';

  private manager=new Subject<any>();
  manager$=this.manager.asObservable();

  private managers=new Subject<any>();
  managers$=this.managers.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponsee$=this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService,private router:Router) { }

  getAllManagercomments(){
    const url = `${this.baseUrl}/api/managercomm`;
    this.crudService.Read(url).subscribe(
      data => {
        this.managers.next(data);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  createManagercomments(manager){
    const url = `${this.baseUrl}/api/managercomm`;
    this.crudService.Create(url,manager).subscribe(
      data =>{
        this.managers.next(data);
        console.log('saved');
        this.router.navigate(['/managercomments']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  loadManagercomments(id){
    const url = `${this.baseUrl}/api/managercomm/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.manager.next(data);
      }
    );
  }

  editManagercomments(tasks,id){
    const url = `${this.baseUrl}/api/managercomm/${id}`;
    this.crudService.Update(url,tasks).subscribe(
      data =>{
        this.managers.next(data);
        console.log('edited');
        this.router.navigate(['/managercomments']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }


  deleteManagercomments(id){
    const url = `${this.baseUrl}/api/managercomm/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.managers.next(data);
        console.log('deleted successfully');
        this.router.navigate(['/managercomments']);
      }
    );
  }


}
