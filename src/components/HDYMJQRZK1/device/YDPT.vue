<template>
  <div class="fasten">
    <div class="tree_content"></div>
    <div class="data_content fl">
      <div class="fasten_content fl t_btn6" style="cursor: pointer">
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
            style="margin-left:-30px;margin-top:-6px"
            width="30px"
            height="30px"
            src="@/assets/images/HDYMJQRZK/移动平台/移动平台.png"
            alt=""
          />
          移动平台
        </div>
        <div class="robot_table t_btn8">
          <table>
            <tr>
              <td>机型</td>
              <td>aircraftId1</td>
              <td>架次</td>
              <td>flightID1</td>
              <td>产品名称</td>
              <td>productName1</td>
            </tr>
            <tr>
              <td>工艺参数</td>
              <td>taskId1</td>
              <td>孔号</td>
              <td>holeId1</td>
              <td>平台位置</td>
              <td>7</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="data_bottom fl">
        <div class="bottom_content1 fl">
          <div class="data1 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/移动平台/速度.png"
                alt=""
              />
              平台移动速度
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option1" />
            </div>
          </div>
          <div class="data2 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/加速度.png"
                alt=""
              />
              平台移动加速度
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option2" />
            </div>
          </div>
          <div class="data3 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
                alt=""
              />
              电机转速
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option3" />
            </div>
          </div>
        </div>
        <div class="bottom_content2 fl">
          <div class="data1 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/电流.png"
                alt=""
              />
              电机电流
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option4" />
            </div>
          </div>
          <div class="data2 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
                alt=""
              />
              电机扭矩
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option5" />
            </div>
          </div>
          <div class="data3 fl t_btn6" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/温度.png"
                alt=""
              />
              电机温度
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/tablestyle1.css";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      ydptinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      productinfo: {},
      option1: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min / 10) * 10;
          },
          max: value => {
            return Math.ceil(value.max / 10) * 10;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "mm/s"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              -100,
              -100,
              0,
              -100,
              -100,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              -100,
              -100,
              0,
              -100,
              -100,
              0,
              0,
              -100,
              0,
              0,
              -100,
              -100,
              0,
              0,
              -100,
              -100,
              0,
              0,
              -100,
              -100,
              0,
              -100,
              0,
              -100,
              -100,
              -100
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option2: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min / 2) * 2;
          },
          max: value => {
            return Math.ceil(value.max / 2) * 2;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "mm/s^-2"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              8000.336,
              7997.017,
              7998.047,
              7997.589,
              8001.823,
              7997.589,
              7999.763,
              8002.052,
              8001.709,
              8001.709,
              7999.763,
              8001.823,
              8000.336,
              8000.107,
              7997.818,
              8001.48,
              8001.251,
              7997.36,
              8001.938,
              7998.505,
              8000.336,
              7997.017,
              7998.047,
              7997.589,
              8001.823,
              7997.589,
              7999.763,
              8002.052,
              8001.709,
              8001.709,
              7999.763,
              8001.823,
              8000.336,
              8000.107,
              7997.818,
              8001.48,
              8001.251,
              7997.36,
              8001.938,
              7998.505,
              7999.763
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option3: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min / 2) * 2;
          },
          max: value => {
            return Math.ceil(value.max / 2) * 2;
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "转速/rpm"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              8000.336,
              7997.017,
              7998.047,
              7997.589,
              8001.823,
              7997.589,
              7999.763,
              8002.052,
              8001.709,
              8001.709,
              7999.763,
              8001.823,
              8000.336,
              8000.107,
              7997.818,
              8001.48,
              8001.251,
              7997.36,
              8001.938,
              7998.505,
              8000.336,
              7997.017,
              7998.047,
              7997.589,
              8001.823,
              7997.589,
              7999.763,
              8002.052,
              8001.709,
              8001.709,
              7999.763,
              8001.823,
              8000.336,
              8000.107,
              7997.818,
              8001.48,
              8001.251,
              7997.36,
              8001.938,
              7998.505,
              7999.763
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option4: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min);
          },
          max: value => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "电流/A"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              0.814,
              1.736,
              0.674,
              0.798,
              0.938,
              0.62,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.992,
              0.736,
              0.721,
              0.752,
              0.938,
              0.814,
              1.736,
              0.674,
              0.798,
              0.938,
              0.62,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.992,
              0.736,
              0.721,
              0.752,
              0.938,
              0.674
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option5: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min);
          },
          max: value => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "N·m"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              0.316,
              0.756,
              0.296,
              0.319,
              0.389,
              0.293,
              0.296,
              0.339,
              0.296,
              0.296,
              0.326,
              0.776,
              0.289,
              0.389,
              0.323,
              0.449,
              0.293,
              0.289,
              0.323,
              0.423,
              0.299,
              0.989,
              0.303,
              0.326,
              0.316,
              0.756,
              0.296,
              0.319,
              0.389,
              0.293,
              0.296,
              0.339,
              0.296,
              0.296,
              0.326,
              0.776,
              0.289,
              0.389,
              0.323,
              0.449,
              0.293
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option6: {
        animation: false,
        title: [
          {
            show: false
          }
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
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            interval: 4,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#fff", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          }
        },
        yAxis: {
          axisTick: {
            show: true
          },
          min: value => {
            return Math.floor(value.min);
          },
          max: value => {
            return Math.ceil(value.max);
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ccc0"
            }
          },
          axisLine: {
            show: true,
            color: "#666669",
            nameTextStyle: {
              fontSize: 5
            },
            lineStyle: {
              type: "solid",
              color: "#EEEEF1", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              show: true,
              fontSize: "10"
            }
          },
          type: "value",
          location: "end",
          name: "温度/℃"
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 8100.001,
              color: "red"
            },
            {
              lte: 8100,
              color: "#91cc75"
            }
          ]
        },
        series: [
          {
            data: [
              29.083,
              29.749,
              30.353,
              30.595,
              30.606,
              30.49,
              30.324,
              30.15,
              29.239,
              28.863,
              28.921,
              29.167,
              29.673,
              29.97,
              29.933,
              29.467,
              29.413,
              29.489,
              29.745,
              30.245,
              30.802,
              31.257,
              31.311,
              31.207,
              31.011,
              30.78,
              30.566,
              30.407,
              30.7,
              31.152,
              31.655,
              31.937,
              31.876,
              31.691,
              31.442,
              31.16,
              30.914,
              30.816,
              31.156,
              31.63,
              32.028
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      tableData1: [
        {
          name: "数据条编号",
          data: "Number1"
        },
        {
          name: "孔号",
          data: "Hole1"
        }
      ],
      tableData2: [
        {
          name: "飞机编号",
          data: "Plane1"
        },
        {
          name: "刀具编号",
          data: "CEDrill1"
        }
      ],
      tableData3: [
        {
          name: "产品内部id",
          data: "id1"
        }
      ],
      tableData4: [
        {
          name: "工艺流程编号",
          data: "Process1"
        }
      ]
    };
  },
  methods: {
    getData() {
      for (let i = 1; i < 7; i++) {
        let y = this["option" + i].series;
        let len = y.length;
        for (let j = 0; j < len; j++) {
          y[j].data = this.xunhuan(y[j].data);
        }
      }
    },
    xunhuan(yData) {
      // console.log(yData);
      let k = yData.slice(1);
      k[40] = yData[0];
      return k;
    },
    XF() {
      let x = [];
      for (let i = 0; i <= 40; i += 5) {
        x[i] = i;
      }
      this.option1.xAxis.data = x;
      this.option2.xAxis.data = x;
      this.option3.xAxis.data = x;
      this.option4.xAxis.data = x;
      this.option5.xAxis.data = x;
      this.option6.xAxis.data = x;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.XF();
    });
    const timer = setInterval(() => {
      this.getData();
    }, 1000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  }
};
</script>
<style scoped>
.data_content .fasten_content {
  height: 170px;
  /* border:solid #ffff43 2px; */
}
.data_content .fasten_content .robot_table table {
  width: 100%;
  margin-top: 40px;
  /* border:solid #ffff43 2px; */
}

th {
  font-size: 25px;
  font-weight: 600;
  color: #61d2f7;
  /* text-align: center; */
  line-height: 50px;
  /* border:solid #ffff43 2px; */
}

td {
  font-size: 25px;
  /* font-weight: 600; */
  color: rgb(245, 241, 241);
  text-align: left;
  line-height: 50px;
}
td:nth-child(1),
td:nth-child(3),
td:nth-child(5) {
  width: 12%;
  font-size: 25px;
  font-weight: 600;
  color: #61d2f7;
  padding-left: 20px;
  line-height: 50px;
}
td:nth-child(2),
td:nth-child(4),
td:nth-child(6) {
  width: 10%;
  font-size: 25px;
  font-weight: 600;
  padding-left: 10px;
  line-height: 50px;
}
.data_bottom {
  width: 90%;
  height: 700px;
  margin-left: 80px;
  margin-top: 3%;
  /* border:solid #ffff43 2px; */
}
.data_bottom .bottom_content1 {
  width: 100%;
  height: 45%;
  /* margin-left: -150px; */
  /* border:solid #ffff43 2px; */
}
.data_bottom .bottom_content2 {
  width: 100%;
  height: 45%;
  margin-top: 3%;
  /* border:solid #ffff43 2px; */
}
.data_bottom .bottom_content1 > div {
  width: 31%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #2c58a6;
  position: relative;
  box-shadow: 0 0 10px #2c58a6;
  /* margin-left: -10%; */
  /* border:solid #ffff43 2px; */
}
.data_bottom .bottom_content2 > div {
  width: 31%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #2c58a6;
  position: relative;
  box-shadow: 0 0 10px #2c58a6;
  /* margin-left: -10%; */
  /* border:solid #ffff43 2px; */
}
.data2,
.data3 {
  margin-left: 3.5%;
}
.data_title {
  width: 245px;
  height: 35px;
  line-height: 33px;
  background-color: #2c58a6;
  border-radius: 18px;
  position: absolute;
  top: -17px;
  left: 40%;
  margin-left: -90px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  padding-left: 0px;
  z-index: 1000;
  text-align: center;
}
</style>
