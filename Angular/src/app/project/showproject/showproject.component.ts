import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  projects;
  ngOnInit() {
    this.projectService.projects$.subscribe(
      data => {
        this.projects=data;
        console.log(data);
      }
    );

    this.projectService.ErrorResponsee$.subscribe(
      message => {
        console.log(message);
        alert(message)
      }
    );

    this.projectService.getAllProjects();
  }


 
}
