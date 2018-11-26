<template>
  <div id="helloWorld">
      <el-row type="flex" justify="center">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <el-button type="primary" icon="el-icon-edit-outline" plain @click="rectangle"></el-button>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <el-button type="primary" icon="el-icon-edit" plain @click="outline"></el-button>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <el-button @click="commitMark" :disabled="btnDisabled" type="primary" >
          提交
        </el-button>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          已用时间：{{this.timeData}}秒
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <canvas id="myCanvas" width="1024" height="768" style="border:1px solid #d3d3d3;"  oncontextmenu="return false" @mousedown="getBegin" @mouseup="getEnd" @mousemove="draw">
          您的浏览器不支持 HTML5 canvas 标签。
        </canvas>
      </el-row>
      <el-dialog
        title="属性"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-row  style="width: 80%">
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
        </el-row>
        <el-row style="width: 78%;margin-top:10px">
          <el-input v-model="inputData" placeholder="自定义"></el-input>
        </el-row>
        <!--<el-row type="flex" justify="center"style="margin-top: 10px" >-->
          <!--<el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1">-->
            <!--<el-button type="primary" plain v-on:click="commitPictureInfo">确认提交</el-button>-->
          <!--</el-col>-->
          <!--<el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" style="margin-left: 100px">-->
            <!--<el-button type="primary" plain v-on:click="getPicture">不确定</el-button>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <el-row style="margin-top: 10px" type="flex" justify="left" >
          <span>把握程度：</span>
            <el-rate
            v-model="level"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']" >
          </el-rate>
        </el-row>


        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelLabel">取 消</el-button>
          <el-button type="primary" @click="commitLabel">确 定</el-button>
        </span>
      </el-dialog>

  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    name: "HelloWorld",
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
        btnDisabled:true,
        flag:false,
        num:0,
        way:1,
        listJson:[],
        dialogVisible: false,
        level:null,
        texts:["没把握","yiabn","u","f","k"],
        options: [{
          value: '生态系统',
          label: '生态系统',
          children: [{
            value: '无机环境',
            label: '无机环境',
            children: [{
              value: '阳光',
              label: '阳光'
            }, {
              value: '无机盐',
              label: '无机盐'
            }, {
              value: '水',
              label: '水'
            }, {
              value: '空气',
              label: '空气'
            }]
          }, {
            value: '生物群落',
            label: '生物群落',
            children: [{
              value: '生产者',
              label: '生产者'
            }, {
              value: '消费者',
              label: '消费者'
            }, {
              value: '分解者',
              label: '分解者'
            }]
          }]
        }, {
          value: '二维平面空间',
          label: '二维平面空间',
          children: [{
            value: '动画',
            label: '动画',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: '漫画',
            label: '漫画',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: '游戏',
            label: '游戏',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
         selectedOptions: [],
          inputData: '其它',
          commitData:[],
          timeData:0

      }
    },
    beforeMount(){
      setInterval(this.getTime,1000)
    },
    mounted() {
      //标记
      this.backgroundPicture(this.imgSrc);
    },
    destroyed(){
      this.commitTime()
    },
    methods:{
      //初始化画布
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
        }
        That.ctx.strokeStyle = 'rgb(255, 0, 0)'
      },
      //鼠标按住
      getBegin(e){
        this.num=0
        this.listJson=[]
        this.ctx.font = '24px serif';
        this.flag=true
        console.log("begin"+e.offsetX+":"+e.offsetY);
        this.x=e.offsetX;
        this.y=e.offsetY;
      },
      //鼠标松开
      getEnd(e){
        //  console.log("end"+e.offsetX+":"+e.offsetY);
        const  That=this
        if(this.way == 1) {
          That.w = e.offsetX;
          That.h = e.offsetY;
          That.ctx.strokeRect(this.x, this.y,this.w - this.x, this.h - this.y)
          console.log(That.x + " " + That.y + " " + That.w + " " + That.h)

        }
        if(this.way == 2){
          this.ctx.beginPath();
          this.w = e.offsetX;
          this.h = e.offsetY;
          this.ctx.moveTo(this.w, this.h);
          this.ctx.lineTo(this.x, this.y);
          this.ctx.stroke();
        }
        // }
        this.dialogVisible=true
        this.flag=false
        console.log(That.way)
        console.log(this.listJson)
      },
      //鼠标移动
      draw(e){
        if(this.flag && this.way == 2){
            if(this.num == 0) {
              this.w = this.x
              this.h = this.y
            }
            let data= {
               "x":this.w,
               "y":this.h
            }
            this.listJson.push(data);

            this.ctx.beginPath();
            this.ctx.moveTo(this.w, this.h);
            this.w = e.offsetX;
            this.h = e.offsetY;
            this.ctx.lineTo(this.w, this.h);
            this.ctx.stroke();
            this.num++;
        }
      },
      //关闭dialog
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.backgroundPicture(this.imgSrc)
          })
          .catch(_ => {});
      },
      //级联选择赋值
      handleChange(value) {

        this.selectedOptions = value;
        let length=this.selectedOptions.length;
        this.inputData=this.selectedOptions[length-1].toString();

      },
      //dialog 确认
      commitLabel(){
        this.ctx.fillText(this.inputData, this.x, this.y);
        //画矩形框推入数据
        if(this.way == 1){
          let tmp=this.x+","+this.y+","+this.w+","+this.h;
          let data ={
           "label":this.inputData,
            "xywh":tmp,
            "level":this.level
          }
          this.commitData.push(data)
        }
        //描边推入数据
        if(this.way == 2){
          let data ={
            "label":this.inputData,
            "coordinate":this.listJson,
            "level":this.level
          }
          this.commitData.push(data)
        }
        //隐藏弹出框
        this.dialogVisible = false
        //按钮不可使用
        this.btnDisabled=false;
      },
      //dialog 取消
      cancelLabel(){
        this.backgroundPicture(this.imgSrc)
        this.btnDisabled=true;
        this.dialogVisible = false
      },
      //选择矩形选框
      rectangle(){
        this.way=1
        this.commitData=[]
        this.backgroundPicture(this.imgSrc)
      },
      //选择描边
      outline(){
        this.way=2
        this.commitData=[]
        this.backgroundPicture(this.imgSrc)
      },
      //提交数据
      commitMark(){
        if(this.way == 1){
          this.axios.post('http://127.0.0.1:8090/drawImages/addMarkData',{
            'username':"tang",
            'imageSrc':"http://120.79.78.24:8088/11.png",
            'flag':'c',
            'markRectangleData':this.commitData,
            'taskId':1000,

          }).then(response=>{

          })
        }
        if(this.way == 2){
          this.axios.post('http://127.0.0.1:8090/drawImages/addMarkData',{
            'username':"tang",
            'imageSrc':"http://120.79.78.24:8088/11.png",
            'flag':'c',
            'markOutlineData':this.commitData,
            'taskId':1000,

          }).then(response=>{

          })
        }
        console.log(this.commitData);
        this.commitData=[]
        this.backgroundPicture(this.imgSrc)

      },
      //定时
      getTime(){
        this.timeData++;
      },
      //提交本次用时
      commitTime(){
        console.log("this is beforeDestory")
      }
    }
  }
</script>

<style scoped>

</style>
