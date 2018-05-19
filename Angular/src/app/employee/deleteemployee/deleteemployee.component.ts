import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {

  formData: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private http: HttpClient,private employeeService: EmployeeService) { }
  id = this.route.snapshot.paramMap.get('id')
  employee;
  ngOnInit() {
    this.formData=new FormGroup({
      Ename: new FormControl('',[]),
      Designation: new FormControl('',[]), 
      Mid: new FormControl('',[]),
      Contactno: new FormControl('',[]),
      EmailId: new FormControl('',[]),
      Skillsets: new FormControl('',[])
    });

    this.loadEmployee();
  }

  loadEmployee(){
    this.employeeService.getEmployeeById(this.id);
    this.employeeService.employee$.subscribe(
    //this.http.get(`http://localhost:56322/api/employee/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.employee = data;
        this.formData=new FormGroup({
          Ename: new FormControl(this.employee.Ename,[]),
          Designation: new FormControl(this.employee.Designation,[]), 
          Mid: new FormControl(this.employee.Mid,[]),
          Contactno: new FormControl(this.employee.Contactno,[]),
          EmailId: new FormControl(this.employee.EmailId,[]),
          Skillsets: new FormControl(this.employee.Skillsets,[])
        });
      }
    );
  }

  onClickSubmit(employee){
    console.log(employee);
    this.employeeService.deleteEmployee(this.id);
  }
}
