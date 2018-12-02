<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务名称</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text" @click="refreshList"><i class="el-icon-refresh"></i></el-button>-->
      <!--</div>-->
      <!--<div v-for="item in taskList" :key="item.id" class="text item">-->
        <!--<router-link :to="'/index'" class="router-link-active">-->
          <!--{{item.taskDescribe }}-->
        <!--</router-link>-->
      </div>
      <el-collapse :data="taskList" accordion >
        <div v-for="(item,index) in taskList">
          <el-collapse-item :title="item.missionName" :name="index">
            <el-row>任务id：{{item.id}}</el-row>
            <el-row>任务描述：{{item.taskDescribe}}</el-row>
            <el-row>任务等级：{{item.level}}</el-row>
            <el-row>发布者：{{item.publisher}}</el-row>
            <el-row>创建时间：{{item.createDate}}</el-row>
            <el-row>结束时间：{{item.endTime}}</el-row>
            <el-row>任务所需人数：{{item.peopleNum}}</el-row>
            <el-row>任务图片数量：{{item.picNum}}</el-row>
            <el-row>
              <el-button  plain @click="getNum(index)" type="text">
                接取任务
              </el-button>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </el-card>

    <el-dialog
      title="任务量"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入接取任务的数量</span>
      <el-input-number v-model="num" :min="taskSum/10" :max="taskSum" label="描述文字"></el-input-number>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="acceptMission">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import store from "../../store/store";
    export default {
      components: {ElRow},
      name: "task-list",
      mounted(){
        this.getList()
      },
      data(){
          return{
            taskList:null,
            dialogVisible: false,
            num:0,
            taskSum:100,
            missionId:0,
            missionName:null,
            currentPage:1

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
        },
        getNum(index){
            console.log(this.taskList[index])
            this.taskSum = parseInt( this.taskList[index].picNum);
            this.missionId=this.taskList[index].id;
            this.missionName = this.taskList[index].missionName;
            this.dialogVisible = true

        },
        acceptMission(){
          let markUserName = store.getters.getUsername;
          let markUserFlag = store.getters.getUserFlag;
          this.axios.post('http://127.0.0.1:8090/task/acceptTask', {
            username: markUserName,
            flag: markUserFlag,
            needNum:this.num,
            missionName:this.missionName,
            missionId:this.missionId
            // username:markName
          }).then(response => {
            this.$message({
              message:response.data,
            });
          })
         // console.log(markUserName+markUserFlag+this.num+this.missionId+this.missionName)
          this.dialogVisible=false;
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        sizeChange(val){
          console.log(`每页 ${val} 条`);
        },
        currentChange(val){
          console.log(`当前页: ${val}`);
        },
      }
    }
</script>

<style scoped>
  .router-link-active {
    text-decoration: none;
    color: #66b1ff
  }
</style>
