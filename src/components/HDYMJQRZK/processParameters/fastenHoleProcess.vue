<!--  -->
<template>
  <div class="fasten">
    <!-- <div class="tree_content"></div> -->
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
            src="@/assets/images/HDYMJQRZK/系统信息/工艺单.png"
            alt=""
          />
          预连接孔加工工艺参数表
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
            <el-table-column prop="aperture" label="公称孔径" width="200px">
            </el-table-column>
            <el-table-column prop="fastenType" label="紧固件类型" width="200px">
            </el-table-column>
            <el-table-column
              prop="prefastenDode"
              label="预紧固件编号"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="toolId" label="刀具编号" width="200px">
            </el-table-column>
            <el-table-column prop="holeDepth" label="制孔深度" width="200px">
            </el-table-column
            ><el-table-column prop="dimpleDepth" label="锪窝深度" width="200px">
            </el-table-column>
            <el-table-column prop="holeDepthMax" label="最大孔深" width="200px">
            </el-table-column>
            <el-table-column prop="holeDepthMin" label="最小孔深" width="200px">
            </el-table-column>
            <el-table-column
              prop="shaftRotaion"
              label="制孔主轴转速"
              width="200px"
            >
            </el-table-column>
            <el-table-column
              prop="shaftFeedRate"
              label="制孔进给速度"
              width="200px"
            >
            </el-table-column>
            <el-table-column
              prop="dimpleRotation"
              label="锪窝主轴转速"
              width="200px"
            >
            </el-table-column>
            <el-table-column
              prop="dimpleFeedRate"
              label="锪窝进给速度"
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
            <el-table-column prop="startPos" label="加工起始位置" width="200px">
            </el-table-column>
            <el-table-column prop="insertSpeed" label="插钉速度" width="200px">
            </el-table-column>
            <el-table-column prop="torque" label="拧紧扭矩" width="200px">
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
import searC from "./fastenHoleProcessC/searC.vue";
import addC from "./fastenHoleProcessC/addC.vue";
import upC from "./fastenHoleProcessC/upC.vue";
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
    turnSt(fastenHoleProcess) {
      let str = "工艺编号:" + fastenHoleProcess.id;
      str += ";公称孔径:" + fastenHoleProcess.aperture;
      str += ";紧固件类型:" + fastenHoleProcess.fastenType;
      str += ";预紧固件编号:" + fastenHoleProcess.prefastenDode;
      str += ";刀具编号:" + fastenHoleProcess.toolId;
      str += ";制孔深度:" + fastenHoleProcess.holeDepth;
      str += ";锪窝深度:" + fastenHoleProcess.dimpleDepth;
      str += ";最大孔深:" + fastenHoleProcess.holeDepthMax;
      str += ";最小孔深:" + fastenHoleProcess.holeDepthMin;
      str += ";制孔主轴转速:" + fastenHoleProcess.shaftRotaion;
      str += ";制孔进给速度:" + fastenHoleProcess.shaftFeedRate;
      str += ";锪窝主轴转速:" + fastenHoleProcess.dimpleRotation;
      str += ";锪窝进给速度:" + fastenHoleProcess.dimpleFeedRate;
      str += ";压脚压力:" + fastenHoleProcess.presserForce;
      str += ";快进速度:" + fastenHoleProcess.rapidFeedRate;
      str += ";加工起始位置:" + fastenHoleProcess.startPos;
      str += ";插钉速度:" + fastenHoleProcess.insertSpeed;
      str += ";拧紧扭矩:" + fastenHoleProcess.torque;
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
        this.$refs.upC.fastenHoleProcessE.id = row.id;
        this.$refs.upC.fastenHoleProcessE.aperture = row.aperture;
        this.$refs.upC.fastenHoleProcessE.fastenType = row.fastenType;
        this.$refs.upC.fastenHoleProcessE.prefastenDode = row.prefastenDode;
        this.$refs.upC.fastenHoleProcessE.toolId = row.toolId;
        this.$refs.upC.fastenHoleProcessE.holeDepth = row.holeDepth;
        this.$refs.upC.fastenHoleProcessE.dimpleDepth = row.dimpleDepth;
        this.$refs.upC.fastenHoleProcessE.holeDepthMax = row.holeDepthMax;
        this.$refs.upC.fastenHoleProcessE.holeDepthMin = row.holeDepthMin;
        this.$refs.upC.fastenHoleProcessE.shaftRotaion = row.shaftRotaion;
        this.$refs.upC.fastenHoleProcessE.shaftFeedRate = row.shaftFeedRate;
        this.$refs.upC.fastenHoleProcessE.dimpleRotation = row.dimpleRotation;
        this.$refs.upC.fastenHoleProcessE.dimpleFeedRate = row.dimpleFeedRate;
        this.$refs.upC.fastenHoleProcessE.presserForce = row.presserForce;
        this.$refs.upC.fastenHoleProcessE.rapidFeedRate = row.rapidFeedRate;
        this.$refs.upC.fastenHoleProcessE.startPos = row.startPos;
        this.$refs.upC.fastenHoleProcessE.insertSpeed = row.insertSpeed;
        this.$refs.upC.fastenHoleProcessE.torque = row.torque;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "预连接孔加工",
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
        url: this.$http.adornUrl("hdympp/fastenholeprocess/list"),
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
            "hdympp/fastenholeprocess/info/" + this.$refs.searc.id
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
            "hdympp/fastenholeprocess/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify("删除", this.turnSt(data.fastenHoleProcess), "成功");
          } else {
            this.modify("删除", this.turnSt(data.fastenHoleProcess), "失败");
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
        let fastenHoleProcess = {
          id: this.$refs.addc.fastenHoleProcessE.id,
          aperture: this.$refs.addc.fastenHoleProcessE.aperture,
          fastenType: this.$refs.addc.fastenHoleProcessE.fastenType,
          prefastenDode: this.$refs.addc.fastenHoleProcessE.prefastenDode,
          toolId: this.$refs.addc.fastenHoleProcessE.toolId,
          holeDepth: this.$refs.addc.fastenHoleProcessE.holeDepth,
          dimpleDepth: this.$refs.addc.fastenHoleProcessE.dimpleDepth,
          holeDepthMax: this.$refs.addc.fastenHoleProcessE.holeDepthMax,
          holeDepthMin: this.$refs.addc.fastenHoleProcessE.holeDepthMin,
          shaftRotaion: this.$refs.addc.fastenHoleProcessE.shaftRotaion,
          shaftFeedRate: this.$refs.addc.fastenHoleProcessE.shaftFeedRate,
          dimpleRotation: this.$refs.addc.fastenHoleProcessE.dimpleRotation,
          dimpleFeedRate: this.$refs.addc.fastenHoleProcessE.dimpleFeedRate,
          presserForce: this.$refs.addc.fastenHoleProcessE.presserForce,
          rapidFeedRate: this.$refs.addc.fastenHoleProcessE.rapidFeedRate,
          startPos: this.$refs.addc.fastenHoleProcessE.startPos,
          insertSpeed: this.$refs.addc.fastenHoleProcessE.insertSpeed,
          torque: this.$refs.addc.fastenHoleProcessE.torque
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/fastenholeprocess/save"),
          method: "post",
          data: this.$http.adornData(fastenHoleProcess, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(fastenHoleProcess), "成功");
          } else {
            this.modify("新增", this.turnSt(fastenHoleProcess), "失败");
          }
        });
      } else this.fun = "ad";
    },
    upda() {
      if (this.fun == "upda") {
        let fastenHoleProcess = {
          id: this.$refs.upC.fastenHoleProcessE.id,
          aperture: this.$refs.upC.fastenHoleProcessE.aperture,
          fastenType: this.$refs.upC.fastenHoleProcessE.fastenType,
          prefastenDode: this.$refs.upC.fastenHoleProcessE.prefastenDode,
          toolId: this.$refs.upC.fastenHoleProcessE.toolId,
          holeDepth: this.$refs.upC.fastenHoleProcessE.holeDepth,
          dimpleDepth: this.$refs.upC.fastenHoleProcessE.dimpleDepth,
          holeDepthMax: this.$refs.upC.fastenHoleProcessE.holeDepthMax,
          holeDepthMin: this.$refs.upC.fastenHoleProcessE.holeDepthMin,
          shaftRotaion: this.$refs.upC.fastenHoleProcessE.shaftRotaion,
          shaftFeedRate: this.$refs.upC.fastenHoleProcessE.shaftFeedRate,
          dimpleRotation: this.$refs.upC.fastenHoleProcessE.dimpleRotation,
          dimpleFeedRate: this.$refs.upC.fastenHoleProcessE.dimpleFeedRate,
          presserForce: this.$refs.upC.fastenHoleProcessE.presserForce,
          rapidFeedRate: this.$refs.upC.fastenHoleProcessE.rapidFeedRate,
          startPos: this.$refs.upC.fastenHoleProcessE.startPos,
          insertSpeed: this.$refs.upC.fastenHoleProcessE.insertSpeed,
          torque: this.$refs.upC.fastenHoleProcessE.torque
        };
        console.log("up:", fastenHoleProcess);
        this.$http({
          url: this.$http.adornUrl("hdympp/fastenholeprocess/update"),
          method: "post",
          data: this.$http.adornData(fastenHoleProcess, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.fastenHoleProcess1),
              this.turnSt(data.fastenHoleProcess2)
            );
          } else {
            this.modify("修改", this.turnSt(data.fastenHoleProcess2), "失败");
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
