<template>
<div class="main_layout_header" style="display: flex; flex-direction: row; height: 100%">
    <div class="main_layout_header_left" style="width: 13%;">
        <div style="padding: 0 10px; width: 100%; display: flex; align-items: center;justify-content: space-between">
            <div class="test">
<!--                <img src="src/assets/png/D-logo.png" alt="">-->
            </div>
            <div style="">
                <el-switch
                    style="display: block"
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    @change="switchChange">
                </el-switch>
            </div>
        </div>
    </div>
    <div class="main_layout_header_right" style="width: 87%"></div>
</div>
</template>

<script>
export default {
    name: "myHeader1",
    data(){
        return{
            value: true
        }
    },
    methods:{
        switchChange(isShowMenu){
            window.document.documentElement.setAttribute( "is_show_menu", isShowMenu );
        }
    }
}
</script>

<style scoped>
.test{
    width: 113px;
    height: 32px;
    background-image: url("../../assets/png/D-logo.png");
}
</style>
