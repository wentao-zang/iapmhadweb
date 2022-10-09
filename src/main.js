// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as echarts from "echarts";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
// 手动引入 ECharts 各模块来减小打包体积
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import jquery from "jquery";
import "@/assets/css/base.css";
import "@/assets/css/index.css";
import "@/assets/css/indexjing.css";
import "@/assets/css/bootstrap.css";
import httpRequest from "@/utils/httpRequest";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$ = jquery;
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  LineChart,
  PieChart,
]);

// 全局注册组件（也可以使用局部注册）
Vue.component("v-chart", ECharts);

Vue.prototype.$http = httpRequest;
Vue.use(ElementUI);
// Vue.use(VueCookies);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
