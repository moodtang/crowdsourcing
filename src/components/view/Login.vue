<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xl="16" :md="18" :lg="18" :sm="24" :xs="24">


            <div style="background: white ">
              <el-row type="flex" justify="center" >

                <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="8">
                  <el-form>
                    <el-form-item prop="username" style="margin-top: 20px">
                      <el-input type="text" name="username"  placeholder="请输入用户名"
                                clearable>
                        <template slot="prepend">账号&nbsp &nbsp &nbsp &nbsp</template>
                      </el-input>
                    </el-form-item>

                    <el-form-item prop="upassword" style="margin-top: 20px">
                      <el-input type="password" name="password" placeholder="请输入密码"
                                clearable>
                        <template slot="prepend">密码&nbsp &nbsp &nbsp &nbsp</template>
                      </el-input>
                    </el-form-item>

                    <el-form-item >
                      <el-button v-on:click="" type="primary"
                                 style="width: 80% ;margin-top: 10px">登录
                      </el-button>
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>
            </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
