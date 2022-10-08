<!--  -->
<template>
  <div class="fasten">
    <div class="tree_content"></div>
    <div class="data_content fl">
      <div class="fasten_content2 fl t_btn6" style="cursor: pointer">
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
            width="30px"
            height="30px"
            src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
            alt=""
          />
          孔径测量表
        </div>
        <div class="fasten_table t_btn8">
          <el-table
            :data="tableData"
            height="600px"
            style="width: 100%; height: 100%; margin-top: 2%"
            @row-click="editUp"
            highlight-current-row:true
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
          >
            <el-table-column prop="id" label="测量编号"> </el-table-column>
            <el-table-column prop="standardAperture" label="标准直径">
            </el-table-column>
            <el-table-column prop="startVoltage" label="初始电压值">
            </el-table-column>
            <el-table-column prop="zeroPos" label="零点位置"> </el-table-column>
            <el-table-column prop="measureDepth" label="测量深度">
            </el-table-column>
            <el-table-column prop="measureSpeed" label="测量速度">
            </el-table-column>
            <el-table-column prop="measureLead" label="测量提前量">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="pagination" style="text-align: center">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="length"
          :key="length"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          next-click="nextPage"
          style="margin: 30px"
        >
        </el-pagination>

        <el-button
          type="primary"
          size="large"
          style="margin:10px;margin-top:0px"
          @click="sear()"
          >查询</el-button
        >
        <el-button
          type="success"
          size="large"
          style="margin:10px;margin-top:0px"
          @click="ad()"
          >新增</el-button
        >
        <el-button
          type="warning"
          size="large"
          style="margin:10px;margin-top:0px"
          @click="upda()"
          >修改</el-button
        >
        <el-button
          type="danger"
          size="large"
          style="margin:10px;margin-top:0px"
          @click="del()"
          >删除</el-button
        ><el-button
          type="primary"
          size="large"
          style="margin:10px;margin-top:0px"
          @click="fre()"
          >刷新</el-button
        >
        <searC
          ref="searc"
          style="margin: 0.2%"
          v-show="fun == 'sear' || fun == 'dele'"
        ></searC>
        <addC ref="addc" style="margin: 0.2%" v-show="fun == 'ad'"></addC>
        <upC ref="upC" style="margin: 0.2%" v-show="fun == 'upda'"></upC>
      </div>
    </div>
  </div>
</template>

<script>
import searC from "./holeMeasurementC/searC.vue";
import addC from "./holeMeasurementC/addC.vue";
import upC from "./holeMeasurementC/upC.vue";
import $ from "jquery";
import cookies from "vue-cookies";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { searC, addC, upC },
  data() {
    return {
      privilegeId: "C",
      fun: "",
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      allData: [],
      length: 0,
      currentPage: 1,
      user: { name: "name" }
    };
  },

  //方法集合
  methods: {
    turnSt(holeMeasurement) {
      let str = "测量编号:" + holeMeasurement.id;
      str += "标准直径:" + holeMeasurement.standardAperture;
      str += "初始电压值:" + holeMeasurement.startVoltage;
      str += "零点位置:" + holeMeasurement.zeroPos;
      str += "测量深度:" + holeMeasurement.measureDepth;
      str += "测量速度:" + holeMeasurement.measureSpeed;
      str += "测量提前量:" + holeMeasurement.measureLead;
      return str;
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 == 1) {
        return "background:rgba(160,188,231,0.2)";
      }
    },

    editUp(row) {
      console.log(row);

      if (this.fun == "upda") {
        this.$refs.upC.holeMeasurementE.id = row.id;
        this.$refs.upC.holeMeasurementE.standardAperture = row.standardAperture;
        this.$refs.upC.holeMeasurementE.startVoltage = row.startVoltage;
        this.$refs.upC.holeMeasurementE.zeroPos = row.zeroPos;
        this.$refs.upC.holeMeasurementE.measureDepth = row.measureDepth;
        this.$refs.upC.holeMeasurementE.measureSpeed = row.measureSpeed;
        this.$refs.upC.holeMeasurementE.measureLead = row.measureLead;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "孔径测量",
        username: cookies.get("user").username,
        opType: type,
        opContent: opContent,
        opResult: sucordef,
        logTime: date
      };
      console.log("x", x);
      this.$http({
        url: this.$http.adornUrl("hdympp/modifylog/save"),
        method: "post",
        data: this.$http.adornData(x, false)
      }).then(({ data }) => {
        console.log(data);
      });
    },
    getdata() {
      this.fun = "";

      this.$http({
        url: this.$http.adornUrl("hdympp/holemeasurement/list"),
        method: "get"
      }).then(({ data }) => {
        this.allData = data.page.list;
        this.length = this.allData.length;
        this.handleCurrentChange(1);
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      let m = Math.min(val * 10, this.length);
      this.tableData = this.allData.slice(val * 10 - 10, m);
      while (this.tableData.length < 10) {
        this.tableData.push({});
      }
    },
    sear() {
      if (this.fun == "sear") {
        this.$http({
          url: this.$http.adornUrl(
            "hdympp/holemeasurement/info/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log(data[0]);
          if (data[0] != null) {
            this.allData = data;
            this.length = this.allData.length;
            this.handleCurrentChange(1);
          }
        });
      } else {
        this.fun = "sear";
        this.$refs.searc.id = null;
      }
    },
    del() {
      if (cookies.get("user").privilegeId > this.privilegeId) {
        this.nonPri();
        return;
      }
      if (this.fun == "dele") {
        this.$http({
          url: this.$http.adornUrl(
            "hdympp/holemeasurement/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify("删除", this.turnSt(data.holeMeasurement), "成功");
          } else {
            this.modify("删除", this.turnSt(data.holeMeasurement), "失败");
          }
        });
      } else {
        this.fun = "dele";
        this.$refs.searc.id = null;
      }
    },
    ad() {
      if (cookies.get("user").privilegeId > this.privilegeId) {
        this.nonPri();
        return;
      }
      if (this.fun == "ad") {
        let holeMeasurement = {
          id: this.$refs.addc.holeMeasurementE.id,
          standardAperture: this.$refs.addc.holeMeasurementE.standardAperture,
          startVoltage: this.$refs.addc.holeMeasurementE.startVoltage,
          zeroPos: this.$refs.addc.holeMeasurementE.zeroPos,
          measureDepth: this.$refs.addc.holeMeasurementE.measureDepth,
          measureSpeed: this.$refs.addc.holeMeasurementE.measureSpeed,
          measureLead: this.$refs.addc.holeMeasurementE.measureLead
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/holemeasurement/save"),
          method: "post",
          data: this.$http.adornData(holeMeasurement, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(holeMeasurement), "成功");
          } else {
            this.modify("新增", this.turnSt(holeMeasurement), "失败");
          }
        });
      } else this.fun = "ad";
    },
    upda() {
      if (cookies.get("user").privilegeId > this.privilegeId) {
        this.nonPri();
        return;
      }
      if (this.fun == "upda") {
        let holeMeasurement = {
          id: this.$refs.upC.holeMeasurementE.id,
          standardAperture: this.$refs.upC.holeMeasurementE.standardAperture,
          startVoltage: this.$refs.upC.holeMeasurementE.startVoltage,
          zeroPos: this.$refs.upC.holeMeasurementE.zeroPos,
          measureDepth: this.$refs.upC.holeMeasurementE.measureDepth,
          measureSpeed: this.$refs.upC.holeMeasurementE.measureSpeed,
          measureLead: this.$refs.upC.holeMeasurementE.measureLead
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/holemeasurement/update"),
          method: "post",
          data: this.$http.adornData(holeMeasurement, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.holeMeasurement1),
              this.turnSt(data.holeMeasurement2)
            );
          } else {
            this.modify("修改", this.turnSt(data.holeMeasurement2), "失败");
          }
        });
      } else {
        this.fun = "upda";
        this.$refs.upC.options = [];
        for (let item of this.tableData) {
          if (item != null) {
            this.$refs.upC.options.push({ label: item.id });
          } else break;
        }
      }
    },
    fre() {
      this.fun = "";
      this.getdata();
    },
    nonPri() {
      this.$notify({
        title: "警告",
        message: "权限不够",
        type: "warning"
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
.el-table-column {
  width: 20%;
}
.button {
  height: 20px;
}
</style>
