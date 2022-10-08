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
            src="@/assets/images/HDYMJQRZK/工艺参数/日志.png"
            alt=""
          />
          工艺参数库修改日志
        </div>
        <div class="fasten_table t_btn8">
          <el-table
            :data="tableData"
            height="600"
            style="width: 100%; height: 100%; margin-top: 2%"
            highlight-current-row:true
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
          >
            <el-table-column prop="id" label="编号" width="80px">
            </el-table-column>
            <el-table-column prop="logType" label="日志类型" width="250px">
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="120px">
            </el-table-column>
            <el-table-column prop="opType" label="操作类型" width="120px">
            </el-table-column
            ><el-table-column prop="opContent" label="操作内容" width="1500px">
            </el-table-column>
            <el-table-column prop="opResult" label="操作结果" width="1500px">
            </el-table-column>
            <el-table-column prop="logTime" label="操作时间" width="230px">
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

        <el-button type="primary" @click="sear()">查询</el-button>
        <el-button type="primary" @click="fre()">刷新</el-button
        ><searC ref="searc" style="margin:0.2%" v-show="fun == 'sear'"></searC>
      </div>
    </div>
  </div>
</template>

<script>
import searC from "./modifyLogC/searC.vue";
import Vue from "vue";
import Plugin from "v-fit-columns";
Vue.use(Plugin);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { searC },
  data() {
    return {
      fun: "",
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      allData: [],
      length: 0,
      currentPage: 1
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
      this.fun = "";
      this.$http({
        url: this.$http.adornUrl("hdympp/modifylog/list"),
        method: "get"
      }).then(({ data }) => {
        console.log(data);
        this.allData = data.page.list.reverse();
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
      for (let item of this.tableData) {
        console.log(typeof item.logTime);
        // console.log(item.logTime.Format("yyyy-MM-dd hh:mm:ss"));
        // item.logTime = item.logTime.Format("yyyy-MM-dd hh:mm:ss");
      }
    },
    sear() {
      if (this.fun == "sear") {
        this.$http({
          url: this.$http.adornUrl(
            "hdympp/modifylog/info/" + this.$refs.searc.id
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
      } else this.fun = "sear";
    },

    fre() {
      this.fun = "";
      this.getdata();
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
