<template>
  <div >
  <el-table
    :data="message"
    border
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      fixed
      width="50">
    </el-table-column>
    <el-table-column

      prop="missionName"
      label="任务名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="发布者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="peopleNum"
      label="所需人数"
      width="120">
    </el-table-column>
    <el-table-column
      prop="picNum"
      label="图片数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="taskDescribe"
      label="任务描述"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" >接取任务</el-button>
      </template>
    </el-table-column>
  </el-table>
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
  import store from "../../store/store";
    export default {
        name: "table-task",
         props:{
          message:{
            type:Array
          }
      },
      mounted(){
      },
      data() {
        return {
          dialogVisible: false,
          num:0,
          taskSum:100,
          missionId:0,
          missionName:null,
          tableList:[]
        }
      },
      methods: {
        handleClick(row) {
          console.log(row);
          this.missionName = row.missionName
          this.missionId = row.id
          this.dialogVisible=true;
          // console.log(markUserName+markUserFlag+this.num+this.missionId+this.missionName)
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
          this.dialogVisible=false;
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }
      },



    }
</script>

<style scoped>

</style>
