import TodoTask from "@/types/TodoTask"
import Icon from "@/types/Icon";
import BackgroundUri from "@/types/Background";


class TodoList{
    iconUri:string;
    listName:string;
    background:BackgroundUri;
    taskArray:Array<TodoTask>;

    constructor(listObject:{
        iconUri:string;
        listName:string;
        background:BackgroundUri,
        taskArray : Array<TodoTask>,
    }){
        this.iconUri=listObject.iconUri;
        this.listName=listObject.listName;
        this.background=listObject.background;
        this.taskArray=listObject.taskArray;
    }

}

export default TodoList;
