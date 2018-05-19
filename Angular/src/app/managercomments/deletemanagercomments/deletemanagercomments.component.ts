import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-deletemanagercomments',
  templateUrl: './deletemanagercomments.component.html',
  styleUrls: ['./deletemanagercomments.component.css']
})
export class DeletemanagercommentsComponent implements OnInit {

  constructor(private managerService:ManagerService,private route:ActivatedRoute,private router:Router) { }

  id = this.route.snapshot.paramMap.get('id')
  formData:FormGroup;
  comments;
  ngOnInit() {
    this.formData=new FormGroup({
      comment: new FormControl('',[]),
      protaskId: new FormControl('',[])
    })
    this.loadManagerComments();
  }

  loadManagerComments(){
    this.managerService.loadManagercomments(this.id);
    this.managerService.manager$.subscribe(
      data =>{
        console.log(data);
        this.comments=data;
        this.formData=new FormGroup({
          comment: new FormControl(this.comments.comment,[]),
          protaskId: new FormControl(this.comments.protaskId,[])
        })
      }
    );
  }

  onClickSubmit(comments){
    console.log(comments);
    this.managerService.deleteManagercomments(this.id);
  }
}
