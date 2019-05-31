import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoriesService } from '../services/categories.service';
import{GetQuestionService}from'../services/get-question.service';
import { from } from 'rxjs';
import { Questions } from '../shared/models/questions';
@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.less']
})
export class CreateTestComponent implements OnInit {

  categories: Category[];
  selectedCategory = new Category();
  title:string=null;
  questions:Questions[];

  constructor(private categoriesService: CategoriesService,private getQuestionService:GetQuestionService) { }

  ngOnInit() {
    this.getCategories();
  }

  check(event) {
  
   this.title=' המבחן ב'+event.target.value;
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      
    })
  }
  addQuestion() {

  }
  getQuestion()
  {
    
    this.getQuestionService.getQuestion().subscribe((res:Questions[])=>{
      this.questions=res;

    })
  }
}
