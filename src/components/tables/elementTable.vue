<template>
    <div class="el-table-pagination-shadow">
        <el-table
                :data="tableData"
                border v-loading="loadingRequest"
                element-loading-text="拼命加载中"
                :header-cell-style="headClass">
            <el-table-column label="一列" prop="column1"/>
            <el-table-column label="二列" prop="column2"/>
            <el-table-column label="三列" prop="column3"/>
            <el-table-column label="四列" prop="column4"/>
            <el-table-column label="五列" prop="column5"/>
            <el-table-column label="六列" prop="column6"/>
            <el-table-column label="七列" prop="column7"/>
        </el-table>
        <el-pagination
                class="el-pagination"
                :total="total" v-if="isShowPagination"
                @size-change="handlePageSizeChange"
                @current-change="handlePageChange"
                background layout="sizes, prev, pager, next ,total, jumper">
        </el-pagination>
    </div>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
export default {
    name: "elementTable",
    mixins: [ pageMixin ],
    data(){
        return{
            tableData:[]
        }
    }
}
</script>

<style scoped>

</style>
