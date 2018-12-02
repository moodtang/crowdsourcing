<template>
  <div class="layout">
    <el-container style="height: 100%">
      <el-header class="el-head" >
        <el-row class="el-log">
          <el-col  :span="4" >
            <div>
          <svg-icon icon-class="home" />
            众包标注系统
            </div>
          </el-col >
          <el-col :offset="18" :span="2" >
            <div>
                          <el-dropdown trigger="click">
                            <span class="el-dropdown-link" style="color:white">
                              <svg-icon icon-class="user">
                              </svg-icon>
                              <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item>个人信息</el-dropdown-item>
                              <el-dropdown-item @click.native="logout">注销用户</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
            </div>
          </el-col>
        </el-row>

      </el-header>
      <el-container>
        <el-aside class="el-left" width="200px">
          <el-menu default-active="0" class="el-menu-vertical-demo" style="min-height:1000px" @select="handleSelect">
            <el-menu-item index="0"><i class="el-icon-star-on"></i>推荐</el-menu-item>
            <!--<el-menu-item index="1"><i class="el-icon-picture"></i>图片上传</el-menu-item>-->
     <!--       <el-menu-item index="2"><i class="el-icon-picture-outline"></i>数据管理</el-menu-item>-->
            <el-menu-item index="3"><i class="el-icon-menu"></i>标记</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-tickets"></i>任务列表</el-menu-item>
            <!--<el-menu-item index="4"><i class="el-icon-menu"></i>登录</el-menu-item>-->
            <!--<el-menu-item index="6"><i class="el-icon-menu"></i>标记</el-menu-item>-->
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import store from "../../store/store";
  import * as types from '../../store/types'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCard from "element-ui/packages/card/src/main";
    export default {
      components: {
        ElCard,
        ElRow},
      name: "layout",
      data() {
        return {
          searchCriteria: '',
        };
      },
      mounted:function(){
        this.$router.push('/index');
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          switch(key){
            case '0':
              this.$router.push('/index');
              break;
            case '1':
              this.$router.push('/managerImg');
              break;
            case '2':
              this.$router.push('/managerData')
              break;
            case '3':
              this.$router.push('/hello')
              break;
            case '4':
              this.$router.push('/login')
              break;
            case '5':
              this.$router.push('/taskList')
              break;
            case '6':
              this.$router.push('/markPicture')
              break;
          }
        },
        logout:function () {
          console.log("logout")
          store.commit(types.LOGOUT)//退出登录
          this.$router.push('/home')
         // store.commit(types.TITLE)
        }
      }

    }
</script>

<style scoped>
  .layout{
     width: 100%;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 100%;
    background: rgba(81, 227, 161, 0.2);
  }
  .el-head{
    background: rgba(81, 227, 161, 0.51);
    height: 30px;
  }
  .el-left{
    height: 100%;
  }
  .el-log{
    margin-top: 20px;
  }
</style>
