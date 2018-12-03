<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务名称</span>
      </div>
      <!--<el-collapse :data="taskList" accordion >-->
        <!--<div v-for="(item,index) in taskList">-->
          <!--<el-collapse-item :title="item.missionName" :name="index">-->
            <!--<el-row>任务id：{{item.id}}</el-row>-->
            <!--<el-row>任务描述：{{item.taskDescribe}}</el-row>-->
            <!--<el-row>任务等级：{{item.level}}</el-row>-->
            <!--<el-row>发布者：{{item.publisher}}</el-row>-->
            <!--<el-row>创建时间：{{item.createDate}}</el-row>-->
            <!--<el-row>结束时间：{{item.endTime}}</el-row>-->
            <!--<el-row>任务所需人数：{{item.peopleNum}}</el-row>-->
            <!--<el-row>任务图片数量：{{item.picNum}}</el-row>-->
            <!--<el-row>-->
              <!--<el-button  plain @click="getNum(index)" type="text">-->
                <!--接取任务-->
              <!--</el-button>-->
            <!--</el-row>-->
          <!--</el-collapse-item>-->
        <!--</div>-->
      <!--</el-collapse>-->
    <table-task :message="taskList">
    </table-task>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="totalNum">
      </el-pagination>
    </el-card>


  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import TableTask from "./TableTask";
    export default {
      components: {
        TableTask,
        ElRow},
      name: "task-list",
      mounted(){
        this.getTotal()
        this.getList()
      },
      data(){
          return{
            taskList:[],
            currentPage:0,
            totalNum:10
          }
      },
      methods:{
        getList(){
          this.axios.get('http://127.0.0.1:8090/task/list',{
            params:{
              start:this.currentPage*10-10,
              num:10
            }
          }).then(response=>{
            this.taskList=response.data.taskList
            //console.log(this.taskList);

          })
        },
        getTotal(){
          this.axios.get('http://127.0.0.1:8090/task/listTotal',{
          }).then(response=>{
            this.totalNum = response.data
           // console.log(this.totalNum);

          })
        },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getList()
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
