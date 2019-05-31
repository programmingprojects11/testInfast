export class Answer {
    answerId:number;
    answerDescription:string;
    questionId:number;
    correct:boolean;
    constructor(answerId,answerDescription,questionId,correct){
        this.answerDescription=answerDescription;
        this.answerId=answerId;
        this.questionId=questionId;
        this.correct=correct;
    }
}
