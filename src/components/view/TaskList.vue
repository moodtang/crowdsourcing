<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshList"><i class="el-icon-refresh"></i></el-button>
      </div>
      <div v-for="item in 4" :key="item" class="text item">
        <router-link :to="'/index'" class="router-link-active">
          {{'列表内容 ' + item }}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "task-list",
      methods:{
          refreshList(){
            this.$message("刷新列表");
          }
      }
    }
</script>

<style scoped>
  .router-link-active {
    text-decoration: none;
    color: #66b1ff
  }
</style>
