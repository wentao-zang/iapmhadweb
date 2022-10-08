<template>
  <div class="fasten">
    <div class="tree_content"></div>
    <div class="data_content fl">
      <div class="zdzxq fl t_btn6" style="cursor: pointer">
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
            src="@/assets/images/HDYMJQRZK/末端执行器/末端执行器.png"
            alt=""
          />
          末端执行器
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
              <td>主轴编号</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                主轴开关
              </td>
              <td>开</td>
              <td>
                快换法兰开关
              </td>
              <td>开</td>
              <td>
                油雾开关
              </td>
              <td>开</td>
            </tr>
            <tr>
              <td>
                换刀阀门开关
              </td>
              <td>开</td>
              <td>
                回刀阀门开关
              </td>
              <td>开</td>
              <td>
                压脚气缸开关
              </td>
              <td>开</td>
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
              <el-select v-model="value1" @change="change1">
                <el-option
                  v-for="item in options1"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
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
              <el-select v-model="value2" @change="change2">
                <el-option
                  v-for="item in options2"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
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
                src="@/assets/images/HDYMJQRZK/末端执行器/压脚.png"
                alt=""
              />
              压脚位置
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
                src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
                alt=""
              />
              孔径窝深信息
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
                src="@/assets/images/HDYMJQRZK/末端执行器/传感器.png"
                alt=""
              />
              位移传感器
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
                src="@/assets/images/HDYMJQRZK/机器人/角度.png"
                alt=""
              />
              方向角
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
export default {
  inject: ["reload"],
  components: {},
  data() {
    //这里存放数据
    return {
      time: null,
      spinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      posinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      productinfo: {},
      statusinfo: {},
      footpressinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      value1: "主轴转速",
      value2: "进给轴位置",
      options1: [
        { label: "主轴转速", name: "转速/rpm", key: "rotvel" },
        { label: "主轴电流", name: "电流/A", key: "current" },
        { label: "主轴功率", name: "功率/W", key: "power" },
        { label: "主轴转矩", name: "N·M", key: "torque" }
      ],
      options2: [
        {
          label: "进给轴位置",
          name: "mm",
          key: "pos",
          en: "spinfo"
        },
        { label: "工位切换轴位置", name: "mm", key: "x11", en: "posinfo" }
      ],
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
          name: "mm"
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
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -193.944,
              -171.224,
              -209.552,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -220.984,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536,
              -12.536
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
          name: "mm"
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
              30.29,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              30.128,
              18.137,
              30.065,
              30.065,
              30.065,
              30.065,
              18.137,
              18.137,
              30.065,
              27.751,
              18.137,
              18.137,
              18.137,
              18.137,
              18.137,
              18.137,
              27.883,
              28.142,
              28.47,
              27.067,
              21.112,
              18.137,
              18.137,
              18.137
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
        legend: {
          data: ["孔径", "窝深"]
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
          name: "mm"
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
          ]
        },
        series: [
          {
            name: "孔径",
            data: [
              4.0,
              3.99,
              3.99,
              3.99,
              4.01,
              4.01,
              3.99,
              4.01,
              4.01,
              4.01,
              4.02,
              4.02,
              3.97,
              3.98,
              4.02,
              4.01,
              4.01,
              3.98,
              3.99,
              4.03,
              4.0,
              3.98,
              4.01,
              4.03,
              3.97,
              3.98,
              4.03,
              3.98,
              4.03,
              4.02,
              4.01,
              3.99,
              4.01,
              3.99,
              3.97,
              3.97,
              4.01,
              4.02,
              3.99,
              3.98,
              4.0
            ],
            type: "line",
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75"
                }
              }
            }
          },
          {
            name: "窝深",
            data: [
              0.893,
              0.871,
              0.888,
              0.887,
              0.927,
              0.862,
              0.914,
              0.877,
              0.938,
              0.939,
              0.891,
              0.924,
              0.912,
              0.9,
              0.928,
              0.868,
              0.91,
              0.863,
              0.875,
              0.917,
              0.93,
              0.93,
              0.872,
              0.918,
              0.862,
              0.879,
              0.867,
              0.876,
              0.907,
              0.934,
              0.919,
              0.917,
              0.894,
              0.87,
              0.868,
              0.877,
              0.897,
              0.928,
              0.918,
              0.877,
              0.892
            ],
            type: "line",
            showSymbol: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fac858"
                }
              }
            }
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
          name: "mm"
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
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              36.079,
              35.553,
              35.549,
              35.553,
              35.549,
              35.553,
              35.553,
              35.549,
              35.545,
              35.553,
              35.553,
              35.553,
              35.549,
              35.553,
              35.553,
              35.553,
              35.387,
              35.455,
              35.387,
              35.421,
              35.406,
              35.395,
              35.406,
              35.406,
              35.425,
              35.406,
              35.41,
              35.413,
              35.41,
              35.417,
              35.406,
              35.413
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              34.496,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              36.414,
              35.993,
              36.049,
              35.993,
              35.993,
              36.049,
              36.049,
              36.045,
              36.049,
              36.049,
              36.053,
              36.053,
              36.053,
              36.042,
              36.045,
              36.045,
              36.053
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#2295d4"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              34.842,
              35.293,
              35.297,
              35.297,
              35.297,
              35.293,
              35.293,
              35.297,
              35.297,
              35.293,
              35.297,
              35.293,
              35.297,
              35.297,
              35.293,
              35.297,
              35.391,
              35.383,
              35.459,
              35.395,
              35.455,
              35.459,
              35.459,
              35.459,
              35.455,
              35.455,
              35.459,
              35.455,
              35.459,
              35.455,
              35.459,
              35.455
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#f8e543"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              36.978,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.124,
              35.538,
              35.481,
              35.534,
              35.549,
              35.481,
              35.485,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481,
              35.481
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#d2d646"
                }
              }
            },
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
              0.412,
              0.49,
              0.491,
              0.491,
              0.49,
              0.487,
              0.487,
              0.49,
              0.489,
              0.485,
              0.486,
              0.493,
              0.489,
              0.485,
              0.482,
              0.483,
              0.489,
              0.487,
              0.49,
              0.585,
              0.586,
              0.588,
              0.581,
              0.589,
              0.59,
              0.608,
              0.703,
              0.419,
              0.42,
              0.419,
              0.421,
              0.423,
              0.42,
              0.681,
              0.393,
              0.43,
              0.427,
              0.43,
              0.405,
              0.405,
              0.406
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#91cc75"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              0.417,
              0.493,
              0.493,
              0.492,
              0.492,
              0.489,
              0.489,
              0.492,
              0.49,
              0.485,
              0.487,
              0.495,
              0.49,
              0.485,
              0.482,
              0.484,
              0.489,
              0.489,
              0.492,
              0.598,
              0.6,
              0.602,
              0.593,
              0.602,
              0.605,
              0.62,
              0.705,
              0.422,
              0.422,
              0.421,
              0.422,
              0.424,
              0.421,
              0.686,
              0.394,
              0.43,
              0.427,
              0.43,
              0.407,
              0.407,
              0.409
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#2295d4"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              0.027,
              0.027,
              0.025,
              0.025,
              0.021,
              0.017,
              0.025,
              0.021,
              0.014,
              0.019,
              0.025,
              0.023,
              0.014,
              0.01,
              0.012,
              0.021,
              0.017,
              0.027,
              0.124,
              0.124,
              0.128,
              0.118,
              0.128,
              0.132,
              0.118,
              0.05,
              0.041,
              0.033,
              0.033,
              0.027,
              0.037,
              0.029,
              0.064,
              0.019,
              0.002,
              0.006,
              0.004,
              0.037,
              0.037,
              0.039,
              0.035
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#f8e543"
                }
              }
            },
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_1: [
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
      option_2: [
        263.878,
        653.411,
        238.746,
        276.443,
        295.292,
        238.746,
        219.898,
        295.292,
        245.029,
        263.878,
        295.292,
        647.129,
        238.746,
        307.857,
        257.595,
        402.099,
        257.595,
        219.898,
        257.595,
        364.403,
        263.878,
        653.411,
        238.746,
        276.443,
        295.292,
        238.746,
        219.898,
        295.292,
        245.029,
        263.878,
        295.292,
        647.129,
        238.746,
        307.857,
        257.595,
        402.099,
        257.595,
        219.898,
        257.595,
        364.403,
        238.746
      ],
      option_3: [
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
      option_4: [
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
      option_5: [
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -193.944,
        -171.224,
        -209.552,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -220.984,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536,
        -12.536
      ],
      option_6: [
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        205,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78,
        118.78
      ],
      options1: [
        { label: "主轴转速", name: "转速/rpm", key: "option_1" },
        { label: "主轴电流", name: "电流/A", key: "option_3" },
        { label: "主轴功率", name: "功率/W", key: "option_2" },
        { label: "主轴转矩", name: "N·M", key: "option_4" }
      ],
      options2: [
        {
          label: "进给轴位置",
          name: "mm",
          key: "option_5"
        },
        { label: "工位切换轴位置", name: "mm", key: "option_6" }
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
      for (let i = 1; i < 7; i++) {
        this["option_" + i] = this.xunhuan(this["option_" + i]);
      }
    },
    xunhuan(yData) {
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
    },
    change1(data) {
      for (let i of this.options1) {
        if (i.label == data) {
          this.option1.yAxis.name = i.name;
          this.option1.series[0].data = this[i.key];
        }
      }
    },
    change2(data) {
      for (let i of this.options2) {
        if (i.label == data) {
          this.option2.yAxis.name = i.name;
          this.option2.series[0].data = this[i.key];
        }
      }
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
/* .data_content{
  border:solid #ffff43 2px;
} */

.zdzxq .robot_table table {
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
  height: 600px;
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
.el-button {
  margin: 2px;
  margin-left: 10px;
  width: 130px;
  height: 37px;
}
/deep/ .el-input__inner {
  font-size: 20px;
  height: 36px;
  color: white;
  font-family: song;
  background-color: transparent;
  border-radius: 20px;
  text-align: center;
}
.zdzxq .fasten_title {
  width: 400px;
  height: 50px;
  line-height: 50px;
  background-color: #2c58a6;
  border-radius: 18px;
  position: absolute;
  top: -25px;
  left: 38%;
  margin-left: -90px;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  box-sizing: border-box;
  padding-left: 20px;
  z-index: 1000;
  text-align: center;
}
</style>
