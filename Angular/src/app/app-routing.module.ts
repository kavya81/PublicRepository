import { NgModule } from '@angular/core';
import{ RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserstoriesComponent } from './userstories/userstories.component';
import { TasksComponent } from './tasks/tasks.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
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

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    children:[]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children:[  {
      path: 'show',
      component: ShowemployeeComponent,
      children:[]
    },
    {
      path: 'create',
      component: CreateemployeeComponent,
      children:[]
    },
    {
      path: 'edit/:id',
      component: EditemployeeComponent,
      children:[]
    },
    {
      path: 'delete/:id',
      component: DeleteemployeeComponent,
      children:[]
    },
    {
      path: '',
      redirectTo: '/employee/show',
      pathMatch: 'full'
    }]
  },
  {
    path: 'project',
    component: ProjectComponent,
    children:[  {
      path: 'show',
      component: ShowprojectComponent,
      children:[]
    },
    {
      path: 'create',
      component: CreateprojectComponent,
      children:[]
    },
    {
      path: 'edit/:id',
      component: EditprojectComponent,
      children:[]
    },
    {
      path: 'delete/:id',
      component: DeleteprojectComponent,
      children:[]
    },
    {
      path: '',
      redirectTo: '/project/show',
      pathMatch: 'full'
    }]
  },
  {
    path: 'user',
    component: UserstoriesComponent,
    children:[{
      path: 'show',
      component: ShowuserComponent,
      children:[]
    },
    {
      path: 'create',
      component: CreateuserComponent,
      children:[]
    },
    {
      path: 'edit/:id',
      component: EdituserComponent,
      children:[]
    },
    {
      path: 'delete/:id',
      component: DeleteuserComponent,
      children:[]
    },
    {
      path: '',
      redirectTo: '/user/show',
      pathMatch: 'full'
    }]
  },
  {
    path: 'task',
    component: TasksComponent,
    children:[{
      path: 'show',
      component: ShowtaskComponent,
      children:[]
    },
    {
      path: 'create',
      component: CreatetaskComponent,
      children:[]
    },
    {
      path: 'edit/:id',
      component: EdittaskComponent,
      children:[]
    },
    {
      path: 'delete/:id',
      component: DeletetaskComponent,
      children:[]
    },
    {
      path: '',
      redirectTo: '/task/show',
      pathMatch: 'full'
    }]
  },
  {
    path: 'managercomments',
    component: ManagercommentsComponent,
    children:[{
      path: 'show',
      component: ShowmanagercommentsComponent,
      children:[]
    },
    {
      path: 'create',
      component: CreatemanagercommentsComponent,
      children:[]
    },
    {
      path: 'edit/:id',
      component: EditmanagercommentsComponent,
      children:[]
    },
    {
      path: 'delete/:id',
      component: DeletemanagercommentsComponent,
      children:[]
    },
    {
      path: '',
      redirectTo: '/managercomments/show',
      pathMatch: 'full'
    }]
  },
  {
    path: 'header',
    component: HeaderComponent,
    children:[]
  },
  {
    path: 'footer',
    component: FooterComponent,
    children:[]
  }
];

@NgModule({
  
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], 
    declarations: []
})
export class AppRoutingModule { }
