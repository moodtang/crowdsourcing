<template>
  <div class="index">
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in sensorImg" :key="item">
          <img class="carImg" v-lazy= "item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            sensorImg:[
              require("../../assets/1.jpg"),
              require("../../assets/2.jpg"),
              require("../../assets/1.png"),
              require("../../assets/2.png"),
            ]
          }

      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
