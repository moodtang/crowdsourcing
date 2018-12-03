<template>
  <div class="userInfo">
    hhhhhhhhhhhhhhhh
  </div>
</template>

<script>
  import store from "../../store/store";
    export default {
        name: "user-info",
      data(){
          return{
            missionList:[]
          }
      },
      mounted(){
          this.getList()
      },
      methods:{
        //获取用户任务列表
        getList(){
          let markUserName = store.getters.getUsername;
          this.axios.get('http://127.0.0.1:8090/task/userList',{params: {"username":markUserName}}).then(response=>{
            this.missionList=response.data.userTaskList
            if(this.missionList.length != 0){
               console.log(this.missionList)
            }

          })
        },
      }
    }
</script>

<style scoped>

</style>
