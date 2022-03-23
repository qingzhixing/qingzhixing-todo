enum GlobalTheme{
    Dark="Dark",
    Light="Light",
    FollowTheSystem="FollowTheSystem",
}

//默认设置
const globalSettings = {
    commonSettings: {
        //从顶部添加新任务
        addNewTaskFromTheTop: true,
        //星标任务置顶
        tasksWithStarsOnTop: true,
        //完成任务播放提示音
        playPromptWhenCompleteTasks: true,
        //删除前确认
        confirmBeforeDelete: true,
    },
    themeSettings: {
        globalTheme: GlobalTheme.Light,
    },
    smartListSettings: {
        onImportantList: true,
        onWithinPlanList: true,
        onFinishedList: true,
        onWholeList: true,
        onAssignedToMeList: true,
        hideEmptyList: true,
    },
    notificationSettings: {
        onNotificationHint: true,
    }
};

export {GlobalTheme,globalSettings};
