import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.less']
})
export class CreateQuestionComponent implements OnInit {

  public options: Object = {};
  public model :string;
  constructor() { }

  ngOnInit() {
    console.log("new version")
    this.options =  {charCounterCount: true,
    // toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert', 'color', 'spellChecker', '|', 'undo'],
    toolbarButtons: [['font-size','textColor','bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript','aline-center'], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor'], ['inlineClass', 'inlineStyle', 'clearFormatting']]
    // ,fontFamily: {
    //   "Roboto,sans-serif": 'Roboto',
    //   "Oswald,sans-serif": 'Oswald',
    //   "Montserrat,sans-serif": 'Montserrat',
    //   "'Open Sans Condensed',sans-serif": 'Open Sans Condensed'
    // },

    }
    this.model = "hello model"

}
}
