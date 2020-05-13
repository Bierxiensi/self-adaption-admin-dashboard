<template>
    <div>
        <div class="secondLevelItem" style="border: 0px solid red" v-for="(item,index) in list" :key="index">
            <div>
                <div class="thirdLevelItem"  style="border: 0px solid black"><img :src="item.image" alt="" style="vertical-align:middle; height: 1.5em;">{{item.name}}</div>
            </div>
            <my-tree-menus :list="item.children"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "myTreeMenus",
    props:{
        list: Array
    }
}
</script>

<style scoped>
</style>
