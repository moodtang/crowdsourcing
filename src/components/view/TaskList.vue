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
          <el-collapse-item :title="item.taskDescribe" :name="index">
            <el-row>这里是任务的描述信息 ；</el-row>
            <el-row>{{item.id}}</el-row>
            <el-row>
              <el-button  plain @click="acceptTask(index)" type="text">
                接取任务
              </el-button>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
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
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

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
            taskSum:100
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
        acceptTask(index){
            console.log(this.taskList[index])
            this.dialogVisible = true
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
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
