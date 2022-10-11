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
            src="@/assets/images/HDYMJQRZK/工艺参数/紧固classify.png"
            alt=""
          />
          紧固件表
        </div>
        <div class="fasten_table t_btn8">
          <el-table
            :data="tableData"
            height="600px"
            style="width: 100%; height: 100%; margin-top: 2%"
            @row-click="editUp"
            highlight-current-row:true
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }">
            <el-table-column prop="id" label="预紧固件编号" class="item">
            </el-table-column>
            <el-table-column
              prop="prefastenBrand"
              label="预紧固件牌号"
              width="300px"
            >
            </el-table-column>
            <el-table-column prop="prefastenAperture" label="预紧固件直径">
            </el-table-column>
            <el-table-column prop="prefastenLength" label="预紧固件长度">
            </el-table-column
            ><el-table-column prop="storehosePos" label="钉库位置">
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
          style="margin: 10px; margin-top: 0px"
          @click="sear()"
          >查询</el-button
        >
        <el-button
          type="success"
          size="large"
          style="margin: 10px; margin-top: 0px"
          @click="ad()"
          >新增</el-button
        >
        <el-button
          type="warning"
          size="large"
          style="margin: 10px; margin-top: 0px"
          @click="upda()"
          >修改</el-button
        >
        <el-button
          type="danger"
          size="large"
          style="margin: 10px; margin-top: 0px"
          @click="del()"
          >删除</el-button
        ><el-button
          type="primary"
          size="large"
          style="margin: 10px; margin-top: 0px"
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
import searC from "./fastenC/searC.vue";
import addC from "./fastenC/addC.vue";
import upC from "./fastenC/upC.vue";
import $ from "jquery";
import cookies from "vue-cookies";
import * as echarts from "echarts";
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
    turnSt(fasten) {
      let str = "预紧固件编号:" + fasten.id;
      str += ";预紧固件牌号:" + fasten.prefastenBrand;
      str += ";预紧固件直径:";
      str += fasten.prefastenAperture == null ? "" : fasten.prefastenAperture;
      str += ";预紧固件长度:";
      str += fasten.prefastenLength == null ? "" : fasten.prefastenLength;
      str += ";钉库位置:";
      str += fasten.storehosePos == null ? "" : fasten.storehosePos;
      // console.log(str);
      return str;
    },

    editUp(row) {
      console.log(row);
      if (this.fun == "upda") {
        this.$refs.upC.fastenE.id = row.id;
        this.$refs.upC.fastenE.prefastenBrand = row.prefastenBrand;
        this.$refs.upC.fastenE.prefastenAperture = row.prefastenAperture;
        this.$refs.upC.fastenE.prefastenLength = row.prefastenLength;
        this.$refs.upC.fastenE.storehosePos = row.storehosePos;
      } else if (this.fun == "dele") {
        this.$refs.searc.id = row.id;
      }
    },
    modify(type, opContent, sucordef) {
      let date = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let x = {
        logType: "紧固件表",
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
        url: this.$http.adornUrl("hdympp/fasten/list"),
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
          url: this.$http.adornUrl("hdympp/fasten/info/" + this.$refs.searc.id),
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
            "hdympp/fasten/delete/" + this.$refs.searc.id
          ),
          method: "get"
        }).then(({ data }) => {
          console.log("删除：", data);
          if (data.msg == "删除成功") {
            this.getdata();
            this.modify("删除", this.turnSt(data.fasteners), "成功");
          } else {
            this.modify("删除", this.turnSt(data.fasteners), "失败");
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
        let fasten = {
          id: this.$refs.addc.fastenE.id,
          prefastenBrand: this.$refs.addc.fastenE.prefastenBrand,
          prefastenAperture: this.$refs.addc.fastenE.prefastenAperture,
          prefastenLength: this.$refs.addc.fastenE.prefastenLength,
          storehosePos: this.$refs.addc.fastenE.storehosePos
        };
        this.$http({
          url: this.$http.adornUrl("hdympp/fasten/save"),
          method: "post",
          data: this.$http.adornData(fasten, false)
        }).then(({ data }) => {
          if (data.msg == "success") {
            this.getdata();
            this.modify("新增", this.turnSt(fasten), "成功");
          } else {
            this.modify("新增", this.turnSt(fasten), "失败");
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
        let fasten = {
          id: this.$refs.upC.fastenE.id,
          prefastenBrand: this.$refs.upC.fastenE.prefastenBrand,
          prefastenAperture: this.$refs.upC.fastenE.prefastenAperture,
          prefastenLength: this.$refs.upC.fastenE.prefastenLength,
          storehosePos: this.$refs.upC.fastenE.storehosePos
        };
        console.log("fasten:", fasten);
        this.$http({
          url: this.$http.adornUrl("hdympp/fasten/update"),
          method: "post",
          data: this.$http.adornData(fasten, false)
        }).then(({ data }) => {
          console.log("up:", data);
          if (data.msg == "修改成功") {
            this.getdata();
            this.modify(
              "修改",
              this.turnSt(data.fasten1),
              this.turnSt(data.fasten2)
            );
          } else {
            this.modify("修改", this.turnSt(data.fasten2), "失败");
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
      console.log("id", id);
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
/* .el-table {
  font-size: 22px;
float: left;
  text-align: center;
} */
el-button {
  height: 20px;
}
.el-table-column {
  width: 20%;
}
.item.el-table-column_label {
  font-size: 30px;
}
.tableTextColor {
  color: rgb(14, 120, 241);
  cursor: pointer;
  transition: 0.5s linear;
}
</style>
