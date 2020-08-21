<template>
  <el-pagination
    align="center"
    background
    layout="sizes,prev, pager, next,jumper"
    :total="total"
    :current-page.sync="currentPage"
    :page-size.sync="pageSize"
    :page-sizes="[5, 10, 30]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },

  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.$emit('pageChange', this.page)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.$emit('pageChange', this.page)
    }
  }
}
</script>

<style lang="scss">
  .el-pagination {
    padding: 15px 5px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #BE392A;
  }
  .el-select-dropdown__item.selected {
    color: #BE392A;
  }
</style>
