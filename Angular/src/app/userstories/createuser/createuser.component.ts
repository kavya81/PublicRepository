import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserstoriesService } from '../../services/userstories.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  formData: FormGroup;
  constructor(private userstoriesService: UserstoriesService) { }

  ngOnInit() {
    this.formData=new FormGroup({
      Story: new FormControl('',[Validators.required]),
      ProId: new FormControl('',[Validators.required])
    });
  }

  onClickSubmit(user){
    console.log(user);
    this.userstoriesService.createUserstories(user);
  }
}
