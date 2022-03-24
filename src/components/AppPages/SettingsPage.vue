<template>
    <div id="settings-page">
        SettingsPage
        <button @click="ChangeGlobalTheme('Dark')">Change Theme to Dark</button>
        <pre>
            {{settings}}
        </pre>
    </div>
</template>

<script lang="ts">
import {defineComponent,reactive} from "vue";
import {GlobalTheme,globalSettings} from "@/types/GlobalSettings";

export default defineComponent({
    name: "SettingsPage",
    setup(){
        let settings=reactive(globalSettings);
        let ChangeGlobalTheme=function(newGlobalTheme:GlobalTheme):void{
            settings.themeSettings.globalTheme = newGlobalTheme;
            // console.log(settings);
        }
        return{
            settings,
            ChangeGlobalTheme,
        }
    }
})
</script>

<style lang="less" scoped>
@import url("~@/style/global.less");
#settings-page{
    width: @appPageWidth;
    height:@appPageHeight;
}
</style>
