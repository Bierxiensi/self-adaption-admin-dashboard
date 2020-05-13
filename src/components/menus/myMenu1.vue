<template>
<div>
    <my-menu :menu-lists="menuLists"/>
</div>
</template>

<script>
import MyMenu from "@/myComponents/myMenu";
import {mapState} from "vuex";
export default {
    name: "myMenu1",
    components: {MyMenu},
    computed: {
        ...mapState('menus', ['menuLists'])
    }
}
</script>

<style scoped>

</style>
