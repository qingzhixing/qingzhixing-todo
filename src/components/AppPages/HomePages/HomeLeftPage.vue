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
    #user-info-display{
        background-color: antiquewhite;
        width:100%;
        height:60px;
    }

    #search{
        background-color: aquamarine;
        width: 100%;
        height:30px;
    }

    #menu{

    }

    #create-bar{
        align-self: flex-end;
        width: 100%;
        height:30px;
        background-color: blue;
    }
}
</style>
