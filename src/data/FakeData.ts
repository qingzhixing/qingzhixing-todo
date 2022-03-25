import UserInfo from "@/types/UserInfo";
import TodoList from "@/types/TodoList";
import ListGroup from "@/types/ListGroup";
import BackgroundUri from "@/types/Background";
import TodoTask from "@/types/TodoTask";
import Icon from "@/types/Icon";

const userInfo:UserInfo={
    username:"Username",
    account:"Account-ID",
    avatarURI:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
};

const listImportant:TodoList=new TodoList({
    iconUri:Icon.testIcon,
    listName :"important",
    background:BackgroundUri.defaultBackground,
    taskArray : Array<TodoTask>()
});
const listWithinPlan:TodoList=new TodoList({
    iconUri:Icon.testIcon,
    listName :"within-plan",
    background:BackgroundUri.defaultBackground,
    taskArray : Array<TodoTask>()
});

const defaultListGroup:ListGroup=new ListGroup(
    Array<TodoList>(listImportant,listWithinPlan),
    "default"
);

export {userInfo,defaultListGroup};
