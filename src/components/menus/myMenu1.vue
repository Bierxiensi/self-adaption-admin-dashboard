<template>
<div>
    <my-menu :menu-lists="menuList" :collapse="isCollapse"/>
</div>
</template>

<script>
import MyMenu from "@/myComponents/myMenu";
import {mapState} from "vuex";
export default {
    name: "myMenu1",
    components: {MyMenu},
    computed: {
        ...mapState('menus', ['menuList'])
    },
    data () {
        return{
            isCollapse: true
        }
    }
}
</script>

<style scoped>

</style>
