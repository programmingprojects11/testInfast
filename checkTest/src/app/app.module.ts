import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RegistStudentComponent } from './regist-student/regist-student.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { RegisterComponent } from './register/register.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { GetQuestionsComponent } from './get-questions/get-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RegistStudentComponent,
    CreateTestComponent,
    CreateQuestionComponent,
    RegisterComponent,
    GetQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot() 
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
