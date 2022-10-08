<!--  -->
<template>
  <div style="color:black; overflow:auto;overflow-y:hidden;height:85px">
    <table
      class="table1"
      style="width: 98%;margin-left:0.5%;border-collapse:collapse
"
    >
      <tbody style="border-collapse:collapse ">
        <tr style="height:25px;background:rgba(78, 131, 211, 0.8);color:white">
          <td style="width:200px;height:25px">工艺编号</td>
          <td style="width:200px;height:25px">描笔编号</td>
          <td style="width:200px;height:25px">笔尖距离</td>
          <td style="width:200px;height:25px">描点深度</td>
          <td style="width:200px;height:25px">主轴转速</td>
          <td style="width:200px;height:25px">进给速度</td>
          <td style="width:200px;height:25px">压脚压力</td>
          <td style="width:200px;height:25px">快进速度</td>
          <td style="width:200px;height:25px">描点起始位置</td>
          <td style="width:200px;height:25px">刀库位置</td>
        </tr>
        <tr style="height:25px">
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.id"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.tracerPenId"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.penNoseDistance"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.pointDepth"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.shaftRotaion"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.shaftFeedRate"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.presserForce"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.rapidFeedRate"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.startPos"></el-input>
          </td>
          <td style="width:200px;height:25px">
            <el-input v-model="pointTracingProcessE.storehosePos"></el-input>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      pointTracingProcessE: {
        id: "",
        tracerPenId: "",
        penNoseDistance: "",
        pointDepth: "",
        shaftRotaion: "",
        shaftFeedRate: "",
        presserForce: "",
        rapidFeedRate: "",
        startPos: "",
        storehosePos: ""
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.table1 {
  margin-left: 0.5%;
  border-collapse: collapse;
  background: #ccc;
  margin: 10px auto;
  table-layout: fixed;
  border-collapse: collapse; /*border-collapse:collapse合并内外边距(去除表格单元格默认的2个像素内外边距*/
}

.el-input {
  width: 100%;
  height: 100%;
}
.el-input__inner {
  border: none;
  height: 100%;
}
</style>
