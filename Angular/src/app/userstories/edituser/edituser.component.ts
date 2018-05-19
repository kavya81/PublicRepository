import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserstoriesService } from '../../services/userstories.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private userstoriesService: UserstoriesService,private router: Router,private route: ActivatedRoute) { }

  formData: FormGroup;
  user;
  id = this.route.snapshot.paramMap.get('id')
  ngOnInit() {
    this.formData=new FormGroup({
      Story: new FormControl('',[]),
      ProId: new FormControl('',[])
    });
    this.loadUser();
  }

  loadUser(){
    this.userstoriesService.loadUserstories(this.id);
    this.userstoriesService.user$.subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.formData=new FormGroup({
          Story: new FormControl(this.user.Story,[Validators.required]),
          ProId: new FormControl(this.user.ProId,[Validators.required])
        });
      }
    );
  }

  onClickSubmit(user){
    console.log(user);
    this.userstoriesService.editUserstories(user,this.id);
  }
}
