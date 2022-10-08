<!--  -->
<template>
  <div class="data_content fl">
    <div class="fasten_content fl t_btn6" style="cursor: pointer">
      <!--左上十字边框-->
      <div class="t_line_box">
        <i class="t_l_line"></i>
        <i class="l_t_line"></i>
      </div>
      <!--右上边框-->
      <div class="t_line_box">
        <i class="t_r_line"></i>
        <i class="r_t_line"></i>
      </div>
      <!--左下边框-->
      <div class="t_line_box">
        <i class="l_b_line"></i>
        <i class="b_l_line"></i>
      </div>
      <!--右下边框-->
      <div class="t_line_box">
        <i class="r_b_line"></i>
        <i class="b_r_line"></i>
      </div>
      <!-- 左上框标题 -->
      <div class="fasten_title">
        <img
          style="margin-left:-30px;margin-top:-6px"
          width="30px"
          height="30px"
          src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
          alt=""
        />
        制孔工艺表
      </div>
      <div class="fasten_table t_btn8">
        <el-table
          :data="tableData"
          height="860"
          style="width: 100%; height: 100%; margin-top: 2%"
          highlight-current-row:true
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
          :row-style="TableRowStyle"
        >
          <el-table-column prop="key" label="字段" style="width:30%">
          </el-table-column>
          <el-table-column prop="value" label="值" style="width:70%">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用

  data() {
    return {
      item: [],
      tableData: [
        { key: "ID", value: "" },
        { key: "孔号(孔在工艺加工中的编号)", value: "" },
        { key: "孔名称", value: "" },
        { key: "加工类型", value: "" },
        { key: "材料", value: "" },
        { key: "孔径(mm)", value: "" },
        { key: "锪窝深度(mm)", value: "" },
        { key: "锪窝主轴转速(r/min)", value: "" },
        { key: "锪窝进给速度(mm/min)", value: "" },
        { key: "制孔深度(mm)", value: "" },
        { key: "制孔主轴转速(r/min)", value: "" },
        { key: "制孔进给速度(mm/min)", value: "" },
        { key: "快进速度(mm/min)", value: "" },
        { key: "加工起始位置(mm)", value: "" },
        { key: "刀具编号", value: "" },
        { key: "工艺NC代码", value: "" }
      ]
    };
  },

  //方法集合
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 == 1) {
        return "background:rgba(160,188,231,0.2)";
      }
    },
    getdata() {
      this.$http({
        url: this.$http.adornUrl("hdym/holeprocess/getLast"),
        method: "get"
      }).then(({ data }) => {
        console.log("制孔工制孔工艺表艺要求表:", data);
        let k = 0;
        let item = data;
        for (const key in item) {
          this.tableData[k++].value = item[key];
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getdata();
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.el-table {
  font-size: 20px;
}
</style>
