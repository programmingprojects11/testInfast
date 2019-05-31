import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{MenuComponent}from'./menu/menu.component';
import{RegistStudentComponent}from './regist-student/regist-student.component'
import { CreateTestComponent } from './create-test/create-test.component'
import { CreateQuestionComponent } from './create-question/create-question.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
{path:'regist',component:RegistStudentComponent},
{path:'create-test',component:CreateTestComponent},
{path:'create-question',component:CreateQuestionComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
