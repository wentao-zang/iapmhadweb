<!--  -->
<template>
  <el-container style="height: 100%; width: 100%">
    <el-main style="overflow-y: hidden; width: 70%"
      ><img height="102%" width="100%" src="@/assets/images/a.jpg" />
    </el-main>
    <el-aside width="30%"
      ><div :style="note" style="height: 100%">
        <br /><br /><br /><br /><br /><br /><br />
        <span id="s1">多源异构数据集成与分析平台</span>
        <br /><br /><br /><br />
        <div id="d1">
          <el-input
            v-model="user.username"
            id="s2"
            style="width: 60%"
            placeholder="用户名"
          ></el-input>
          <br /><br />
          <el-input
            v-model="user.password"
            id="s3"
            style="width: 60%"
            placeholder="密码"
            show-password
          ></el-input>
          <br /><br />
          <el-button id="s4" type="danger" @click="login()">登录</el-button>
          <!-- </router-link> -->
        </div>
        <br />

        <br /><br /><br />
        <br /><br /><br /><br />
        <div id="d2">
          <span class="agile"
            >国家重点研发计划-数据驱动的X-X飞机部总装协同脉动生产线智能管控及集成技术</span
          ><br />
          <span class="agile">多源异构装配数据在线精准测控</span><br />
          <span class="agile"> @浙江大学</span>
        </div>
      </div></el-aside
    >
  </el-container>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    //这里存放数据
    return {
      password: "",
      user: {
        username: "",
        password: ""
      },
      user1: {
        userId: null,
        username: "",
        password: "",
        privilegeId: ""
      },
      user2: {
        username: "",
        password: ""
      },
      dialogVisible1: false,
      dialogVisible2: false,
      note: {
        backgroundImage: "url(" + require("@/assets/images/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        marginTop: "0px"
      }
    };
  },
  methods: {
    login() {
      if (this.user.username != "" && this.user.password != "") {
        if (this.user.username == "ynd" && this.user.password == "ynd") {
          cookies.set("user", "ynd");
          this.$router.push({
            path: "/total/hdymzkjqrxt/system",
            replace: true
          });
        }
        this.$http({
          url: this.$http.adornUrl("mem/user/verify"),
          method: "get",
          params: this.$http.adornParams(
            { username: this.user.username, password: this.user.password },
            false
          )
        }).then(({ data }) => {
          if (data.msg == "success") {
            cookies.set("user", data.user);
            console.log(cookies.get("user"));
            this.$router.push({
              path: "/total/hdymzkjqrxt/system",
              replace: true
            });
          } else {
            this.nonPri("账号密码错误");
          }
          // if (this.user.password == data.password) {
          //   cookies.set("user", data);
          //   console.log(cookies.get("user"));
          //   this.$router.push({ path: "/total", replace: true });
          // } else {
          //   console.log("账号密码错误");
          // }
        });
      } else {
        this.nonPri("请输入账号密码");
      }
    },
    nonPri(str) {
      this.$notify({
        title: "警告",
        message: str,
        type: "warning"
      });
    }
  }
};
</script>
<style scoped>
#s1 {
  color: #fff;
  font-size: 35px;
  text-align: center;
  display: block;
}
#s2 {
  font-size: 30px;
  text-align: center;
  display: block;
}
#s3 {
  font-size: 30px;
  text-align: center;
  display: block;
}
#s4 {
  width: 60%;
}
#d1,
#d2 {
  text-align: center;
}
.agile {
  align-content: center;
  text-align: center;
  color: white;
  font-size: 18px;
}
.user {
  color: white;
  font-size: 18px;
}
.el-main {
  height: 100%;
  padding: 0px;
}
el-aside {
  background-color: red;
}
</style>
