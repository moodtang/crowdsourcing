<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshList"><i class="el-icon-refresh"></i></el-button>
      </div>
      <div v-for="item in taskList" :key="item.id" class="text item">
        <router-link :to="'/index'" class="router-link-active">
          {{item.taskDescribe }}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "task-list",
      mounted(){
        this.getList()
      },
      data(){
          return{
            taskList:null
          }
      },
      methods:{
          refreshList(){
            this.getList();
            this.$message("刷新列表");
          },
        getList(){
          this.axios.get('http://127.0.0.1:8090/task/list').then(response=>{
            this.taskList=response.data.taskList
            console.log(this.taskList);

          })
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
