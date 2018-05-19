import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-createmanagercomments',
  templateUrl: './createmanagercomments.component.html',
  styleUrls: ['./createmanagercomments.component.css']
})
export class CreatemanagercommentsComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  formData:FormGroup
  ngOnInit() {
    this.formData=new FormGroup({
      comment: new FormControl('',[Validators.required]),
      protaskId: new FormControl('',[Validators.required])
    })
  }

  onClickSubmit(comments){
    console.log(comments);
    this.managerService.createManagercomments(comments);
  }
}
