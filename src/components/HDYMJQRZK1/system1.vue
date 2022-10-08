<!--  -->
<template>
  <div>
    <div class="hdymsystem ">
      <div class="content1 fl">
        <div class="data1 fl" style="cursor: pointer">
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
            <div class=" ">
              <img
                src="@/assets/images/HDYMJQRZK/system.png"
                style="width:100%;height:100%;background: rgba(255, 255, 255, 0)"
              />
            </div>
          </div>
        </div>
        <div class="data2 fl" style="cursor: pointer">
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
                style="margin-left:-30px;margin-top:-6px"
                width="30px"
                height="30px"
                src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
                alt=""
              />
              孔径统计
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option_11" />
            </div>
          </div>
          <div class="d2 fl" style="cursor: pointer">
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
              137号孔径统计
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option_2" />
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
              style="margin-left:-30px;margin-top:-6px"
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
              style="margin-left:-30px;margin-top:-6px"
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
              style="margin-left:-30px;margin-top:-6px"
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
              style="margin-left:-30px;margin-top:-6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
              alt=""
            />
            底座电机运行状态
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
import cookies from "vue-cookies";
export default {
  components: {},
  data() {
    return {
      timer: null,
      option_1: {
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
      option_2: {
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
          name: "功率/W"
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
              263.878,
              653.411,
              238.746,
              276.443,

              238.746
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
              263.878,
              653.411,
              238.746,

              238.746
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
              276.443,
              295.292,
              238.746,
              219.898,
              295.292,
              245.029,
              263.878,
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

              257.595,
              364.403,
              263.878,
              653.411,
              238.746,

              238.746
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
              245.029,
              263.878,
              295.292,
              647.129,
              238.746,
              307.857,
              257.595,

              257.595,
              219.898,
              257.595,
              364.403,
              263.878,
              653.411,
              238.746,
              402.099,
              257.595,
              219.898,
              295.292,
              647.129,
              238.746,
              307.857,
              257.595,
              402.099,
              276.443,
              295.292,
              238.746,
              219.898,
              276.443,
              295.292,
              238.746,
              219.898,
              295.292,
              245.029,
              263.878,
              295.292,
              257.595,
              364.403,
              263.878,
              653.411,
              238.746,

              238.746
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
          },
          {
            data: [
              245.029,
              263.878,
              295.292,

              364.403,
              263.878,
              653.411,
              238.746,
              295.292,
              238.746,
              219.898,
              276.443,
              295.292,
              238.746,
              219.898,
              295.292,
              245.029,
              402.099,
              257.595,
              219.898,
              295.292,
              647.129,
              238.746,
              307.857,
              647.129,
              238.746,
              307.857,
              257.595,

              257.595,
              219.898,
              257.595,
              257.595,
              402.099,
              276.443,

              263.878,
              295.292,
              257.595,
              364.403,
              263.878,
              653.411,
              238.746,

              238.746
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#584a9d"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [
              245.029,
              263.878,
              295.292,

              364.403,
              263.878,
              653.411,
              238.746,
              295.292,
              238.746,
              219.898,
              276.443,
              295.292,
              238.746,
              219.898,
              295.292,
              245.029,
              307.857,
              257.595,

              257.595,
              219.898,
              257.595,
              257.595,
              402.099,
              276.443,

              263.878,
              295.292,
              257.595,
              364.403,
              263.878,
              653.411,
              402.099,
              257.595,
              219.898,
              295.292,
              647.129,
              238.746,
              307.857,
              647.129,
              238.746,

              238.746,

              238.746
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fea32b"
                }
              }
            },
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_3: {
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
      option_4: {
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
          min: 0,
          max: 0.5,
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
              0.10841108523524519,
              0.1101705183220662,
              0.11522444912580912,
              0.1214688016016847,
              0.12430839541068461,
              0.12558790100840092,
              0.1262505962909464,
              0.1303656347310034,
              0.13737071757528302,
              0.14394165023787897,
              0.14957111257949962,
              0.15593961888546218,
              0.1648006098175596,
              0.1691825754207179,
              0.17915375772453612,
              0.18590193784360326,
              0.19582297914869637,
              0.2054329541401687,
              0.207126534152138,
              0.2089679420098734,
              0.21588773318897345,
              0.22577238410847666,
              0.22976413510913077,
              0.23384120106738035,
              0.23671451866814863,
              0.2440548266487267,
              0.2520750602114882,
              0.2527257214336047,
              0.25561416605766507,
              0.25926008677405377,
              0.2622583198175109,
              0.26627323160735084,
              0.2744178422060974,
              0.28142102759195925,
              0.2913881877552355,
              0.2962935277895718,
              0.29971154784616805,
              0.30307897099357944,
              0.31196773476394,
              0.31552982490345083,
              0.3166160506669074
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_5: {
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
          scale: true,
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
              0.44,
              1.09,
              0.4,
              0.46,
              0.49,
              0.4,
              0.37,
              0.49,
              0.41,
              0.44,
              0.49,
              1.08,
              0.4,
              0.51,
              0.43,
              0.67,
              0.43,
              0.37,
              0.43,
              0.61,
              0.44,
              1.09,
              0.4,
              0.46,
              0.49,
              0.4,
              0.37,
              0.49,
              0.41,
              0.44,
              0.49,
              1.08,
              0.4,
              0.51,
              0.43,
              0.67,
              0.43,
              0.37,
              0.43,
              0.61,
              0.4
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
          }
        ]
      },
      option_6: {
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
          name: "%"
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
              99.48,
              98.63,
              99.51,
              98.16,
              96.06,
              95.39,
              99.19,
              99.73,
              95.47,
              97.12,
              97.86,
              97.98,
              95.28,
              99.46,
              95.48,
              97.41,
              95.62,
              98.79,
              99.27,
              98.51,
              95.07,
              99.96,
              99.91,
              96.75,
              98.26,
              96.79,
              96.57,
              99.33,
              99.7,
              96.34,
              95.58,
              97.04,
              98.79,
              96.94,
              98.17,
              95.64,
              97.61,
              96.59,
              96.83,
              98.93,
              96.7
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
            data: [],
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
            data: [],
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
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#d2d646"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#584a9d"
                }
              }
            },
            type: "line",
            showSymbol: false
          },
          {
            data: [],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#fea32b"
                }
              }
            },
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_11: {
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
          data: [
            3.9,
            3.91,
            3.92,
            3.93,
            3.94,
            3.95,
            3.96,
            3.97,
            3.98,
            3.99,
            4.0,
            4.01,
            4.02,
            4.03,
            4.04,
            4.05,
            4.06,
            4.07,
            4.08,
            4.09,
            4.1
          ],
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
            interval: 1,
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
          min: 0,
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
          name: "孔数/个"
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
              0,
              0,
              0,
              0,
              0,
              0,
              5,
              15,
              80,
              100,
              90,
              15,
              5,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_2: {
        animation: false,
        title: [
          {
            show: false
          }
        ],
        legend: {
          data: ["孔径"]
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
            return value.min;
          },
          max: value => {
            return value.max;
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
              4.01
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
          }
        ]
      }
    };
  },
  methods: {
    getData() {
      for (let i = 3; i < 7; i++) {
        let y = this["option_" + i].series;
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
    // 设置x轴坐标
    XF() {
      let x = [];
      for (let i = 0; i <= 40; i += 5) {
        x[i] = i;
      }
      for (let i = 3; i < 7; i++) {
        this["option_" + i].xAxis.data = x;
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
<style scoped></style>
