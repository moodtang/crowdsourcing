<template>
    <div class="managerData">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "manager-data",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: 'image1',
            address: 'imgsrc1'
          }, {
            date: '2016-05-04',
            name: 'image2',
            address: 'imgsrc2'
          }, {
            date: '2016-05-01',
            name: 'image2',
            address: 'imgsrc1'
          }, {
            date: '2016-05-03',
            name: 'iamge',
            address: 'imgsrc4'
          }]
        }
      }
    }
</script>

<style scoped>

</style>
