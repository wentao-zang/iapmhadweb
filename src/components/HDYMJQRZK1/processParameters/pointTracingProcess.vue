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
            src="@/assets/images/HDYMJQRZK/工艺参数/描点.png"
            alt=""
          />
          描点工艺参数表
        </div>
        <div class="fasten_table t_btn8">
          <el-table
            :data="tableData"
            height="600"
            style="width: 100%; height: 100%; margin-top: 2%"
            @row-click="editUp"
            highlight-current-row:true
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
          >
            <el-table-column prop="id" label="工艺编号" width="200px">
            </el-table-column>
            <el-table-column prop="tracerPenId" label="描笔编号" width="200px">
            </el-table-column>
            <el-table-column
              prop="penNoseDistance"
              label="笔尖距离"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="pointDepth" label="描点深度" width="200px">
            </el-table-column>
            <el-table-column prop="shaftRotaion" label="主轴转速" width="200px">
            </el-table-column>
            <el-table-column
              prop="shaftFeedRate"
              label="进给速度"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="presserForce" label="压脚压力" width="200px">
            </el-table-column>
            <el-table-column
              prop="rapidFeedRate"
              label="快进速度"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="startPos" label="描点起始位置" width="200px">
            </el-table-column>
            <el-table-column prop="storehosePos" label="刀库位置" width="200px">
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
import searC from "./pointTracingProcessC/searC.vue";
import addC from "./pointTracingProcessC/addC.vue";
import upC from "./pointTracingProcessC/upC.vue";
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
    turnSt(pointTracingProcess) {
      let str = "工艺编号:" + pointTracingProcess.id;
      str += ";描笔编号:" + pointTracingProcess.tracerPenId;
      str += ";笔尖距离:" + pointTracingProcess.penNoseDistance;
      str += ";描点深度:" + pointTracingProcess.pointDepth;
      str += ";主轴转速:" + pointTracingProcess.shaftRotaion;
      str += ";进给速度:" + pointTracingProcess.shaftFeedRate;
      str += ";压脚压力:" + pointTracingProcess.presserForce;
      str += ";快进速度:" + pointTracingProcess.rapidFeedRate;
      str += ";描点起始位置:" + pointTracingProcess.startPos;
      str += ";刀库位置:" + pointTracingProcess.storehosePos;
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
        this.$refs.upC.pointTracingProcessE.id = row.id;
        this.$refs.upC.pointTracingProcessE.tracerPenId = row.tracerPenId;
        this.$refs.upC.pointTracingProcessE.penNoseDistance =
          row.penNoseDistance;
        this.$refs.upC.pointTracingProcessE.pointDepth = row.pointDepth;
        this.$refs.upC.pointTracingProcessE.shaftRotaion = row.shaftRotaion;
        this.$refs.upC.pointTracingProcessE.shaftFeedRate = row.shaftFeedRate;
        this.$refs.upC.pointTracingProcessE.presserForce = row.presserForce;
        this.$refs.upC.pointTracingProcessE.rapidFeedRate = row.rapidFeedRate;
        this.$refs.upC.pointTracingProcessE.startPos = row.startPos;
        this.$refs.upC.pointTracingProcessE.storehosePos = row.storehosePos;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "描点工艺",
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
        url: this.$http.adornUrl("hdympp/pointtracingprocess/list"),
        method: "get"
      }).then(({ data }) => {
        console.log(data.page.list);
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
            "hdympp/pointtracingprocess/info/" + this.$refs.searc.id
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
            "hdympp/pointtracingprocess/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify("删除", this.turnSt(data.pointTracingProcess), "成功");
          } else {
            this.modify("删除", this.turnSt(data.pointTracingProcess), "失败");
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
        let pointTracingProcess = {
          id: this.$refs.addc.pointTracingProcessE.id,
          tracerPenId: this.$refs.addc.pointTracingProcessE.tracerPenId,
          penNoseDistance: this.$refs.addc.pointTracingProcessE.penNoseDistance,
          pointDepth: this.$refs.addc.pointTracingProcessE.pointDepth,
          shaftRotaion: this.$refs.addc.pointTracingProcessE.shaftRotaion,
          shaftFeedRate: this.$refs.addc.pointTracingProcessE.shaftFeedRate,
          presserForce: this.$refs.addc.pointTracingProcessE.presserForce,
          rapidFeedRate: this.$refs.addc.pointTracingProcessE.rapidFeedRate,
          startPos: this.$refs.addc.pointTracingProcessE.startPos,
          storehosePos: this.$refs.addc.pointTracingProcessE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/pointtracingprocess/save"),
          method: "post",
          data: this.$http.adornData(pointTracingProcess, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(pointTracingProcess), "成功");
          } else {
            this.modify("新增", this.turnSt(pointTracingProcess), "失败");
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
        let pointTracingProcess = {
          id: this.$refs.upC.pointTracingProcessE.id,
          tracerPenId: this.$refs.upC.pointTracingProcessE.tracerPenId,
          penNoseDistance: this.$refs.upC.pointTracingProcessE.penNoseDistance,
          pointDepth: this.$refs.upC.pointTracingProcessE.pointDepth,
          shaftRotaion: this.$refs.upC.pointTracingProcessE.shaftRotaion,
          shaftFeedRate: this.$refs.upC.pointTracingProcessE.shaftFeedRate,
          presserForce: this.$refs.upC.pointTracingProcessE.presserForce,
          rapidFeedRate: this.$refs.upC.pointTracingProcessE.rapidFeedRate,
          startPos: this.$refs.upC.pointTracingProcessE.startPos,
          storehosePos: this.$refs.upC.pointTracingProcessE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/pointtracingprocess/update"),
          method: "post",
          data: this.$http.adornData(pointTracingProcess, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.pointTracingProces1),
              this.turnSt(data.pointTracingProces2)
            );
          } else {
            this.modify("修改", this.turnSt(data.pointTracingProces2), "失败");
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
