<!--  -->
<template>
  <div style="color:black">
    <table
      class="table1"
      style="width: 98%;margin-left:0.5%;border-collapse:collapse
"
    >
      <tr style="height:25px;background:rgba(78, 131, 211, 0.8);color:white">
        <td style="height:25px">预紧固件编号</td>
        <td style="height:25px">预紧固件牌号</td>
        <td style="height:25px">预紧固件直径</td>
        <td style="height:25px">预紧固件长度</td>
        <td style="height:25px">钉库位置</td>
      </tr>
      <tr style="height:25px">
        <td style="height:25px">
          <el-input v-model="fastenE.id"></el-input>
        </td>
        <td style="height:25px">
          <el-input v-model="fastenE.prefastenBrand"></el-input>
        </td>
        <td style="height:25px">
          <el-input v-model="fastenE.prefastenAperture"></el-input>
        </td>
        <td style="height:25px">
          <el-input v-model="fastenE.prefastenLength"></el-input>
        </td>
        <td style="height:25px">
          <el-input v-model="fastenE.storehosePos"></el-input>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      fastenE: {
        id: "",
        prefastenBrand: "",
        prefastenAperture: "",
        prefastenLength: "",
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
  width: 98%;
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
