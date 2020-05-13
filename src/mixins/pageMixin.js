export default {
    created () {
        this._requestListData()
    },
    data (){
        return {
            currentPage: 0,
            total: 0,
            pageSize: 10,
            loadingRequest: false,
            isShowPagination: true
        }
    },
    watch: {
        currentPage() {
            this._safelyCallHook(this._pageChanged)
            this._requestListData()
        },
        pageSize() {
            this._safelyCallHook(this._pageSizeChanged)
            this._requestListData()
        }
    },
    methods:{
        headClass () {
            return 'background:#E5E9EF;color:#262626'
        },
        _safelyCallHook (fn) {
            fn && fn instanceof Function && fn()
        },
        async _safelyAwaitFn (fn) {
            fn && fn instanceof Function && await fn()
        },
        async _requestListData () {
            this.loadingRequest = true
            try {
                await this._safelyAwaitFn(this.requestListData)
            } finally {
                this.loadingRequest = false
            }
        },
        resetSearchForm () {
            const $pagination = this.$refs['el-pagination']
            if ($pagination) {
                $pagination.internalCurrentPage = 0
            }
            this.isShowPagination = false
            this.$nextTick(() => {
                this.isShowPagination = true
            })
            this.$refs['search-form'].resetFields()
            this.currentPage = 0
            this._requestListData()
        },
        handlePageChange (newPage) {
            this.currentPage = newPage - 1
        },
        handlePageSizeChange (newPageSize) {
            this.pageSize = newPageSize
        },
        _resetSearchForm () {},
        _pageChanged () {},
        _pageSizeChanged () {}
    }
}
