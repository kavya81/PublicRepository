import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl='http://localhost:56322';

  private project=new Subject<any>();
  project$=this.project.asObservable();

  private projects=new Subject<any>();
  projects$=this.projects.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponsee$=this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService,private router:Router) { }

  getAllProjects(){
    const url = `${this.baseUrl}/api/project`;
    this.crudService.Read(url).subscribe(
      data => {
        this.projects.next(data);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
      
    );
  }

  createProject(project){
    const url = `${this.baseUrl}/api/project`;
    this.crudService.Create(url,project).subscribe(
      data =>{
        this.projects.next(data);
        console.log('saved');
        this.router.navigate(['/project']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  loadProjects(id){
    const url = `${this.baseUrl}/api/project/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.project.next(data);
      }
    );
  }

  editProjects(project,id){
    const url = `${this.baseUrl}/api/project/${id}`;
    this.crudService.Update(url,project).subscribe(
      data =>{
        this.project.next(data);
        console.log('edited');
        this.router.navigate(['/project']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

  deleteProject(id){
    const url = `${this.baseUrl}/api/project/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.projects.next(data);
        console.log('deleted successfully');
        this.router.navigate(['/project']);
      }
    );
  }
  
}
