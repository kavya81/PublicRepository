import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router,private projectService: ProjectService) { }

  id = this.route.snapshot.paramMap.get('id')
  project;
  formData: FormGroup;
  ngOnInit() {
    this.formData=new FormGroup({
      Pname: new FormControl('',[]),
      StartDate: new FormControl('',[]),
      EndDate: new FormControl('',[]),
      Cname: new FormControl('',[])
    });
    this.loadProject();
  }

  loadProject(){
    this.projectService.loadProjects(this.id);
    this.projectService.project$.subscribe(
      data => {
        console.log(data);
        this.project = data;
        this.formData=new FormGroup({
          Pname: new FormControl(this.project.Pname,[]),
          StartDate: new FormControl(this.project.StartDate,[]), 
          EndDate: new FormControl(this.project.EndDate,[]),
          Cname: new FormControl(this.project.Cname,[])
        });
      }
    );
  }

  onClickSubmit(project){
    console.log(project);
    this.projectService.deleteProject(this.id);
  }
}
