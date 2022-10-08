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
            src="@/assets/images/HDYMJQRZK/末端执行器/刀具模块.png"
            alt=""
          />
          冷挤压孔刀具表
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
import searC from "./coldExtrusionHoleToolC/searC.vue";
import addC from "./coldExtrusionHoleToolC/addC.vue";
import upC from "./coldExtrusionHoleToolC/upC.vue";
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
    turnSt(coldExtrusionHoleTool) {
      let str = "刀具编号:" + coldExtrusionHoleTool.id;
      str += "刀具名称:" + coldExtrusionHoleTool.toolName;
      str += "刀具直径:" + coldExtrusionHoleTool.toolAperture;
      str += "刀具刃长:" + coldExtrusionHoleTool.edgeLength;
      str += "刀具寿命:" + coldExtrusionHoleTool.toolLife;
      str += "刀尖距离:" + coldExtrusionHoleTool.noseLength;
      str += "长度计初始读数:" + coldExtrusionHoleTool.lengthmeter;
      str += "刀库位置:" + coldExtrusionHoleTool.storehosePos;
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
        this.$refs.upC.coldExtrusionHoleToolE.id = row.id;
        this.$refs.upC.coldExtrusionHoleToolE.toolName = row.toolName;
        this.$refs.upC.coldExtrusionHoleToolE.toolAperture = row.toolAperture;
        this.$refs.upC.coldExtrusionHoleToolE.edgeLength = row.edgeLength;
        this.$refs.upC.coldExtrusionHoleToolE.toolLife = row.toolLife;
        this.$refs.upC.coldExtrusionHoleToolE.noseLength = row.noseLength;
        this.$refs.upC.coldExtrusionHoleToolE.lengthmeter = row.lengthmeter;
        this.$refs.upC.coldExtrusionHoleToolE.storehosePos = row.storehosePos;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "冷挤压孔刀具",
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
        url: this.$http.adornUrl("hdympp/coldextrusionholetool/list"),
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
            "hdympp/coldextrusionholetool/info/" + this.$refs.searc.id
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
            "hdympp/coldextrusionholetool/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify(
              "删除",
              this.turnSt(data.coldExtrusionHoleTools),
              "成功"
            );
          } else {
            this.modify(
              "删除",
              this.turnSt(data.coldExtrusionHoleTools),
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
        let coldExtrusionHoleTool = {
          id: this.$refs.addc.coldExtrusionHoleToolE.id,
          toolName: this.$refs.addc.coldExtrusionHoleToolE.toolName,
          toolAperture: this.$refs.addc.coldExtrusionHoleToolE.toolAperture,
          edgeLength: this.$refs.addc.coldExtrusionHoleToolE.edgeLength,
          toolLife: this.$refs.addc.coldExtrusionHoleToolE.toolLife,
          noseLength: this.$refs.addc.coldExtrusionHoleToolE.noseLength,
          lengthmeter: this.$refs.addc.coldExtrusionHoleToolE.lengthmeter,
          storehosePos: this.$refs.addc.coldExtrusionHoleToolE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/coldextrusionholetool/save"),
          method: "post",
          data: this.$http.adornData(coldExtrusionHoleTool, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(coldExtrusionHoleTool), "成功");
          } else {
            this.modify("新增", this.turnSt(coldExtrusionHoleTool), "失败");
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
        let coldExtrusionHoleTool = {
          id: this.$refs.upC.coldExtrusionHoleToolE.id,
          toolName: this.$refs.upC.coldExtrusionHoleToolE.toolName,
          toolAperture: this.$refs.upC.coldExtrusionHoleToolE.toolAperture,
          edgeLength: this.$refs.upC.coldExtrusionHoleToolE.edgeLength,
          toolLife: this.$refs.upC.coldExtrusionHoleToolE.toolLife,
          noseLength: this.$refs.upC.coldExtrusionHoleToolE.noseLength,
          lengthmeter: this.$refs.upC.coldExtrusionHoleToolE.lengthmeter,
          storehosePos: this.$refs.upC.coldExtrusionHoleToolE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/coldextrusionholetool/update"),
          method: "post",
          data: this.$http.adornData(coldExtrusionHoleTool, false)
        }).then(({ data }) => {
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.coldExtrusionHoleTool1),
              this.turnSt(data.coldExtrusionHoleTool2)
            );
          } else {
            this.modify(
              "修改",
              this.turnSt(data.coldExtrusionHoleTool2),
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
