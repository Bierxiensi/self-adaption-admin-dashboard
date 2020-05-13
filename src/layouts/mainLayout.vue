<template>
   <div class="main_layout">
       <div class="main_layout_header">
           <my-header1 ref="my-header1"/>
       </div>
       <div class="main_layout_body">
           <div class="main_layout_menu">
               <my-menu1 ref="my-menu1"/>
               <div class="app-sidebar-bg opacity-06" style="border: 0px solid red"></div>
           </div>
           <div class="main_layout_main">
               <transition name="fade">
                   <router-view/>
               </transition>
           </div>
           <slide-bar ref="slide-bar"/>
       </div>
   </div>
</template>

<script>
import slideBar from "@/components/settings/slideBar";
import myHeader1 from "@/components/headers/myHeader1";
import myMenu1 from "@/components/menus/myMenu1";
export default {
    name: "mainLayout",
    components:{ myHeader1, myMenu1, slideBar },
    data() {
         return {}
    },
    methods:{}
}
</script>

<style scoped>
.main_layout_menu{
    position: relative;
    z-index: 0;
}
.app-sidebar-bg{
    opacity: .06 !important;
    position: absolute;
    left: 0;
    top: 0;
    height: calc(100vh - 55px);
    width: 100%;
    background-size: cover;
    z-index: -1;
    background-image: url("../assets/city.jpg")
}
.opacity-06{
    opacity: 0.05
}
</style>
