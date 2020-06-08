<template>
    <div>
        <div v-for="(item,index) in secondMenuList" :key="index">
            <div :class="{'sec-active':currentId === item.id}" style="border: 0px solid yellow">
                <li class="folderIcon" v-if="item.children">
                    <el-icon class="el-icon-arrow-down" v-if="item.show"/>
                    <el-icon class="el-icon-arrow-right" v-else/>
                </li>
                <div style="border: 0px solid blue; text-indent: 40px" @click="clickSecondLevelItem(item, index)">
                    <img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">
                    {{item.name}}
                </div>
                <el-collapse-transition>
<!--            <transition-group name="list" tag="p">   :key="index"-->
                    <third-item v-if="item.children && item.show"/>
<!--            </transition-group>-->
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>

<script>
import thirdItem from "@/components/tree/thirdItem";
import {mapState} from "vuex";
export default {
    name: "secondItem",
    components: { thirdItem },
    data(){
        return{
            currentId: 1,
            thirdMenuList: []
        }
    },
    computed: {
        ...mapState('menus', ['firstIndex']),
        ...mapState('menus', ['secondMenuList'])
    },
    methods:{
        clickSecondLevelItem(item, index){
            if(!item.children){
                this.$router.push('/'+ this.firstIndex + '/' + item.id)
            } else {
                this.secondMenuList.forEach(menuItem => {
                    if (menuItem !== item) {
                        menuItem.show = false
                    }
                })
                this.currentId = item.id
                item.show = !item.show
                if (item.show === true && item.children) {
                    this.thirdMenuList = item.children
                    this.$store.commit('menus/SET_SECOND_ITEM_INDEX', JSON.parse(JSON.stringify(item.children[index].id)))
                    this.$store.commit('menus/SET_THIRD_MENU_LIST', this.thirdMenuList)
                } else if (item.show === false) {
                    this.thirdMenuList = []
                    this.$store.commit('menus/SET_THIRD_MENU_LIST', JSON.parse(JSON.stringify([])))
                }
                this.$store.commit('menus/SET_SECOND_MENU_LIST', JSON.parse(JSON.stringify(this.secondMenuList)))
                console.log(57, 'clickSecondItem', item, this.thirdMenuList)
            }
        }
    }
}
</script>

<style scoped>
    .list-enter-active, .list-leave-active {
        transition: opacity .5s;
    }
    .list-enter, .list-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
