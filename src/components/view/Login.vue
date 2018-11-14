<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16" :md="18" :lg="18" :sm="24" :xs="24">


            <div style="background: white ">
              <el-row type="flex" justify="center" >

                <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
                  <el-form :model="loginForm">
                    <el-form-item pstyle="margin-top: 20px">
                      <el-input v-model="loginForm.username" type="text" name="username"  placeholder="请输入用户名"
                                clearable>
                        <template slot="prepend">账号&nbsp &nbsp &nbsp &nbsp</template>
                      </el-input>
                    </el-form-item>

                    <el-form-item  style="margin-top: 20px">
                      <el-input v-model="loginForm.password" type="password" name="password" placeholder="请输入密码"
                                clearable>
                        <template slot="prepend">密码&nbsp &nbsp &nbsp &nbsp</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="用户身份" >
                      <el-row type="flex" justify="left">
                        <el-col style="margin-left: 25px" >
                          <el-select v-model="identity" placeholder="请选择用户身份" >
                            <el-option label="普通用户" value="c"></el-option>
                            <el-option label="专家" value="s"></el-option>
                          </el-select>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item >
                      <el-button v-on:click="loginUser" type="primary"
                                 style="width: 80% ;margin-top: 10px">登录
                      </el-button>
                    </el-form-item>
                  </el-form>
                  <router-link :to="'/register'" style="color: #66b1ff">注册
                  </router-link>
                </el-col>
              </el-row>
            </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import store from "../../store/store";
    import * as types from '../../store/types'
    export default {
        name: "login",
        data(){
          return{
            loginForm:{
              username:'tang',
              password:'tang'
            },
            identity:'c',
            token:'',
          }
        },
         methods:{
          loginUser(){
            store.commit(types.LOGIN,'tang');//测试token
            //console.log(store.getters.getToken);
            this.axios.post('http://127.0.0.1:8090/login',{
              'username':this.loginForm.username,
              'password':this.loginForm.password,
              'flag':this.identity,
            }).then(response=>{
              var message=response.data.msg;
              if(message == "success")
                this.$router.push('/home')
              else
                this.$message.error(message);
              //console.log(response.data.msg)
            })
           // this.$router.push('/home')

          }  ,
          linkRegister(){
             this.$router.push('/register')
           }
      }
    }
</script>

<style scoped>

</style>
