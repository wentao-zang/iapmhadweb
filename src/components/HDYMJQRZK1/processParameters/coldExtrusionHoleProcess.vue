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
            src="@/assets/images/HDYMJQRZK/系统信息/工艺单.png"
            alt=""
          />
          冷挤压孔加工工艺参数表
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
            <el-table-column
              prop="firstDepth"
              label="第一刀加工深度"
              width="200px"
            >
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
import searC from "./coldExtrusionHoleProcessC/searC.vue";
import addC from "./coldExtrusionHoleProcessC/addC.vue";
import upC from "./coldExtrusionHoleProcessC/upC.vue";
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
    turnSt(coldExtrusionHoleProcess) {
      let str = "工艺编号:" + coldExtrusionHoleProcess.id;
      str += ";公称孔径:" + coldExtrusionHoleProcess.aperture;
      str += ";刀具编号:" + coldExtrusionHoleProcess.toolId;
      str += ";制孔深度:" + coldExtrusionHoleProcess.holeDepth;
      str += ";锪窝深度:" + coldExtrusionHoleProcess.dimpleDepth;
      str += ";最大孔深:" + coldExtrusionHoleProcess.holeDepthMax;
      str += ";最小孔深:" + coldExtrusionHoleProcess.holeDepthMin;
      str += ";制孔主轴转速:" + coldExtrusionHoleProcess.shaftRotaion;
      str += ";锪窝主轴转速:" + coldExtrusionHoleProcess.dimpleRotation;
      str += ";锪窝进给速度:" + coldExtrusionHoleProcess.dimpleFeedRate;
      str += ";压脚压力:" + coldExtrusionHoleProcess.presserForce;
      str += ";快进速度:" + coldExtrusionHoleProcess.rapidFeedRate;
      str += ";加工起始位置:" + coldExtrusionHoleProcess.startPos;
      str += ";第一刀加工深度:" + coldExtrusionHoleProcess.firstDepth;
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
        this.$refs.upC.coldExtrusionHoleProcessE.id = row.id;
        this.$refs.upC.coldExtrusionHoleProcessE.aperture = row.aperture;
        this.$refs.upC.coldExtrusionHoleProcessE.toolId = row.toolId;
        this.$refs.upC.coldExtrusionHoleProcessE.holeDepth = row.holeDepth;
        this.$refs.upC.coldExtrusionHoleProcessE.dimpleDepth = row.dimpleDepth;
        this.$refs.upC.coldExtrusionHoleProcessE.holeDepthMax =
          row.holeDepthMax;
        this.$refs.upC.coldExtrusionHoleProcessE.holeDepthMin =
          row.holeDepthMin;
        this.$refs.upC.coldExtrusionHoleProcessE.shaftRotaion =
          row.shaftRotaion;
        this.$refs.upC.coldExtrusionHoleProcessE.dimpleRotation =
          row.dimpleRotation;
        this.$refs.upC.coldExtrusionHoleProcessE.dimpleFeedRate =
          row.dimpleFeedRate;
        this.$refs.upC.coldExtrusionHoleProcessE.presserForce =
          row.presserForce;
        this.$refs.upC.coldExtrusionHoleProcessE.rapidFeedRate =
          row.rapidFeedRate;
        this.$refs.upC.coldExtrusionHoleProcessE.startPos = row.startPos;
        this.$refs.upC.coldExtrusionHoleProcessE.firstDepth = row.firstDepth;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "冷挤压孔加工",
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
      let self = this;
      this.$http({
        url: this.$http.adornUrl("hdympp/coldextrusionholeprocess/list"),
        method: "get"
      }).then(({ data }) => {
        console.log(data.page.list);
        self.allData = data.page.list;
        self.length = self.allData.length;
        self.handleCurrentChange(1);
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
        let self = this;
        this.$http({
          url: this.$http.adornUrl(
            "hdympp/coldextrusionholeprocess/info/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log(data[0]);
          if (data[0] != null) {
            self.allData = data;
            self.length = self.allData.length;
            self.handleCurrentChange(1);
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
        let self = this;
        this.$http({
          url: this.$http.adornUrl(
            "hdympp/coldextrusionholeprocess/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            self.getdata();
            self.modify(
              "删除",
              self.turnSt(data.coldExtrusionHoleProcesss),
              "成功"
            );
          } else {
            self.modify(
              "删除",
              self.turnSt(data.coldExtrusionHoleProcesss),
              "失败"
            );
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
        let self = this;
        let coldExtrusionHoleProcess = {
          id: self.$refs.addc.coldExtrusionHoleProcessE.id,
          aperture: self.$refs.addc.coldExtrusionHoleProcessE.aperture,
          toolId: self.$refs.addc.coldExtrusionHoleProcessE.toolId,
          holeDepth: self.$refs.addc.coldExtrusionHoleProcessE.holeDepth,
          dimpleDepth: self.$refs.addc.coldExtrusionHoleProcessE.dimpleDepth,
          holeDepthMax: self.$refs.addc.coldExtrusionHoleProcessE.holeDepthMax,
          holeDepthMin: self.$refs.addc.coldExtrusionHoleProcessE.holeDepthMin,
          shaftRotaion: self.$refs.addc.coldExtrusionHoleProcessE.shaftRotaion,
          dimpleRotation:
            self.$refs.addc.coldExtrusionHoleProcessE.dimpleRotation,
          dimpleFeedRate:
            self.$refs.addc.coldExtrusionHoleProcessE.dimpleFeedRate,
          presserForce: self.$refs.addc.coldExtrusionHoleProcessE.presserForce,
          rapidFeedRate:
            self.$refs.addc.coldExtrusionHoleProcessE.rapidFeedRate,
          startPos: self.$refs.addc.coldExtrusionHoleProcessE.startPos,
          firstDepth: self.$refs.addc.coldExtrusionHoleProcessE.firstDepth
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/coldextrusionholeprocess/save"),
          method: "post",
          data: this.$http.adornData(coldExtrusionHoleProcess, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            self.getdata();
            self.modify("新增", self.turnSt(coldExtrusionHoleProcess), "成功");
          } else {
            self.modify("新增", self.turnSt(coldExtrusionHoleProcess), "失败");
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
        let self = this;
        let coldExtrusionHoleProcess = {
          id: self.$refs.upC.coldExtrusionHoleProcessE.id,
          aperture: self.$refs.upC.coldExtrusionHoleProcessE.aperture,
          toolId: self.$refs.upC.coldExtrusionHoleProcessE.toolId,
          holeDepth: self.$refs.upC.coldExtrusionHoleProcessE.holeDepth,
          dimpleDepth: self.$refs.upC.coldExtrusionHoleProcessE.dimpleDepth,
          holeDepthMax: self.$refs.upC.coldExtrusionHoleProcessE.holeDepthMax,
          holeDepthMin: self.$refs.upC.coldExtrusionHoleProcessE.holeDepthMin,
          shaftRotaion: self.$refs.upC.coldExtrusionHoleProcessE.shaftRotaion,
          dimpleRotation:
            self.$refs.upC.coldExtrusionHoleProcessE.dimpleRotation,
          dimpleFeedRate:
            self.$refs.upC.coldExtrusionHoleProcessE.dimpleFeedRate,
          presserForce: self.$refs.upC.coldExtrusionHoleProcessE.presserForce,
          rapidFeedRate: self.$refs.upC.coldExtrusionHoleProcessE.rapidFeedRate,
          startPos: self.$refs.upC.coldExtrusionHoleProcessE.startPos,
          firstDepth: self.$refs.upC.coldExtrusionHoleProcessE.firstDepth
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/coldextrusionholeprocess/update"),
          method: "post",
          data: this.$http.adornData(coldExtrusionHoleProcess, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            self.getdata();
            self.modify(
              "修改",
              self.turnSt(data.coldExtrusionHoleProcess1),
              self.turnSt(data.coldExtrusionHoleProcess2)
            );
          } else {
            self.modify(
              "修改",
              self.turnSt(data.coldExtrusionHoleProcess2),
              "失败"
            );
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
    upC1(id) {
      for (let item of this.tableData) {
        if (id == item.id) {
          console.log("item", id);
          console.log("--", this.$refs.upC.fastenE);
          this.$refs.upC.fastenE.prefastenBrand = item.prefastenBrand;
          this.$refs.upC.fastenE.prefastenAperture = item.prefastenAperture;
          this.$refs.upC.fastenE.prefastenLength = item.prefastenLength;
          this.$refs.upC.fastenE.storehosePos = item.storehosePos;
          break;
        }
      }
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
  }
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
