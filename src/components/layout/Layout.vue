<template>
  <div class="layout">
    <el-container>
      <el-header>
        <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
                网站首页
            </span>
        <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
        </span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-message"></i>动物</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i>植物</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>其它</el-menu-item>
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
    export default {
        name: "layout",
      data() {
        return {
          searchCriteria: '',
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          switch(key){
            case '1':
              this.$router.push('/hello');
              break;
            case '2':
              this.$router.push('/hello')
              break;
            case '3':
              this.$router.push('/hello')
              break;
          }
        },
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
</style>
