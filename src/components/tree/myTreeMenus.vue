<template>
    <div>
        <li class="secondLevelItem1" style="border: 0px solid red; text-indent: 0px; overflow: hidden" v-for="(item,index) in list" :key="index">
            <div :class="{'active':currentId === item.id}" style="border: 0px solid yellow">
                <!--@click="onLiClick(item.id, index ,$event)"-->
                <i class="folderIcon" v-if="item.children">
                    <el-icon class="el-icon-arrow-down" v-if="item.show"/>
                    <el-icon class="el-icon-arrow-right" v-else/>
                </i>
                <div v-if="item.children" style="border: 1px solid blue; text-indent: 40px" @click="clickSecondLevelItem(item, index)">
                    <img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">
                    {{item.name}}
                </div>
                <div v-else>
                    <div v-if="item.secondLevel" style="border: 1px solid black; text-indent: 40px" class="secondLevelItem" @click="goToSecondItem(item)">
                        <img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">
                            {{item.name}}
                    </div>
                    <div v-else style="border: 1px solid red; text-indent: 60px" class="thirdLevelItem" @click="goToThirdItem(item)">
                        <img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">
                            {{item.name}}
                    </div>
                </div>
            </div>
            <el-collapse-transition>
                <my-tree-menus v-if="item.children && item.show" :list="thirdMenuList"/>
            </el-collapse-transition>
        </li>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: "myTreeMenus",
    data(){
        return{
            currentId: 1,
            activeIndex:0
        }
    },
    props:{
        list: Array
    },
    computed: {
        ...mapState('menus', ['firstIndex']),
        ...mapState('menus', ['secondIndex']),
        ...mapState('menus', ['thirdMenuList'])
    },
    methods:{
        goToSecondItem(item){
            console.log(52, this.firstIndex, item.id)
            this.$router.push('/'+ this.firstIndex + '/' + item.id)
        },
        goToThirdItem(item){
            console.log(56, this.firstIndex, this.secondIndex, item.id)
            this.$router.push('/'+ this.firstIndex + '/' + this.secondIndex + '/' + item.id)
        },
        clickSecondLevelItem(item, index){
            this.list.forEach(menuItem => {
                if(menuItem !== item){
                    menuItem.show = false
                }
            })
            this.currentId = item.id
            item.show = !item.show
            if(item.show === true){
                this.$store.commit('menus/SET_SECOND_ITEM_INDEX', JSON.parse(JSON.stringify(item.children[index].id)))
                this.$store.commit('menus/set_THIRD_MENU_LISTS', JSON.parse(JSON.stringify(item.children)))
            } else if (item.show === false){
                this.$store.commit('menus/set_THIRD_MENU_LISTS', JSON.parse(JSON.stringify([])))
            }
            console.log(73, 'clickSecondItem', this.thirdMenuList)
        },
        onLiClick(itemId, index){
            // let path = event.path || (event.composedPath && event.composedPath()) //兼容火狐和safari
            // path[1].style.display = "none";
            // this.activeIndex = index;
            this.$emit("change", {
                index: index,
                value: this.list[index]
            })
            console.log('32-itemClick:', index, this.list)
        }
    }
}
</script>

<style scoped>
</style>
