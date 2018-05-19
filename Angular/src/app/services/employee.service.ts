import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl='http://localhost:56322';

  private employees=new Subject<any>();
  employees$=this.employees.asObservable();

  /*private showmanid=new Subject<any>();
  showmanid$=this.showmanid.asObservable();

  private showemp=new Subject<any>();
  showemp$=this.showemp.asObservable();*/

  private employee=new Subject<any>();
  employee$=this.employee.asObservable();

  private ErrorResponse=new Subject<any>();
  ErrorResponsee$=this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService,private router:Router) { }

  getAllEmployees(){
    const url = `${this.baseUrl}/api/employee`;
    this.crudService.Read(url).subscribe(
      data => {
        this.employees.next(data);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
      
    );
  }

  createEmployees(employee){
    const url = `${this.baseUrl}/api/employee`;
    this.crudService.Create(url,employee).subscribe(
      data =>{
        this.router.navigate(['/employee']);
      },error =>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    );
  }

    editEmployees(employe,id){
      const url = `${this.baseUrl}/api/employee/${id}`;
      this.crudService.Update(url,employe).subscribe(
        data =>{
          this.employees.next(data);
          console.log('edited');
          this.router.navigate(['/employee']);
        },error =>{
          console.log(error);
          this.ErrorResponse.next(error);
        }
      );
    }

  getEmployeeById(id){
    const url = `${this.baseUrl}/api/employee/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.employee.next(data);
      }
    );
  }

  deleteEmployee(id){
    const url = `${this.baseUrl}/api/employee/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.employee.next(data);
        console.log('deleted successfully');
        this.router.navigate(['/employee']);
      }
    );
  }
}
