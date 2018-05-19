import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  formData: FormGroup;
  constructor(private employeeService: EmployeeService) { }
  employees;

  ngOnInit() {
    this.formData=new FormGroup({
      Ename: new FormControl('',[Validators.required]),
      Designation: new FormControl('',[Validators.required]), 
      Mid: new FormControl('',[Validators.required]),
      Contactno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
      EmailId: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      Skillsets: new FormControl('',[Validators.required])
    });
    this.showEmployees();
  }

  showEmployees(){
    this.employeeService.getAllEmployees();
    this.employeeService.employees$.subscribe(
      data => {
        this.employees=data;
      }
    );
  }

  onClickSubmit(employee){
    console.log(employee);
    this.employeeService.createEmployees(employee);
  }

}
