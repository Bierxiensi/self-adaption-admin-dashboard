<template>
    <div>
        <div v-for="(item,index) in thirdMenuList" :key="index">
            <div style="border: 0px solid red; text-indent: 60px" @click="clickThirdLevelItem(item)">
                <img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
    export default {
        name: "thirdItem",
        computed: {
            ...mapState('menus', ['firstIndex']),
            ...mapState('menus', ['secondIndex']),
            ...mapState('menus', ['thirdMenuList'])
        },
        // props:{
        //     list: Array
        // },
        methods:{
            clickThirdLevelItem(item){
                this.$router.push('/'+ this.firstIndex + '/' + this.secondIndex + '/' + item.id)
            }
        }
    }
</script>

<style scoped>

</style>
