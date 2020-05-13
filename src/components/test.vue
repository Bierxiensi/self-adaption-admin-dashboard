<template>
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
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
// import myTable from "@/components/tables/myTable";
export default {
    name: "test",
    // components: { myTable },
    mixins: [ pageMixin ],
    data(){
        return{
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
