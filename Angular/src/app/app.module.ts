import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { ShowprojectComponent } from './project/showproject/showproject.component';
import { ShowuserComponent } from './userstories/showuser/showuser.component';
import { ShowtaskComponent } from './tasks/showtask/showtask.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { CreateuserComponent } from './userstories/createuser/createuser.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EditprojectComponent } from './project/editproject/editproject.component';
import { DeleteprojectComponent } from './project/deleteproject/deleteproject.component';
import { EdituserComponent } from './userstories/edituser/edituser.component';
import { DeleteuserComponent } from './userstories/deleteuser/deleteuser.component';
import { EdittaskComponent } from './tasks/edittask/edittask.component';
import { DeletetaskComponent } from './tasks/deletetask/deletetask.component';
import { ManagercommentsComponent } from './managercomments/managercomments.component';
import { ShowmanagercommentsComponent } from './managercomments/showmanagercomments/showmanagercomments.component';
import { CreatemanagercommentsComponent } from './managercomments/createmanagercomments/createmanagercomments.component';
import { EditmanagercommentsComponent } from './managercomments/editmanagercomments/editmanagercomments.component';
import { DeletemanagercommentsComponent } from './managercomments/deletemanagercomments/deletemanagercomments.component';
import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';
import { UserstoriesService } from './services/userstories.service';
import { TasksService } from './services/tasks.service';
import { ManagerService } from './services/manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    UserstoriesComponent,
    TasksComponent,
    CreateemployeeComponent,
    ShowemployeeComponent,
    ShowprojectComponent,
    ShowuserComponent,
    ShowtaskComponent,
    CreateprojectComponent,
    CreateuserComponent,
    CreatetaskComponent,
    EditemployeeComponent,
    DeleteemployeeComponent,
    EditprojectComponent,
    DeleteprojectComponent,
    EdituserComponent,
    DeleteuserComponent,
    EdittaskComponent,
    DeletetaskComponent,
    ManagercommentsComponent,
    ShowmanagercommentsComponent,
    CreatemanagercommentsComponent,
    EditmanagercommentsComponent,
    DeletemanagercommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,ProjectService,UserstoriesService,TasksService,ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
