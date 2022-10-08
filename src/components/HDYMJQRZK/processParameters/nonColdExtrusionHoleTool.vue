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
            src="@/assets/images/HDYMJQRZK/末端执行器/刀具模块.png"
            alt=""
          />
          非冷挤压孔刀具表
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
            <el-table-column prop="id" label="刀具编号" width="200px">
            </el-table-column>
            <el-table-column prop="toolName" label="刀具名称" width="200px">
            </el-table-column>
            <el-table-column prop="toolAperture" label="刀具直径" width="200px">
            </el-table-column>
            <el-table-column prop="edgeLength" label="刀具刃长" width="200px">
            </el-table-column>
            <el-table-column prop="toolLife" label="刀具寿命" width="200px">
            </el-table-column>
            <el-table-column prop="noseLength" label="刀尖距离" width="200px">
            </el-table-column>
            <el-table-column
              prop="lengthmeter"
              label="长度计初始读数"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="storehosePos" label="刀库位置" width="198px">
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
import searC from "./nonColdExtrusionHoleToolC/searC.vue";
import addC from "./nonColdExtrusionHoleToolC/addC.vue";
import upC from "./nonColdExtrusionHoleToolC/upC.vue";
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
    turnSt(nonColdExtrusionHoleTool) {
      console.log(nonColdExtrusionHoleTool);
      let str = "刀具编号:" + nonColdExtrusionHoleTool.id;
      str += "刀具名称:" + nonColdExtrusionHoleTool.toolName;
      str += "刀具直径:" + nonColdExtrusionHoleTool.toolAperture;
      str += "刀具刃长:" + nonColdExtrusionHoleTool.edgeLength;
      str += "刀具寿命:" + nonColdExtrusionHoleTool.toolLife;
      str += "刀尖距离:" + nonColdExtrusionHoleTool.noseLength;
      str += "长度计初始读数:" + nonColdExtrusionHoleTool.lengthmeter;
      str += "刀库位置:" + nonColdExtrusionHoleTool.storehosePos;
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
        this.$refs.upC.nonColdExtrusionHoleToolE.id = row.id;
        this.$refs.upC.nonColdExtrusionHoleToolE.toolName = row.toolName;
        this.$refs.upC.nonColdExtrusionHoleToolE.toolAperture =
          row.toolAperture;
        this.$refs.upC.nonColdExtrusionHoleToolE.edgeLength = row.edgeLength;
        this.$refs.upC.nonColdExtrusionHoleToolE.toolLife = row.toolLife;
        this.$refs.upC.nonColdExtrusionHoleToolE.noseLength = row.noseLength;
        this.$refs.upC.nonColdExtrusionHoleToolE.lengthmeter = row.lengthmeter;
        this.$refs.upC.nonColdExtrusionHoleToolE.storehosePos =
          row.storehosePos;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "非冷挤压孔刀具",
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
        url: this.$http.adornUrl("hdympp/noncoldextrusionholetool/list"),
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
            "hdympp/noncoldextrusionholetool/info/" + this.$refs.searc.id
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
            "hdympp/noncoldextrusionholetool/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify(
              "删除",
              this.turnSt(data.nonColdExtrusionHoleTool),
              "成功"
            );
          } else {
            this.modify(
              "删除",
              this.turnSt(data.nonColdExtrusionHoleTool),
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
        let nonColdExtrusionHoleTool = {
          id: this.$refs.addc.nonColdExtrusionHoleToolE.id,
          toolName: this.$refs.addc.nonColdExtrusionHoleToolE.toolName,
          toolAperture: this.$refs.addc.nonColdExtrusionHoleToolE.toolAperture,
          edgeLength: this.$refs.addc.nonColdExtrusionHoleToolE.edgeLength,
          toolLife: this.$refs.addc.nonColdExtrusionHoleToolE.toolLife,
          noseLength: this.$refs.addc.nonColdExtrusionHoleToolE.noseLength,
          lengthmeter: this.$refs.addc.nonColdExtrusionHoleToolE.lengthmeter,
          storehosePos: this.$refs.addc.nonColdExtrusionHoleToolE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/noncoldextrusionholetool/save"),
          method: "post",
          data: this.$http.adornData(nonColdExtrusionHoleTool, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(nonColdExtrusionHoleTool), "成功");
          } else {
            this.modify("新增", this.turnSt(nonColdExtrusionHoleTool), "失败");
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
        let nonColdExtrusionHoleTool = {
          id: this.$refs.upC.nonColdExtrusionHoleToolE.id,
          toolName: this.$refs.upC.nonColdExtrusionHoleToolE.toolName,
          toolAperture: this.$refs.upC.nonColdExtrusionHoleToolE.toolAperture,
          edgeLength: this.$refs.upC.nonColdExtrusionHoleToolE.edgeLength,
          toolLife: this.$refs.upC.nonColdExtrusionHoleToolE.toolLife,
          noseLength: this.$refs.upC.nonColdExtrusionHoleToolE.noseLength,
          lengthmeter: this.$refs.upC.nonColdExtrusionHoleToolE.lengthmeter,
          storehosePos: this.$refs.upC.nonColdExtrusionHoleToolE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/noncoldextrusionholetool/update"),
          method: "post",
          data: this.$http.adornData(nonColdExtrusionHoleTool, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.nonColdExtrusionHoleTool1),
              this.turnSt(data.nonColdExtrusionHoleTool2)
            );
          } else {
            this.modify(
              "修改",
              this.turnSt(data.nonColdExtrusionHoleTool2),
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
