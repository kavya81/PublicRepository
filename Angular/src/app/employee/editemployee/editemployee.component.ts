import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  formData: FormGroup;
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router,private employeeService: EmployeeService) { }
  id = this.route.snapshot.paramMap.get('id')
  employee;
  employees;
  ngOnInit() {

    this.formData=new FormGroup({
      Ename: new FormControl('',[]),
      Designation: new FormControl('',[]), 
      Mid: new FormControl('',[]),
      Contactno: new FormControl('',[]),
      EmailId: new FormControl('',[]),
      Skillsets: new FormControl('',[])
    });

    this.showEmployees();
    this.loadEmployee();
  }
  
  showEmployees(){
    this.employeeService.getAllEmployees();
    this.employeeService.employees$.subscribe(
      data => {
        this.employees=data;
      }
    );
  }

  loadEmployee(){
    this.employeeService.getEmployeeById(this.id);
    this.employeeService.employee$.subscribe(
   // this.http.get(`http://localhost:56322/api/employee/${this.id}`).subscribe(
      data => {
        console.log(data);
        this.employee = data;
        this.formData=new FormGroup({
          Ename: new FormControl(this.employee.Ename,[Validators.required]),
          Designation: new FormControl(this.employee.Designation,[Validators.required]), 
          Mid: new FormControl(this.employee.Mid,[Validators.required]),
          Contactno: new FormControl(this.employee.Contactno,[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
          EmailId: new FormControl(this.employee.EmailId,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
          Skillsets: new FormControl(this.employee.Skillsets,[Validators.required])
        });
      }
    );
  }

  onClickSubmit(employee){
    console.log(employee);
    this.employeeService.editEmployees(employee,this.id);
    this.router.navigate(['/employee']);  
  }
}
