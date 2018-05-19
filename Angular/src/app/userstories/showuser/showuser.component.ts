import { Component, OnInit } from '@angular/core';
import { UserstoriesService } from '../../services/userstories.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

  constructor(private userstoriesService: UserstoriesService) { }

  userstories;
  ngOnInit() {
    this.userstoriesService.userstories$.subscribe(
    data => {
      this.userstories=data;
      console.log(data);
    }
  );

  this.userstoriesService.ErrorResponsee$.subscribe(
    message => {
      console.log(message);
      alert(message)
    }
  );

  this.userstoriesService.getAllUserStories();
  }

}
