import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-showmanagercomments',
  templateUrl: './showmanagercomments.component.html',
  styleUrls: ['./showmanagercomments.component.css']
})
export class ShowmanagercommentsComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  comments;
  ngOnInit() {
    this.managerService.managers$.subscribe(
      data => {
        this.comments=data;
        console.log(data);
      }
    );
  
    this.managerService.ErrorResponsee$.subscribe(
      message => {
        console.log(message);
        alert(message)
      }
    );  
    this.managerService.getAllManagercomments();
  }

}
