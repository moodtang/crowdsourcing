<template>
  <div class="index">
    <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
      <!--<el-tab-pane label="默认" name="zero">-->


      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="动物" name="first">动物</el-tab-pane>-->
      <!--<el-tab-pane label="植物" name="second">植物</el-tab-pane>-->
      <!--<el-tab-pane label="其它" name="third">其它</el-tab-pane>-->
      <el-row>
        <!--<el-carousel >-->
        <!--<el-carousel-item v-for="item in Img" :key="item">-->
        <!--<img  v-lazy= "item"/>-->
        <!--{{item}}-->
        <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <div class="block">
          <!--<div style="height: 500px">-->
            <!--<img v-lazy="Img[currentPage]" :key="Img[currentPage]" style=" height: 480px;max-width: 100%;" @click.right="onclickImg" oncontextmenu="return false">-->
          <!--</div>-->
          <img v-lazy="ImgSrc" :key="ImgSrc" style=" height: 480px;max-width: 100%;" @click.right="onclickImg" oncontextmenu="return false">
          <!--<img src='/images/3.png'>-->
          <el-row class="row_select" type="flex" justify="center">
            <el-col class="block" :xs="10" :sm="8" :md="8" :lg="6" :xl="6">
              <el-cascader
                expand-trigger="hover"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="3">
              <el-input v-model="input" placeholder="自定义：分类-类别-名称"></el-input>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <el-button type="primary" plain v-on:click="commitPictureInfo">确认提交</el-button>
            </el-col>
          </el-row>
          <!--分页-->
          <!--<el-pagination-->
            <!--@current-change="handleCurrentChange"-->
            <!--:current-page.sync="currentPage"-->
            <!--layout="prev, pager, next, jumper"-->
            <!--:total="1000">-->
          <!--</el-pagination>-->
        </div>

      </el-row>
    <!--</el-tabs>-->

  </div>
</template>

<script>
  import store from "../../store/store";
    export default {
        name: "index",
        data(){
          return{
            activeName: 'zero',
            ImgSrc:'http://120.79.78.24:8088/3.png',
            Img:[
              require("../../assets/logo.png"),
              require("../../assets/3.png"),
              require("../../assets/4.png"),
              require("../../assets/1.png"),
              require("../../assets/2.png"),
              'http://120.79.78.24:8088/3.png',
              'http://120.79.78.24:8088/11.png',
              'http://120.79.78.24:8088/12.png',
            ],
            options: [{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
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
                value: 'form',
                label: 'Form',
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
                value: 'data',
                label: 'Data',
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
            currentPage: 1,
            input: ''
          };

      },
      methods: {
        handleChange(value) {

          this.selectedOptions=value;
          console.log(this.selectedOptions);
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        handleCurrentChange(val) {
          this.currentPage=val;
          console.log(`当前页: ${val}`+this.Img[this.currentPage]);
        },
        commitPictureInfo(){
          let markName=store.getters.getUsername;
          console.log(markName);
          this.axios.post('http://127.0.0.1:8090/picture/markPicture',{
            username:"tang",
            flag:"c",
            pictureSrc:"string",
            pictureInfo:"string",
            // username:markName
          }).then(response=>{
            console.log(response.data)
          })
        },
        onclickImg(){
          this.$message('不允许操作图片');
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
  .row_select{
    padding-top:50px;
  }

</style>
