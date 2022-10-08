<!--  -->
<template>
  <div class="hello">
    <!-- 顶部搜索和添加清除过滤按钮 -->
    <el-row class="table-grid-content">
      <el-col :span="3" class="grid">
        <el-select
          v-model="value"
          placeholder="请选择部门"
          clearable
          @change="changeDep()"
          size="small"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="6" class="grid" :gutter="10">
        <!-- <el-button
          type="primary"
          icon="el-icon-plus"
          @click="addMembers()"
          size="small"
          plain
          disabled
          >添加</el-button
        > -->
        <!-- <el-button size="small" icon="el-icon-delete" @click="clearFilter"
          >清除过滤器</el-button
        > -->
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
      :stripe="true"
      :height="tableHeight"
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0px' }"
      ref="refsTable"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop="id"
        min-width="10%"
        align="center"
      ></el-table-column>
      <el-table-column
        label="用户名"
        prop="username"
        min-width="15%"
        align="center"
      ></el-table-column>
      <el-table-column
        label="权限"
        prop="authority"
        min-width="25%"
        align="center"
      ></el-table-column>
      <el-table-column
        label="部门"
        prop="department"
        min-width="15%"
        align="center"
      ></el-table-column>
      <el-table-column
        label="创建时间"
        prop="createDate"
        min-width="20%"
        align="center"
      ></el-table-column>
      <!-- 操作中修改和删除按钮 -->
      <el-table-column
        fixed="right"
        label="操作"
        min-width="15%"
        align="center"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="modifyData(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[12, 19, 25]"
      :page-size="pagesize"
      :total="tableData.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >
    </el-pagination>
    <!-- 修改页 -->
    <el-dialog
      title="修改用户信息"
      width="350px"
      :visible.sync="centerDialogVisible"
      center
    >
      <div class="dialog-edit-form">
        <el-form :model="editForm">
          <!-- <el-form-item label="创建时间" :picker-options="pickerOptions"
                ><br />
                <el-date-picker
                  v-model="editForm.create_date"
                  type="datetime"
                  placeholder="修改创建时间"
                  value-format="yyyy-MM-dd  HH:mm:ss"
                  style="width: 260px"
                ></el-date-picker>
              </el-form-item> -->

          <el-form-item label="用户名" style="width: 260px">
            <el-input v-model="editForm.username"></el-input>
          </el-form-item>

          <el-form-item label="权限" style="width: 260px">
            <el-select v-model="editForm.authority" style="width: 260px">
              <el-option
                v-for="item in authOptions"
                :key="item.authnum"
                :label="item.authnum + '：' + item.authname"
                :value="item.authnum"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="部门" style="width: 260px">
            <el-input v-model="editForm.department"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="dialog-edit-btn">
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="sumbitEditRow()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
var _index;
export default {
  data() {
    return {
      codeFilter: [],
      sortienumFilter: [],
      rudnameFilter: [],
      sencodeFilter: [],
      pagesize: 12,
      currpage: 1,
      tableHeight: 600,
      centerDialogVisible: false,
      isAddMembers: false,
      editForm: [],
      addForm: [],
      searchData: "",
      input: "",
      id: "",
      originData: [{}],
      tableData: [
        {
          id: "",
          username: "",
          password: "",
          authority: "",
          createDate: "",
          department: ""
        }
      ],
      dialogTableVisible: false,
      options: [],
      authOptions: [],
      value: ""
    };
  },
  computed: {},
  methods: {
    //将数组和对象去重
    unique(arr) {
      var hash = [];
      for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
          hash.push(arr[i]);
        }
      }
      return hash;
    },

    //清除所有筛选
    clearFilter() {
      this.tableData = this.originData;
      this.$refs.refsTable.clearFilter();
    },
    //删除方法
    deleteData(row) {
      this.$confirm("是否确定删除用户" + row.username, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("8000/mwts/user/delete/" + row.id),
            method: "post",
            data: this.$http.adornData()
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.showUser(),
                // window.location.reload(); //动态刷新页面
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //修改方法
    modifyData(index, row) {
      this.centerDialogVisible = true;
      this.editForm = Object.assign({}, row); //重置对象
      _index = index;
      console.log("index的值：" + index);
      console.log("_index的值：" + _index);
      console.log("row的值是：", this.editForm); //代表选择的这一行的数据
    },
    sumbitEditRow() {
      this.$http({
        url: this.$http.adornUrl("8000/mwts/user/update"),
        method: "post",
        data: this.$http.adornData(this.editForm, false)
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.showUser();
          // window.location.reload(); //动态刷新页面
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        } else {
          this.$message.error(data.msg);
        }
      });
      // var editData = _index;
      // console.log("editData的值" + this.editForm);
      // this.tableData[editData].department = this.editForm.department;
      // this.tableData[editData].authority = this.editForm.authority;
      // this.tableData[editData].username = this.editForm.username;
      this.centerDialogVisible = false;
      // console.log("数据：" + this.editForm.creatDate);
      // console.log("对象数组", this.tableData);
    },
    closeDialog() {
      this.centerDialogVisible = false;
      this.isAddMembers = false;
      console.log("editfrom", this.editForm);
      //console.log("addfrom", this.addForm);
    },

    //默认显示testdata表所有数据，并动态获取筛选项
    showUser() {
      this.$http({
        url: this.$http.adornUrl("8000/mwts/user/list"),
        method: "get",
        data: this.$http.adornData({
          //rudnum: this.tableData.rudnum,
        })
      }).then(({ data }) => {
        this.tableData = data;
        for (let i = 0; i < this.tableData.length; i++) {
          for (let x = 0; x < this.authOptions.length; x++) {
            if (this.tableData[i].authority === this.authOptions[x].authnum) {
              this.tableData[i].authority += ":" + this.authOptions[x].authname;
            }
          }

          // switch (this.tableData[i].authority) {
          //   case 0:
          //     this.tableData[i].authority += "：集成系统管理员";
          //     break;
          //   case 1:
          //     this.tableData[i].authority += "：机翼电缆检测模块";
          //     break;
          //   case 2:
          //     this.tableData[i].authority += "：活动翼面测试模块";
          //     break;
          //   case 3:
          //     this.tableData[i].authority += "：管路气密燃油模块";
          //     break;
          //   case 4:
          //     this.tableData[i].authority += "：整体油箱密封模块";
          //     break;
          //   case 5:
          //     this.tableData[i].authority += "：管路气密环控模块";
          //     break;
          // }
        }
        if (this.options != []) {
          this.options = [];
          // console.log(this.options);
          // console.log("清空");
          this.getFilter("department", this.options);
        } else {
          this.getFilter("department", this.options);
        }

        //保存一份全数据，清筛选时调用
        this.originData = this.tableData;
      });
    },
    //获取权限表
    showAuth() {
      this.$http({
        url: this.$http.adornUrl("7000/admin/auth/list"),
        method: "get",
        data: this.$http.adornData({
          //rudnum: this.tableData.rudnum,
        })
      }).then(({ data }) => {
        this.authOptions = data;
        // console.log(this.authOptions);
      });
    },
    //后台获取筛选项方法
    getFilter(key, filter) {
      let array = [];
      for (let x = 0; x < this.tableData.length; x++) {
        array.push(this.tableData[x][key]);
      }
      let arr = this.unique(array);
      for (let x = 0; x < arr.length; x++) {
        let temp = { label: arr[x], value: arr[x] };
        filter.push(temp);
      }
      this.unique(filter);
    },
    //选项改变触发
    changeDep() {
      console.log(this.value);
      if (this.value == "") {
        this.clearFilter();
      } else {
        this.tableData = [];
        this.selectByDep();
      }
    },
    //按部门筛选
    selectByDep() {
      let x = 0;
      for (let i = 0; i < this.originData.length; i++) {
        if (this.value === this.originData[i].department) {
          this.tableData[x] = this.originData[i];
          x++;
        }
      }
    },
    //三个控制分页的方法
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    }
  },
  created() {
    this.showAuth();
  },
  mounted() {
    this.showUser();
    this.$nextTick(() => {
      // 根据浏览器高度设置初始高度
      this.tableHeight =
        window.innerHeight - this.$refs.refsTable.$el.offsetTop - 52;
      // 监听浏览器高度变化，改变表格高度
      window.onresize = () => {
        this.tableHeight =
          window.innerHeight - this.$refs.refsTable.$el.offsetTop - 52;
      };
    });
  },
  updated() {} //生命周期 - 更新之后
};
</script>

<style scoped>
.table-grid-content {
  border-radius: 4px;
  height: 50 px;
  background: #ebeef5;
  padding: 8px;
}
.dialogDiv {
  height: 300px;
  overflow: auto;
}
.dialog-edit-btn {
  text-align: center;
}
</style>
