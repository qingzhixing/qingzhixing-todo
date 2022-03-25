import TodoTask from "@/types/TodoTask"
import Icon from "@/types/Icon";
import BackgroundUri from "@/types/Background";


class TodoList{
    icon:Icon;
    listName:string;
    background:BackgroundUri;
    taskArray:Array<TodoTask>;

    constructor(listObject:{
        icon:Icon;
        listName:string;
        background:BackgroundUri,
        taskArray : Array<TodoTask>,
    }){
        this.icon=listObject.icon;
        this.listName=listObject.listName;
        this.background=listObject.background;
        this.taskArray=listObject.taskArray;
    }

}

export default TodoList;
