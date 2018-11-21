<template>
  <div id="markPicture">
    <canvas id="myCanvas" width="1024" height="768" style="border:1px solid #d3d3d3;"  oncontextmenu="return false" @mousedown="getBegin" @mouseup="getEnd">
      您的浏览器不支持 HTML5 canvas 标签。
    </canvas>
    <el-button @click="commitMark" el-button type="primary" :disabled="btnDisabled">
      完成
    </el-button>
  </div>
</template>

<script>
  import store from "../../store/store";
    export default {
        name: "mark-picture",
      data(){
          return{
            imgSrc:"http://120.79.78.24:8088/11.png",
            imgSrc1:"http://120.79.78.24:8088/3.png",
            x:0,
            y:0,
            w:0,
            h:0,
            img:null,
            ctx:null,
            c:null,
            btnDisabled:true
          }
      },
      mounted() {
          //标记
          this.backgroundPicture(this.imgSrc);
      },
      methods:{
          backgroundPicture(picsrc){
           // console.log("hi")
            const  That=this
            That.c = document.getElementById("myCanvas");
            That.ctx = That.c.getContext("2d");
            That.ctx.clearRect(0,0,1024,768);
            That.img = new Image();
            That.img.src=picsrc;
            console.log(picsrc)
            That.img.onload = function () {
             That.ctx.drawImage(That.img, 0, 0);
             // // ctx.imageSmoothingEnabled = true;
             //   That.ctx.strokeRect(50,50,100,100)
             //  ctx.clearRect(500,500,100,600)
             //  // ctx.fillRect(400,400,200,600)
             //  ctx.moveTo(30, 96);
             //  ctx.lineTo(70, 66);
             //  ctx.lineTo(103, 76);
             //  ctx.lineTo(170, 15);
             //  ctx.stroke();
            }

          },
        getBegin(e){
            console.log("begin"+e.offsetX+":"+e.offsetY);
            this.x=e.offsetX;
            this.y=e.offsetY;
        },
        getEnd(e){
          console.log("end"+e.offsetX+":"+e.offsetY);
          const  That=this
          That.c = document.getElementById("myCanvas");
          That.ctx = That.c.getContext("2d");
          That.img = new Image();
          That.img.src=That.imgSrc;
            That.w=e.offsetX;
            That.h=e.offsetY;
          That.img.onload=function(){
            That.ctx.clearRect(0,0,1024,768)
            That.ctx.drawImage(That.img, 0, 0);
            console.log(That.x+" "+That.y+" "+That.w+" "+That.h)
            That.ctx.strokeStyle='rgb(255, 0, 0)'
            That.ctx.strokeRect(That.x,That.y,That.w-That.x,That.h-That.y)


          }
          this.btnDisabled=false;
        },
        commitMark(){
          const  That=this
          let markUserName = store.getters.getUsername;
          let markUserFlag = store.getters.getUserFlag;
          this.axios.post('http://127.0.0.1:8090/drawImages/addMarkInfo', {
            username: markUserName,
            flag: markUserFlag,
           dx: this.x,
           dy:this.y,
            dw:this.w - this.x,
            dh:this.h - this.y,
            imgx:1000,
            imgy:1000,
            imageInfo:"string",
            imageSrc:this.imgSrc,
            taskIdentify:1001
            // username:markName
          }).then(response => {
            console.log(response.data)
            That.imgSrc="http://120.79.78.24:8088/3.png";
            console.log(That.imgSrc)
            this.backgroundPicture(this.imgSrc)
          })
            //console.log(That.imgSrc)

        }
      }
      }
</script>

<style scoped>

</style>
