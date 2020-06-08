<template>
    <div>
        <div style="display: grid; grid-template-columns: 64% 34%; grid-gap: 2%">
            <div class="el-table-pagination-shadow">
                <el-table
                        :data="tableData"
                        element-loading-text="拼命加载中">
                    <el-table-column label="一列" prop="column1"/>
                    <el-table-column label="二列" prop="column2"/>
                    <el-table-column label="三列" prop="column3"/>
                    <el-table-column label="四列" prop="column4"/>
                    <el-table-column label="五列" prop="column5"/>
                    <el-table-column label="六列" prop="column6"/>
                    <el-table-column label="七列" prop="column7"/>
                </el-table>
            </div>
            <div class="el-table-pagination-shadow">
                <el-table
                        :data="tableData"
                        element-loading-text="拼命加载中">
                    <el-table-column label="一列" prop="column1"/>
                    <el-table-column label="二列" prop="column2"/>
                    <el-table-column label="三列" prop="column3"/>
                    <el-table-column label="四列" prop="column4"/>
                </el-table>
                <!--<my-table :data="tableData" :head="tableHead"/>-->
            </div>
        </div>

        <v-button type="primary" @click="collapsed = !collapsed" style="margin-bottom: 16px">
            <v-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
        </v-button>
        <v-switch v-model="mode" true-value="vertical" false-value="inline"/>
        <div style="display: flex; justify-content: space-around">
            <div style="width:240px">
                <v-menu :mode="mode" :data="collapsedMenuData" :inline-collapsed="collapsed"/>
            </div>
            <div style="width: 200px; border: 1px solid red">
                <menu1 :data="collapsedMenuData"/>
            </div>
        </div>
        <my-region/>
        <!--collapsedMenuData menuLists-->
    </div>
</template>

<script>
import myRegion from "@/components/region/myRegion";
import pageMixin from "@/mixins/pageMixin";
// import myTable from "@/components/tables/myTable";
import menu1 from "@/myComponents/menu1";
import { mapState } from 'vuex'
export default {
    name: "test",
    components: { menu1, myRegion },
    // components: { myTable },
    mixins: [ pageMixin ],
    computed: {
        ...mapState('menus', ['menuLists'])
    },
    data(){
        return{
            collapsedMenuData: [{
                name: '选项1',
                icon: 'mail',
            }, {
                name: '选项2',
                icon: 'appstore',
            }, {
                name: '选项3',
                icon: 'lock',
            }, {
                name: '导航1',
                icon: 'setting',
                children: [{
                    name: "选项4"
                },{
                    name: "选项5"
                },{
                    name: "选项6"
                },{
                    name: "选项7"
                }]
            }, {
                name: '导航2',
                icon: 'desktop',
                children: [{
                    name: "选项8"
                },{
                    name: "选项9"
                },{
                    name: "选项10"
                }]
            }],
            collapsed: true,
            mode: 'inline',
            tableHead: [
                'column1',
                'column2',
                'column3',
                'column4',
                'column5',
                'column6',
                'column7'
            ],
            tableData:[{
                column1: 'column1',
                column2: 2,
                column3: 3,
                column4: 4,
                column5: 'column5',
                column6: 6,
                column7: 7
            },{
                column1: 'column1',
                column2: 2,
                column3: 3,
                column4: 4,
                column5: 'column5',
                column6: 6,
                column7: 7
            },{
                column1: 'column1',
                column2: 2,
                column3: 3,
                column4: 4,
                column5: 'column5',
                column6: 6,
                column7: 7
            }]
        }
    }
}
</script>

<style scoped>
</style>
