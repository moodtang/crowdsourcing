<template>
  <div class="layout">
    <el-container style="height: 100%">
      <el-header class="el-head" >
        <span style="font-family: PingFang SC;font-size: larger;margin-top: 10px"  >
            基于并行计算技术的众包标注系统web端的设计与实现
            </span>
        <span style="float:right">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    用户<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">注销用户</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
        </span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="0" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
            <el-menu-item index="0"><i class="el-icon-star-on"></i>推荐</el-menu-item>
            <!--<el-menu-item index="1"><i class="el-icon-picture"></i>图片上传</el-menu-item>-->
            <el-menu-item index="2"><i class="el-icon-picture-outline"></i>数据管理</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-menu"></i>其它</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-menu"></i>任务列表</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-menu"></i>登录</el-menu-item>
            <el-menu-item index="6"><i class="el-icon-menu"></i>标记</el-menu-item>
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
    export default {
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
     background: rgb(230,230,230);
     width: 100%;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-head{
    background: rgb(180,180,180);
    height: 50px;
  }
</style>
