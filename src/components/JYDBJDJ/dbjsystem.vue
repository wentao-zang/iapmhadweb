<!--  -->
<template>
  <div>
    <div class="hdymsystem">
      <div class="content1 fl">
        <div class="data1 fl">
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
          <div class="tt fl">
            <div class="">
              <img
                src="@/assets/images/HDYMJQRZK/system.png"
                style="
                  width: 100%;
                  height: 100%;
                  background: rgba(255, 255, 255, 0);
                "
              />
            </div>
          </div>
        </div>
        <div class="data2 fl">
          <div class="d1 fl">
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
            <div class="data_title">
              <img
                style="margin-left: -30px; margin-top: -6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
                alt=""
              />
              系统实时状态信息
            </div>
            <div class="h11 fl"></div>
            <div class="h11 fl">
              当前架次：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style1"
                :value="this.productinfo.flightId"
              />
            </div>
            <div class="h11 fl">
              产品编号：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style2"
                :value="this.productinfo.productNum"
              />
            </div>
            <div class="h11 fl">
              刀具编号：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style3"
                :value="this.productinfo.toolId"
              />
            </div>
            <div class="h11 fl">
              当前孔号：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style4"
                :value="this.productinfo.holeId"
              />
            </div>
            <div class="h11 fl">
              当前孔径：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style5"
                :value="strDate5"
              />
            </div>
            <div class="h11 fl">
              当前窝深：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style6"
                :value="strDate6"
              />
            </div>
            <div class="h11 fl">
              已制孔质量：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style7"
                :value="strDate7"
              />
              <el-button type="success" class="zhongzi" @click="chongji"
                >重计</el-button
              >
            </div>
            <div class="h11 fl">
              未达标孔号：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style8"
                :value="strDate8"
              />
            </div>
            <div class="h11 fl">
              刀具磨损状态：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style9"
                :value="strDate9"
              />
            </div>
            <div class="h11 fl">
              机器人状态：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style10"
                :value="strDate10"
              />
            </div>
            <div class="h11 fl">
              产品加工进度：<input
                type="text"
                class="wenzi"
                :style="tishiAccount_style11"
                :value="strDate11"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content2 fl">
        <div class="d1 fl" style="cursor: pointer">
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
          <div class="data_title">
            <img
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
              alt=""
            />
            孔径窝深检测
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_3" />
          </div>
        </div>
        <div class="d1 fl" style="cursor: pointer">
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
          <div class="data_title">
            <img
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/末端执行器/刀具模块.png"
              alt=""
            />
            刀具磨损检测
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_4" />
          </div>
        </div>
        <div class="d1 fl" style="cursor: pointer">
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
          <div class="data_title">
            <img
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/机器人/振荡器.png"
              alt=""
            />
            机器人颤振监测
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_5" />
          </div>
        </div>
        <div class="d1 fl" style="cursor: pointer">
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
          <div class="data_title">
            <img
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
              alt=""
            />
            移动平台运行状态
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import schedule from "bluebird/js/release/schedule";
// import cookies from "vue-cookies";
export default {
  components: {},
  data() {
    return {
      productinfo:{
        flightId:'',
        productNum:'',
        holeId:'',
        lastId:0,
        toolId:''
      },
      axisinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
      },
      holemeasure: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
      },
      wdbkong:'',
      strtime:'',
      strDate: "",
      tishiAccount_style1: {
        color: "",
      },
      tishiAccount_style2: {
        color: "",
      },
      tishiAccount_style3: {
        color: "",
      },
      tishiAccount_style4: {
        color: "",
      },
      tishiAccount_style5: {
        color: "",
      },
      tishiAccount_style6: {
        color: "",
      },
      tishiAccount_style7: {
        color: "rgb(22, 243, 22)",
      },
      tishiAccount_style8: {
        color: "",
      },
      tishiAccount_style9: {
        color: "",
      },
      tishiAccount_style10: {
        color: "",
      },
      tishiAccount_style11: {
        color: "",
      },
      strDate1: "",
      strDate2: "",
      strDate3: "",
      strDate4: "",
      strDate5: "",
      strDate6: "",
      strDate7: "良好",
      strDate8: "",
      strDate9: "",
      strDate10: "",
      strDate11: "",
      timer: null,
      option_1: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return Math.floor(value.min / 2) * 2;
          },
          max: (value) => {
            return Math.ceil(value.max / 2) * 2;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "转速/rpm",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [
              8000.336, 7997.017, 7998.047, 7997.589, 8001.823, 7997.589,
              7999.763, 8002.052, 8001.709, 8001.709, 7999.763, 8001.823,
              8000.336, 8000.107, 7997.818, 8001.48, 8001.251, 7997.36,
              8001.938, 7998.505, 8000.336, 7997.017, 7998.047, 7997.589,
              8001.823, 7997.589, 7999.763, 8002.052, 8001.709, 8001.709,
              7999.763, 8001.823, 8000.336, 8000.107, 7997.818, 8001.48,
              8001.251, 7997.36, 8001.938, 7998.505, 7999.763,
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_2: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return Math.floor(value.min / 10) * 10;
          },
          max: (value) => {
            return Math.ceil(value.max / 10) * 10;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "功率/W",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [
              295.292, 238.746, 219.898, 295.292, 245.029, 263.878, 295.292,
              647.129, 238.746, 307.857, 257.595, 402.099, 257.595, 219.898,
              257.595, 364.403, 263.878, 653.411, 238.746, 276.443, 295.292,
              238.746, 219.898, 295.292, 245.029, 263.878, 295.292, 647.129,
              238.746, 307.857, 257.595, 402.099, 257.595, 219.898, 257.595,
              364.403, 263.878, 653.411, 238.746, 276.443,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [
              276.443, 295.292, 238.746, 219.898, 295.292, 245.029, 263.878,
              295.292, 647.129, 238.746, 307.857, 257.595, 402.099, 257.595,
              219.898, 257.595, 364.403, 263.878, 653.411, 238.746, 276.443,
              295.292, 238.746, 219.898, 295.292, 245.029, 263.878, 295.292,
              647.129, 238.746, 307.857, 257.595, 402.099, 257.595, 219.898,
              257.595, 364.403, 263.878, 653.411, 238.746,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#2295d4",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [
              276.443, 295.292, 238.746, 219.898, 295.292, 245.029, 263.878,
              295.292, 245.029, 263.878, 295.292, 647.129, 238.746, 307.857,
              257.595, 402.099, 257.595, 219.898, 295.292, 647.129, 238.746,
              307.857, 257.595, 402.099, 257.595, 219.898, 257.595, 364.403,
              263.878, 653.411, 238.746, 276.443, 295.292, 238.746, 219.898,

              257.595, 364.403, 263.878, 653.411, 238.746,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#f8e543",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [
              245.029, 263.878, 295.292, 647.129, 238.746, 307.857, 257.595,

              257.595, 219.898, 257.595, 364.403, 263.878, 653.411, 238.746,
              402.099, 257.595, 219.898, 295.292, 647.129, 238.746, 307.857,
              257.595, 402.099, 276.443, 295.292, 238.746, 219.898, 276.443,
              295.292, 238.746, 219.898, 295.292, 245.029, 263.878, 295.292,
              257.595, 364.403, 263.878, 653.411, 238.746,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#d2d646",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [
              245.029, 263.878, 295.292,

              364.403, 263.878, 653.411, 238.746, 295.292, 238.746, 219.898,
              276.443, 295.292, 238.746, 219.898, 295.292, 245.029, 402.099,
              257.595, 219.898, 295.292, 647.129, 238.746, 307.857, 647.129,
              238.746, 307.857, 257.595,

              257.595, 219.898, 257.595, 257.595, 402.099, 276.443,

              263.878, 295.292, 257.595, 364.403, 263.878, 653.411, 238.746,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#584a9d",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [
              245.029, 263.878, 295.292,

              364.403, 263.878, 653.411, 238.746, 295.292, 238.746, 219.898,
              276.443, 295.292, 238.746, 219.898, 295.292, 245.029, 307.857,
              257.595,

              257.595, 219.898, 257.595, 257.595, 402.099, 276.443,

              263.878, 295.292, 257.595, 364.403, 263.878, 653.411, 402.099,
              257.595, 219.898, 295.292, 647.129, 238.746, 307.857, 647.129,
              238.746,

              238.746,

              238.746,
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fea32b",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_3: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        legend: {
          data: ["孔径", "窝深"],
        },
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return Math.floor(value.min);
          },
          max: (value) => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "mm",
        },
        visualMap: {
          show: false,
          pieces: [
            // {
            //   gt: 8100.001,
            //   color: "red"
            // },
            // {
            //   lte: 8100,
            //   color: "#91cc75"
            // }
          ],
        },
        series: [
          {
            name: "孔径",
            data: [],
            type: "line",
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75",
                },
              },
            },
          },
          {
            name: "窝深",
            data: [],
            type: "line",
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fac858",
                },
              },
            },
          },
        ],
      },
      option_4: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: 0,
          max: 0.5,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "mm",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [],
            color: "#002aff",
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_5: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return Math.floor(value.min);
          },
          max: (value) => {
            return Math.ceil(value.max);
          },
          scale: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "mm",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_6: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        tooltip: {  // tooltip 用于控制鼠标滑过或点击时的提示框（下一章展开讲）
          trigger: 'axis',  
          axisPointer: { // 坐标轴指示器配置项。  
            axis: 'auto', // 指示器的坐标轴。   
            snap: true, // 坐标轴指示器是否自动吸附到点上  
           }, 
          showContent: true,  
        },  
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 9,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return Math.floor(value.min);
          },
          max: (value) => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "%",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#2295d4",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#f8e543",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#d2d646",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#584a9d",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fea32b",
                },
              },
            },
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_11: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        xAxis: {
          name: "t/s",
          type: "category",
          boundaryGap: false,
          data: [
            3.9, 3.91, 3.92, 3.93, 3.94, 3.95, 3.96, 3.97, 3.98, 3.99, 4.0,
            4.01, 4.02, 4.03, 4.04, 4.05, 4.06, 4.07, 4.08, 4.09, 4.1,
          ],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 1,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: 0,
          max: (value) => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "孔数/个",
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red",
            },
            {
              lte: 8100,
              color: "#91cc75",
            },
          ],
        },
        series: [
          {
            data: [
              0, 0, 0, 0, 0, 0, 5, 15, 80, 100, 90, 15, 5, 0, 0, 0, 0, 0, 0, 0,
              0,
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_2: {
        animation: false,
        title: [
          {
            show: false,
          },
        ],
        legend: {
          data: ["孔径"],
        },
        xAxis: {
          name: "次",
          type: "category",
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          axisLine: {
            onZero: false,
            color: "#666669",
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
        },
        yAxis: {
          axisTick: {
            show: true,
          },
          min: (value) => {
            return value.min;
          },
          max: (value) => {
            return value.max;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0",
            },
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5,
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1", //坐标线的宽度
            },
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10",
            },
          },
          type: "value",
          location: "end",
          name: "mm",
        },
        visualMap: {
          show: false,
          pieces: [
            // {
            //   gt: 8100.001,
            //   color: "red"
            // },
            // {
            //   lte: 8100,
            //   color: "#91cc75"
            // }
          ],
        },
        series: [
          {
            name: "孔径",
            data: [
              4.0, 3.99, 3.99, 3.99, 4.01, 4.01, 3.99, 4.01, 4.01, 4.01, 4.02,
              4.02, 3.97, 3.98, 4.02, 4.01,
            ],
            type: "line",
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75",
                },
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    getjindu(){
      this.$http({
      url: this.$http.adornUrl('amehdym/holeschedule/getlast'),
      method: 'get',
      }).then(({ data }) => {
        // console.log("schedule",data);
        this.strDate11 = data.holeSchedule + "%";
      })
    },
    chongji() {
      // console.log("cdscdsc");
      var date = new Date();
      var year = date.getFullYear(); //月份从0~11，所以加一
      var dateArr = [
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      for (var i = 0; i < dateArr.length; i++) {
        if (dateArr[i] >= 1 && dateArr[i] <= 9) {
          dateArr[i] = "0" + dateArr[i];
        }
      }
      this.strDate =
        year +
        "-" +
        dateArr[0] +
        "-" +
        dateArr[1] +
        " " +
        dateArr[2] +
        ":" +
        dateArr[3] +
        ":" +
        dateArr[4];
      // console.log("strDate", this.strDate);
      // this.$http({
      // url: this.$http.adornUrl('amehdym/holemeasure//chongji'),
      // method: 'get',
      // params: this.$http.adornParams({strtime:this.strDate})
      // }).then(({ data }) => {

      // })
      this.strDate7 = "良好";
      this.tishiAccount_style7.color = "rgb(22, 243, 22)";
    },
    getproductinfo() {
      this.$http({
        url: this.$http.adornUrl("amehdym/productinfo/getlast/"+this.productinfo.lastId),
        method: "get",
      }).then(({ data }) => {
        // console.log("data",data);
        if (data!='') {
        this.productinfo.flightId = data.flightId;
        this.productinfo.productNum = data.productNum;
        this.productinfo.holeId = data.holeId;
        this.productinfo.toolId = data.toolId;
        this.productinfo.lastId = data.id;
        this.tishiAccount_style1.color = "rgb(22, 132, 221)";
        this.tishiAccount_style2.color = "rgb(22, 132, 221)";
        this.tishiAccount_style3.color = "rgb(22, 132, 221)";
        this.tishiAccount_style4.color = "rgb(22, 132, 221)";
        }
      });
    },
    getkj() {
      this.$http({
        url: this.$http.adornUrl("amehdym/holemeasure/getlast"),
        method: "get",
      }).then(({ data }) => {
        // console.log(data.time);
          this.strDate5 = data.holeDia;
        if (
          this.strDate5 < Math.round(this.strDate5) * 1.05 &&
          this.strDate5 > Math.round(this.strDate5) * 0.95
        ) {
          this.tishiAccount_style5.color = "rgb(22, 243, 22)";
        } else {
          this.tishiAccount_style5.color = "rgb(245, 48, 34)";
          this.tishiAccount_style7.color = "rgb(245, 48, 34)";
          if (this.strDate7 == "良好") {
            this.strDate7 = 1;
            this.strtime = data.id;
            this.strDate8 = this.wdbkong;
            this.tishiAccount_style8.color = "rgb(245, 48, 34)";
          }
          if(this.strtime != data.id)
          {
            this.strDate7 += 1;
            this.strtime = data.time;
            this.strDate8 = this.wdbkong;
            this.tishiAccount_style8.color = "rgb(245, 48, 34)";
          }
          this.tishiAccount_style7.color = "rgb(245, 48, 34)";
        }
        this.strDate6 = data.pitDepth;
        if (
          this.strDate6 < Math.round(this.strDate6) * 1.01 &&
          this.strDate6 > Math.round(this.strDate6) * 0.99
        ) {
          this.tishiAccount_style6.color = "rgb(22, 243, 22)";
        } else {
          this.tishiAccount_style6.color = "rgb(245, 48, 34)";
          if (this.strDate7 == "良好") {
            this.strDate7 = 1;
            this.strtime = data.id;
            this.strDate8 = this.wdbkong;
            this.tishiAccount_style8.color = "rgb(245, 48, 34)";
          }
          if(this.strtime != data.id)
          {
            this.strDate7 += 1;
            this.strtime = data.time;
            this.strDate8 = this.wdbkong;
            this.tishiAccount_style8.color = "rgb(245, 48, 34)";
          }
          this.tishiAccount_style7.color = "rgb(245, 48, 34)";
        }
    })},
    // getData() {
    //   for (let i = 3; i < 7; i++) {
    //     let y = this["option_" + i].series;
    //     let len = y.length;
    //     for (let j = 0; j < len; j++) {
    //       y[j].data = this.xunhuan(y[j].data);
    //     }
    //   }
    // },
    getDatakj() {
      // this.getD();
      this.getRealtimekj("holemeasure", this.holemeasure);
      
      this.refresh0kj();
    },
    getRealtimekj(link, entity) {
      //读取实时表数据
      this.$http({
        url: this.$http.adornUrl("amehdym/" + link + "/getli/" + entity.lastId),
        method: "get",
      }).then(({ data }) => {
        entity.listCache = data;
        // console.log("listcahe",entity.listCache);
        let len = entity.listCache.length;
        if (len != 0) {
          entity.lastData = entity.listCache[len - 1];
          entity.lastId = entity.lastData.id;
          entity.lastTime = Date.parse(new Date(entity.lastData.time)) / 1000;
        }
        // console.log("this.holemeasure",this.holemeasure);
      });
    },
    refresh0kj() {
      this.refreshkj(this.holemeasure);
      this.refresh1kj(this.holemeasure, this.option_3.series[0], "holeDia");
      this.refresh1kj(this.holemeasure, this.option_3.series[1], "pitDepth");
    },
    refreshkj(entity) {
      // // console.log("this.holemeasure",this.holemeasure);
      // console.log("entity.lastId",entity.lastId);
      // console.log("entity",entity);
      // console.log("entity.lastTime",entity.lastTime);
      // console.log("entity.lastData",entity.lastData);
      // console.log("entity.listCache",entity.listCache);
      let li = entity.list.concat(entity.listCache);
      // console.log("entity.list",entity.list);
      // console.log("li",li);
      let len = li.length;
      for (let i = 0; i < len; i++) {
        if (entity.lastId - li[i].id <= 40) {
          entity.list = li.slice(i);
          entity.listCache = [];
          break;
        }
      }
    },
    refresh1kj(entity, yData, key) {
      let len = entity.list.length;
      let dataY=[];
      //设置y轴数据
      for (let i = 0; i < len; i++) {
        dataY[i] = entity.list[i][key];
      }
      // console.log("datay",dataY);
      yData.data = dataY;
    },
    getData() {
      this.getRealtime("axisinfo", this.axisinfo);
      this.refresh0();
    },
    getRealtime(link, entity) {
      //读取实时表数据
      this.$http({
        url: this.$http.adornUrl("amehdym/" + link + "/getli/" + entity.lastId),
        method: "get",
      }).then(({ data }) => {
        entity.listCache = data;
        // console.log("listcahe",entity.listCache);
        let len = entity.listCache.length;
        console.log("len",len);//300,0,0
        if (len != 0) {
          entity.lastData = entity.listCache[len - 1];
          entity.lastId = entity.lastData.id;
          console.log("entity.lastId",entity.lastId);//56359 56359
          entity.lastTime = Date.parse(new Date(entity.lastData.time)) / 1000;
          console.log("entity.lastTime",entity.lastTime);
        }
        // console.log("this.holemeasure",this.holemeasure);
        // console.log("entity.lastId",entity.lastId);//56359 56359
      });
    },
    refresh0() {
      this.refresh(this.axisinfo);
      this.refresh1(this.axisinfo, this.option_6.series[0], "current1");
      console.log("refresh0");
    },
    refresh(entity) {
      // // console.log("this.holemeasure",this.holemeasure);
      // console.log("entity.lastId",entity.lastId);
      // console.log("entity",entity);
      // console.log("entity.lastTime",entity.lastTime);
      // console.log("entity.lastData",entity.lastData);
      // console.log("entity.listCache",entity.listCache);
      let li = entity.list.concat(entity.listCache);
      console.log("entity.list",entity.list);
      console.log("li",li);
      let len = li.length;
      for (let i = 0; i < len; i++) {
        if (entity.lastTime - Date.parse(new Date(li[i].time)) / 1000 <= 40) {
          entity.list = li.slice(i);
          console.log("slice",entity.list);
          entity.listCache = [];
          break;
        }
      }
    },
    refresh1(entity, yData, key) {
      let dataX = [];
      let len = entity.list.length;
      //设置y轴数据
      for (let i = 0; i < len; i++) {
        let time = Date.parse(new Date(entity.list[i].time)) / 1000;
        let dataY = entity.list[i][key];
        let j = i + 1;
        for (; j < len; j++) {
          if (time == Date.parse(new Date(entity.list[j].time)) / 1000) {
            dataY += entity.list[j][key];
          } else break;
        }
        dataX[time - entity.lastTime + 40] = dataY / (j - i);
      }
      for (let i = 0; i < 41; i++) {
        if (!dataX[i] || i > dataX.length) {
          dataX[i] = 0;
        }
      }
      yData.data = dataX;
      console.log("datax",dataX);
    },
    // 
    // xunhuan(yData) {
    //   // console.log(yData);
    //   let k = yData.slice(1);
    //   k[60] = yData[0];
    //   return k;
    // },
    // 设置x轴坐标
    XFkj() {
      let x = [];
      for (let i = 40; i >= 0; i -= 10) {
        x[40-i] = i;
      }
        this.option_3.xAxis.data = x;
    },
    XF() {
      let x = [];
      for (let i = 40; i >= 0; i -= 10) {
        x[40-i] = i;
      }
        this.option_6.xAxis.data = x;
    },

    nonPri() {
      this.$notify({
        title: "警告",
        message: "权限不够",
        type: "warning",
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
    this.getproductinfo();
    this.getkj();
    this.getjindu();
    this.getDatakj();
      this.XFkj();
      this.XF();
    });
    const timer = setInterval(() => {
      this.getData();
    }, 2000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
    const timerr = setInterval(() => {
    this.getkj();
    this.getproductinfo();
    this.getjindu();
    this.getDatakj();
    }, 10000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timerr);
    });
  },
};
</script>
<style scoped></style>
