<template>
  <div class="register">
    <div>
      <el-row type="flex" justify="center">
        <el-col :xl="16" :md="18" :lg="18" :sm="24" :xs="24">
          <el-container class="register-container">
            <el-header>
              <!--         <div style="text-align: left" >-->
              <el-row type="flex" class="row-bg" justify="left">
                <el-col :xs="24" :md="16" :lg="10" :xl="8">
                  <a href="http://localhost:8081" class="link-a">返回</a>
                  <span>|</span>
                  <span>用户注册</span>
                </el-col>
              </el-row>
              <!--         </div>-->
            </el-header>

            <el-main style="height: 100%">

              <div style="background: white ">
                <el-row type="flex" justify="center" class="registerContent">

                  <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
                    <el-form  :model="registerForm" ref="registerForm">
                      <el-form-item prop="username">
                        <el-input type="text" name="username" v-model="registerForm.username" placeholder="请输入用户名"
                                clearable>
                          <template slot="prepend">账号&nbsp &nbsp &nbsp &nbsp</template>
                        </el-input>
                      </el-form-item>

                      <el-form-item prop="upassword">
                        <el-input type="password" name="password" v-model="registerForm.upassword" placeholder="请输入密码"
                                   clearable>
                          <template slot="prepend">密码&nbsp &nbsp &nbsp &nbsp</template>
                        </el-input>
                      </el-form-item>

                      <el-form-item prop="cpassword">
                        <el-input name="cassword" type="password" v-model="registerForm.cpassword" placeholder="确认密码"
                                   clearable>
                          <template slot="prepend">确认密码</template>
                        </el-input>
                        <el-button v-on:click="registerUser" type="primary" class="mtop"
                                   style="width: 80% ;margin-top: 10px">注册
                        </el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </div>

            </el-main>

            <el-footer>

            </el-footer>
          </el-container>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import store from "../../store/store";
    import * as types from '../../store/types'
    export default {
        name: "register",
      data(){
          return{
            registerForm: {
            username: 'tang',
            upassword: 'tang',
            cpassword: 'tang'
            },
          }
      },
      methods:{
          registerUser() {
            store.commit(types.LOGOUT)//测试退出登录
            store.commit(types.TITLE)
            this.$router.push('/home')
          }
      }
    }
</script>

<style scoped>
  .register-container {
    margin-top: 40px;
  }

  .registerContent {
    background-color: #ffffff;
    padding: 40px;
  }
  .register {
    height: 100%;
  }

  .link-a {
    text-decoration: none;
    color: rgb(36, 190, 254);
  }


  .mtop {
    height: 47px;
  }



</style>
