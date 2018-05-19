import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserstoriesService } from '../../services/userstories.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private userstoriesService: UserstoriesService) { }

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
          Story: new FormControl(this.user.Story,[]),
          ProId: new FormControl(this.user.ProId,[])
        });
      }
    );
  }

  onClickSubmit(user){
    console.log(user);
    this.userstoriesService.deleteUserstories(this.id);
  }
}
