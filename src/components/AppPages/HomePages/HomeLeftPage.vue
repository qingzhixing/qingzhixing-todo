<template>
    <div id="home-left-page">
        <div id="user-info-display">
            <div id="user-avatar">avatar</div>
            <div id="username">username</div>
            <div id="user-account">account-id</div>
        </div>
        <div id="search"></div>
        <div id="menu"></div>
        <div id="create-bar"></div>
    </div>
</template>

<script>
export default {
    name: "HomeLeftPage"
}
</script>

<style lang="less" scoped>
@import url("~@/style/global.less");
#home-left-page{
    display:flex;
    flex-direction:column;

    height:100%;

    @userInfoDisplayHeight:60px;
    #user-info-display{
        background-color: antiquewhite;
        width:100%;
        height:@userInfoDisplayHeight;
    }

    @searchHeight:30px;
    #search{
        background-color: aquamarine;
        width: 100%;
        height:@searchHeight;
    }

    #menu{
        flex:1fr;
        height:100%;
        background-color: green;
    }

    @createBarHeight:30px;
    #create-bar{
        width: 100%;
        height:@createBarHeight;
        background-color: blue;
    }
}
</style>
