import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  baseUrl='http://localhost:56322';

  private task=new Subject<any>();
  task$=this.task.asObservable();

  private tasks=new Subject<any>();
  tasks$=this.tasks.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponsee$=this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService,private router:Router) { }

  getAllTasks(){
    const url = `${this.baseUrl}/api/tasks`;
    this.crudService.Read(url).subscribe(
      data => {
        this.tasks.next(data);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  createTasks(task){
    const url = `${this.baseUrl}/api/tasks`;
    this.crudService.Create(url,task).subscribe(
      data =>{
        this.tasks.next(data);
        console.log('saved');
        this.router.navigate(['/task']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  loadTasks(id){
    const url = `${this.baseUrl}/api/tasks/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.task.next(data);
      }
    );
  }

  editTasks(tasks,id){
    const url = `${this.baseUrl}/api/tasks/${id}`;
    this.crudService.Update(url,tasks).subscribe(
      data =>{
        this.tasks.next(data);
        console.log('edited');
        this.router.navigate(['/task']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }


  deleteTasks(id){
    const url = `${this.baseUrl}/api/tasks/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.tasks.next(data);
        console.log('deleted successfully');
        this.router.navigate(['/task']);
      }
    );
  }

}
