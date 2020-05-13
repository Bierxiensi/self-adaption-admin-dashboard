<template>
<div>
    <div class="main_layout_menuItem">
        <li v-for="(item,index) in menuLists" :key="index">
            <span :class="{'active':currentId === item.id}" style="border: 0px solid blue">
                <i class="folderIcon" v-if="item.children">
                    <el-icon class="el-icon-arrow-down" v-if="item.show"/>
                    <el-icon class="el-icon-arrow-right" v-else/>
                </i>
                <div class="firstLevelItem ripple" @click="clickFirstLevelItem(item, index)">
                   <div><img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">{{ item.name }}</div>
                </div>
                 <el-collapse-transition>
                    <!--:select="select"  && (currentId=== item.id) :currentId="item.id" style="border: 1px solid red" -->
                    <my-tree-menus v-if="item.children && item.show" :list="showMenuLists"/>
                 </el-collapse-transition>
            </span>
        </li>
    </div>
</div>
</template>

<script>
import myTreeMenus from "@/components/tree/myTreeMenus";
export default {
    name: "myMenu",
    components: { myTreeMenus },
    props:{
        menuLists: Array
    },
    data(){
        return{
            showMenuLists: [],
            currentId: 1
        }
    },
    methods:{
        clickFirstLevelItem(item){
            this.menuLists.forEach(menuItem => {
                if(menuItem !== item){
                    menuItem.show = false
                }
            })
            this.currentId = item.id
            item.show = !item.show
            if(item.show === true){
                this.showMenuLists = item.children
            } else if (item.show === false){
                this.showMenuLists = []
            }
            this.$store.commit('menus/SET_MENU_LISTS', JSON.parse(JSON.stringify(this.menuLists)))
            // window.document.documentElement.setAttribute( "main_layout_color", mainLayoutColor );
        }
    }
}
</script>

<style lang="sass" scoped>
.list-item
    display: inline-block
    margin-right: 10px
.list-enter-active .list-leave-active
    transition: all 10s
.list-enter .list-leave-to
    opacity: 0
    transform: translateY(30px)

.fade-enter-active .fade-leave-active
    transition: opacity 0.5s
.fade-enter .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    opacity: 0
</style>
<!-- 遍历 router 菜单数据 -->
<!--<div v-for="level1Item in menuLists" :key="level1Item.id">-->
<!--    &lt;!&ndash;对于没有children子菜单的item&ndash;&gt;-->
<!--    <nav v-if="!level1Item.children" class="level1Item"><a>{{level1Item.name}}</a></nav>-->
<!--    &lt;!&ndash;对于有children子菜单的item&ndash;&gt;-->
<!--    <nav v-else class="level1Item">-->
<!--        <div v-show="collapseType === 0">-->
<!--            <div @click="showLevel2Item" style="border: 1px solid black">{{level1Item.name}}</div>-->
<!--            <ul v-for="level2Item in level1Item.children" :key="level2Item.id" v-show="isShowLevel2Item">-->
<!--                <div v-if="!level2Item.children" class="level2Item">{{level2Item.name}}</div>-->
<!--                <nav v-else @click="showLevel3Item">-->
<!--                    <div style="border: 1px solid black">{{level2Item.name}}</div>-->
<!--                </nav>-->
<!--                <transition-group name="list" tag="p">-->
<!--                    <div v-for="level3Item in level2Item.children" :key="level3Item.id" v-show="isShowLevel3Item">{{level3Item.name}}</div>-->
<!--                </transition-group>-->
<!--            </ul>-->
<!--        </div>-->
<!--        <div v-show="collapseType === 1">-->
<!--            <div @click="partShowLevel2Item(level1Item.name)" style="border: 1px solid black">{{level1Item.name}}</div>-->
<!--            <div v-for="level2Item in partLevel2MenuLists" :key="level2Item.id" v-show="isShowLevel2Item">-->
<!--                <div v-if="!level2Item.children" class="level2Item">{{level2Item.name}}</div>-->
<!--                <nav v-else @click="showLevel3Item">-->
<!--                    <div style="border: 1px solid black">{{level2Item.name}}</div>-->
<!--                </nav>-->
<!--            </div>-->
<!--        </div>-->
<!--    </nav>-->
<!--</div>-->
<!--,-->
<!--partShowLevel2Item (level1ItemName) {-->
<!--this.showLevel2Item()-->
<!--this.menuLists.forEach(item => {-->
<!--if(item.name === level1ItemName){-->
<!--this.partLevel2MenuLists = item.children-->
<!--}-->
<!--})-->
<!--console.log(this.partLevel2MenuLists)-->
<!--},-->
<!--showLevel2Item(){-->
<!--this.isShowLevel2Item = !this.isShowLevel2Item-->
<!--},-->
<!--showLevel3Item(){-->
<!--this.isShowLevel3Item = !this.isShowLevel3Item-->
<!--}-->
<!--collapseType: 1,-->
<!--partLevel2MenuLists: [],-->
<!--isShowLevel2Item: true,-->
<!--isShowLevel3Item: true-->
