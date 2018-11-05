<template>
  <div class="index">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="默认" name="zero">


      </el-tab-pane>
      <el-tab-pane label="动物" name="first">动物</el-tab-pane>
      <el-tab-pane label="植物" name="second">植物</el-tab-pane>
      <el-tab-pane label="其它" name="third">其它</el-tab-pane>
      <el-row>
        <!--<el-carousel >-->
        <!--<el-carousel-item v-for="item in Img" :key="item">-->
        <!--<img  v-lazy= "item"/>-->
        <!--{{item}}-->
        <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <div class="block">
          <div style="height: 500px">
            <img v-lazy="Img[currentPage]" :key="Img[currentPage]" style=" height: 480px;max-width: 100%;">
          </div>
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
              <el-button type="primary" plain >确认提交</el-button>
            </el-col>
          </el-row>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>

      </el-row>
    </el-tabs>

  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            activeName: 'zero',
            Img:[
              require("../../assets/1.jpg"),
              require("../../assets/1.jpg"),
              require("../../assets/2.jpg"),
              require("../../assets/1.png"),
              require("../../assets/2.png"),
             // require("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541157532624&di=94ae3512874789aa72978e607ada2eed&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Freg3T0Fqiaxickl77Nj5DPHicEzCFBOGsduRwC8Qz5pQGnibGUkMPD2NzDlX0icAXSDDj5JwL7z7DkQUmRriaBLVkDhA%2F640%3Fwx_fmt%3Djpeg"),
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
