import * as Period from "@/types/TaskPeriod";

class TodoTask{
    content:string;
    isFinished:boolean;
    isImportant:boolean;
    expirationDate:Date;
    period:Period.TaskPeriod;

    constructor(taskObject:{
        content:string,
        isFinished : boolean,
        isImportant : boolean,
        expirationDate:Date,
        period:Period.TaskPeriod;
    }) {
        this.content = taskObject.content;
        this.isFinished = taskObject.isFinished;
        this.isImportant = taskObject.isImportant;
        this.expirationDate = taskObject.expirationDate;
        this.period = taskObject.period;
    }

    //完成任务时会根据周期再次生成任务
    FinishTask():TodoTask{
        const taskObject={
            content:this.content,
            isFinished:false,
            isImportant:this.isImportant,
            expirationDate:this.period.CalculateDateAfterPeriod(this.expirationDate),
            period:this.period,
        };
        return new TodoTask(taskObject);
    }
}

export default TodoTask;
