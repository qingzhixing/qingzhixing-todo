import TodoList from "@/types/TodoList";

class ListGroup{
    listArray:Array<TodoList>;
    groupName:string;

    constructor(listArray:Array<TodoList>, groupName:string){
        this.listArray = listArray;
        this.groupName = groupName;
    }
}

export default ListGroup;
