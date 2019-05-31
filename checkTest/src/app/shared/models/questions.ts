export class Questions {
     questionId:number;
    questionDescription:string;
    categoriId:number;
    teacherId:number;
    isPrivate:boolean;
    levelQuestion:number;
    constructor(questionId,questionDescription,categoriId,
        teacherId,isPrivate,levelQuestion,Category,Teacher){
            this.questionId=questionId;
            this.questionDescription=questionDescription;
            this.categoriId=categoriId;
            this.teacherId=teacherId;
            this.isPrivate=isPrivate;
            this.levelQuestion=levelQuestion;
           

        }
}
