<template>
    <div>
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
        <div>
            <el-button @click="initTree()">初始化</el-button>
            <el-button @click="initTree()">入栈</el-button>
            <el-button @click="reset()">重置</el-button>
        </div>
    </div>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
export default {
    name: "elementTable",
    mixins: [ pageMixin ],
    data(){
        return{
            count: 0,
            list: [1, 3, 2],
            biNode: {
                lChild: null,
                rChild: null,
                data: null
            },
            root: null,
            tableData:[]
        }
    },
    methods:{
        TreeNode(val) {
            this.biNode.data = val
            this.biNode.lChild = null
            this.biNode.rChild = null
        },
        // push () {
        //   this.count = this.count + 1
        //   this.initTree(this.list[this.count])
        // },
        initTree() {
            console.log(62, this.root)
            if(this.list.length < 1){
                console.log('初始化数据为空')
                return
            }
            this.TreeNode(this.list[0])
            if (this.root === null) {
                // 此处需进行深拷贝赋值
                this.root = JSON.parse(JSON.stringify(this.biNode))
                console.log('空树，初始化根节点并返回, 根节点值为', this.root.data)
            } else {
                console.log('非空树：根节点为:', this.root, '开始构造二叉树')
                let current = this.root
                let parent = null
                console.log(75, current, this.root)
                while (this.count < this.list.length) {
                    this.count ++
                    let val = this.list[this.count]
                    this.TreeNode(val)
                    parent = current
                    if (val < current.data) {
                        current = current.lChild
                        if (current === null) {
                            parent.lChild = JSON.parse(JSON.stringify(this.biNode))
                            break
                        }
                    } else {
                        current = current.rChild
                        if (current === null) {
                            parent.rChild = JSON.parse(JSON.stringify(this.biNode))
                            break
                        }
                    }
                }
            }
            console.log(97, this.root)
        },
        reset(){
            this.count = 0
            this.root = null
            this.biNode = {
                lChild: null,
                rChild: null,
                data: null
            }
        }
    }
}
</script>

<style scoped>

</style>
