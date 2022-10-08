<!--  -->
<template>
  <div class="deviceState">
    <div class="data_content fl">
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
          <div class="content1_title fl">
            架次<br />
            <div class="fr divData" style=" background:#3399ff">
              <div>&nbspflightId1&nbsp</div>
            </div>
          </div>
        </div>
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
          <div class="content1_title">
            孔号<br />
            <div class="fr divData" style=" background:#3399ff">
              &nbspholeId1&nbsp
            </div>
          </div>
        </div>
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
          <div class="content1_title">
            工艺流程编号<br />
            <div class="fr divData" style=" background:#3399ff">
              &nbsptaskId1&nbsp
            </div>
          </div>
        </div>
        <div class="data4 fl" style="cursor: pointer">
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
          <div class="content1_text fl">
            <div class="fl" style="height:100%;">
              <img
                src="@/assets/images/warn.png"
                style="width:100%;height:80%;background: rgba(255, 255, 255, 0)"
              />
            </div>
            <div class="fl">&nbsp</div>
            <br />
            <div class="fl">&nbsp</div>
          </div>
          <div class="content1_button fr">
            <el-row>
              <el-button type="danger" round size="large" @click="sub"
                >确定执行</el-button
              >
            </el-row>
          </div>
        </div>
      </div>
      <div class="content2 fl">
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
            <v-chart class="chart" :option="option_1" />
          </div>
        </div>
        <div class="data2 fl" style="cursor: pointer">
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
          <div class="chartDiv">
            <v-chart class="chart" :option="pie1" />
          </div>
        </div>
        <div class="data3 fl" style="cursor: pointer">
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
            <v-chart class="chart" :option="option_2" />
          </div>
        </div>
        <div class="data4 fl" style="cursor: pointer">
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
          <div class="chartDiv">
            <v-chart class="chart" :option="pie1" />
          </div>
        </div>
      </div>
      <div class="content3 fl">
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
          <div class="data_title">
            <img
              style="margin-left:-30px;margin-top:-6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/机器人/加速度.png"
              alt=""
            />
            机器人各轴角度
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_3" />
          </div>
        </div>
        <div class="data2 fl" style="cursor: pointer">
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
            机器人各轴电流
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_4" />
          </div>
        </div>
        <div class="data3 fl" style="cursor: pointer">
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
              src="@/assets/images/HDYMJQRZK/机器人/功率.png"
              alt=""
            />
            机器人各轴功率
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_5" />
          </div>
        </div>
        <div class="data4 fl" style="cursor: pointer">
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
            机器人各轴温度
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_6" />
          </div>
        </div>
      </div>
      <div class="content4 fl">
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
          <div class="data_title">
            <img
              style="margin-left:-30px;margin-top:-6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/机器人/加速度.png"
              alt=""
            />
            底座运动加速度
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_7" />
          </div>
        </div>
        <div class="data2 fl" style="cursor: pointer">
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
            底座电机电流
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_8" />
          </div>
        </div>
        <div class="data3 fl" style="cursor: pointer">
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
              src="@/assets/images/HDYMJQRZK/机器人/功率.png"
              alt=""
            />
            底座电机功率
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_9" />
          </div>
        </div>
        <div class="data4 fl" style="cursor: pointer">
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
            <v-chart class="chart" :option="option_10" />
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
      privilegeId: "B",
      productinfo: {},
      option_10info: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      ydptinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
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
      option_3: {
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
            return Math.floor(value.min / 10) * 10;
          },
          max: value => {
            return Math.ceil(value.max / 10) * 10;
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
          name: "°"
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
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.9317,
              -53.95433,
              -53.95433,
              -53.95433,
              -53.95433,
              -53.95433,
              -53.95433,
              -53.95433,
              -55.0072,
              -54.76573,
              -54.76573,
              -54.76573,
              -54.76573,
              -54.76573,
              -54.76573,
              -55.48156,
              -55.69017,
              -56.15459,
              -53.9954,
              -54.9998,
              -56.35502,
              -56.35502,
              -56.35502,
              -55.10021,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793,
              -53.91793
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
              -60.37741,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.52302,
              -60.8223,
              -61.29383,
              -61.29383,
              -61.29383,
              -61.29383,
              -61.29383,
              -61.29383,
              -61.29383,
              -59.95636,
              -59.71736,
              -59.71736,
              -59.71736,
              -59.71736,
              -59.71736,
              -59.71736,
              -59.25364,
              -58.11058,
              -56.88779,
              -58.76965,
              -57.00629,
              -54.81172,
              -54.81172,
              -54.81172
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
              112.50037,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.68699,
              113.78077,
              113.92163,
              113.92163,
              113.92163,
              113.92163,
              113.92163,
              113.92163,
              113.92163,
              111.62818,
              112.17555,
              112.17555,
              112.17555,
              112.17555,
              112.17555,
              112.17555,
              110.41635,
              109.49035,
              108.24667,
              113.58738,
              111.30015,
              107.38748,
              107.38748,
              107.38748
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
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.31604,
              -0.19068,
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
              0,
              0,
              0,
              0,
              0,
              -0.35857,
              -0.28263,
              -0.27956,
              -0.00759,
              -0.38419,
              -0.38419,
              -0.31604,
              -0.31604
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
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              36.97649,
              37.13454,
              37.3722,
              37.3722,
              37.3722,
              37.3722,
              37.3722,
              37.3722,
              37.3722,
              38.32818,
              37.5418,
              37.5418,
              37.5418,
              37.5418,
              37.5418,
              37.5418,
              38.83728,
              38.77633,
              38.76207,
              35.30121,
              35.70873,
              37.58318,
              37.58318,
              36.97649,
              36.97649
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
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.63272,
              126.39595,
              126.04567,
              126.04567,
              126.04567,
              126.04567,
              126.04567,
              126.04567,
              126.04567,
              124.9928,
              125.23427,
              125.23427,
              125.23427,
              125.23427,
              125.23427,
              125.23427,
              124.51844,
              125.11784,
              124.49934,
              126.51539,
              125.00432,
              124.3483,
              124.3483,
              124.3483,
              126.63272
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
          name: "电流/I"
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
              0.814,
              1.736,
              0.674,
              0.798,
              0.938,
              0.62,
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
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,

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
              0.814,
              1.736,

              0.698,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,

              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.674,
              0.798,
              0.938,
              0.62,
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
              0.992,
              0.736,
              0.721,
              0.752,
              0.938,
              0.674
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
              0.814,
              1.736,
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
              0.992,
              0.736,
              0.721,
              0.752,
              0.698,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,

              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.674,
              0.798,
              0.938,
              0.62,
              0.806,
              0.992,

              0.938,
              0.674
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
              0.69,
              0.853,

              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.674,
              0.798,
              0.938,
              0.62,
              0.806,
              0.992,

              0.938,
              0.814,
              1.736,
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
              0.992,
              0.736,
              0.721,
              0.752,
              0.698,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,

              0.674
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
              0.69,
              0.853,

              0.729,
              0.736,
              0.667,
              0.736,
              1.845,
              0.69,
              0.853,
              0.806,
              0.798,
              0.938,
              0.62,
              0.992,
              0.736,
              0.721,
              0.752,
              0.698,
              0.698,
              0.729,
              0.736,
              0.667,
              0.736,
              1.845,

              0.674,
              0.674,
              0.798,
              0.938,
              0.62,
              0.806,
              0.992,

              0.938,
              0.814,
              1.736,
              0.736,
              0.721,
              0.752,
              0.938,
              0.814,
              1.736,
              0.674
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
              29.22540050248827,
              29.949754161044936,
              30.016918531745866,
              30.730067617773546,
              30.244379195465445,
              30.127861179554195,
              30.6131839603945,
              29.66694791280424,
              29.664354473009872,
              28.417908230103087,
              28.679588694118447,
              29.293276201585204,
              29.899556317437188,
              29.50528391637976,
              30.379544303408633,
              29.79808164693986,
              29.899434333451868,
              29.894970711962706,
              29.952807420166764,
              30.651157544911335,
              30.624205096703832,
              31.55590342984291,
              31.396333371222216,
              30.857366541086563,
              30.840999622630353,
              30.50120163466123,
              30.233178534979963,
              30.626011948705198,
              30.241783648280634,
              31.087576007575887,
              31.712081690705418,
              32.34756333292012,
              31.6124508970684,
              31.401997977693185,
              31.03820591440877,
              30.95643860724121,
              30.910965023921936,
              31.10976036489775,
              31.083624465573255,
              31.393209579409753,
              31.90315342020564
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
              29.130724261771743,
              29.906612308026148,
              30.750503430884628,
              30.6346274928905,
              30.3289305207928,
              30.781578120601402,
              30.017046069804355,
              30.222337042357818,
              29.110376606828016,
              28.951681879024076,
              28.81422458576983,
              29.026720799947434,
              29.4799300125488,
              30.03022404839252,
              29.475616756632846,
              29.671097572223687,
              29.6165072694051,
              29.055476753651618,
              29.868123421495568,
              30.03098169079832,
              30.69956392655825,
              31.397102491515962,
              31.463162923956357,
              30.74663374361245,
              30.92941454061429,
              30.756344678330322,
              30.293948980236745,
              29.913067509432857,
              30.639040007855986,
              31.174149407810148,
              31.881716537503923,
              31.56441058996386,
              32.31076641368905,
              31.23366717019758,
              31.65911158298718,
              31.443430642535322,
              30.62717582331719,
              30.337121848450703,
              31.454562746386653,
              31.86920304665233,
              31.663836285334483
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
              28.950081085975846,
              29.66497912526268,
              28.89995928133031,
              29.641193083025545,
              30.189702314384604,
              30.230424793299257,
              30.22381199199636,
              29.091582358932538,
              28.612477261095087,
              28.05673874911037,
              28.277207448638816,
              29.029151571696733,
              29.090637946987457,
              28.628664082274753,
              29.37906793595394,
              29.30047487863036,
              29.300805740654322,
              29.168991337976752,
              29.114646024488945,
              28.97146095098065,
              29.65306062733094,
              29.76243111357922,
              30.014667660524896,
              29.86687456804158,
              29.782401710816078,
              29.789037079671033,
              29.1711345002575,
              29.07164334686501,
              30.368313617919696,
              29.953913102965185,
              31.281966767720355,
              30.840696352244482,
              31.644055881522632,
              31.140683582906,
              30.500008486360716,
              29.976765290466325,
              29.594069665440074,
              29.943827887336084,
              29.826130831755055,
              31.31213739943066,
              31.777548786628138
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
              31.079288301911106,
              31.924648218378916,
              31.37106563479358,
              31.769918673148894,
              32.34901711211986,
              32.25030317849245,
              32.31677162617544,
              31.337532236615548,
              30.78589032933836,
              30.55447970581147,
              30.30567059981523,
              31.05655396990085,
              31.48595243572033,
              30.789757184605605,
              31.854069447288623,
              31.722790485994526,
              31.714193965320263,
              31.22462828419657,
              31.345904934073808,
              31.145849823757253,
              31.9841200526175,
              31.991594995252036,
              32.36109879877385,
              32.18244009669187,
              32.05880334997104,
              31.92816437908078,
              31.566518653180847,
              31.378933729396973,
              32.81554291935668,
              32.12176069800301,
              33.37548623445599,
              32.841346120610055,
              34.12201623842879,
              33.29596008205552,
              32.70779120599305,
              32.29451829246985,
              32.00907730204534,
              32.10434594585887,
              31.92968289106512,
              33.36543377747921,
              34.25611915068316
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
              32.41194771781338,
              32.88709361991208,
              32.00547467249597,
              32.977566466408284,
              33.21558542689664,
              33.28740473659224,
              33.24735456530658,
              32.28130594323474,
              31.99642629425188,
              31.556180265358858,
              31.46251532516481,
              32.365628420194916,
              32.11391016704207,
              32.040495497280865,
              32.557962874506416,
              32.69285298379132,
              32.46810874026151,
              32.58652955300257,
              32.27676556364955,
              32.002518846222166,
              32.73421916761371,
              32.96307414070741,
              33.50126161033107,
              33.326126316842064,
              32.90711480146356,
              33.12416851148734,
              32.31249873387877,
              32.125509331571095,
              33.49529135861452,
              33.3046408871908,
              34.57703308559904,
              33.89247108488057,
              34.93275004533281,
              34.62966397679394,
              33.85666866160095,
              33.22689203971408,
              32.688062222653635,
              33.05926104053522,
              32.83267039486214,
              34.56959825741213,
              34.90406360290191
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
              28.43300424971801,
              28.832350367954962,
              28.507127850513303,
              28.770706349838903,
              29.80507401825556,
              29.939861212491728,
              29.87280728267434,
              28.38397769226087,
              27.66655070736704,
              27.159735639598818,
              28.209817624581802,
              28.12354774800263,
              28.21180859878504,
              28.028459621707622,
              28.930319325408927,
              29.119124617123525,
              28.745726627914646,
              28.561280939367574,
              28.7692796802199,
              28.766863999365096,
              29.259575641183666,
              28.833424937806242,
              29.47056080454926,
              29.464614853139704,
              29.714546176624715,
              28.96042301894819,
              29.09350582751051,
              28.739470258193005,
              29.989335998379154,
              28.991369102867964,
              30.60386561908614,
              30.691939692727104,
              31.57634498155399,
              30.553453258155532,
              30.094101282018716,
              29.568157320846513,
              29.06127971240829,
              29.128782994715237,
              29.421412221449952,
              30.653762796282603,
              31.455348292908422
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
      option_7: {
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
      option_8: {
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
      option_9: {
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
            color: "#002aff",
            type: "line",
            showSymbol: false
          }
        ]
      },
      option_10: {
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
      pie1: {
        tooltip: {
          trigger: "item"
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            // fontSize: 5
            color: "#fff" //图例字体颜色等
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 1
            },
            color: ["#91cc75", "#ee6666", "#fac858"],
            label: {
              show: false,
              option_10ition: "center"
            },

            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: "优秀" },
              { value: 50, name: "良好" },
              { value: 50, name: "故障" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getData() {
      for (let i = 1; i < 11; i++) {
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

      this.option_1.xAxis.data = x;
      this.option_2.xAxis.data = x;
      this.option_3.xAxis.data = x;
      this.option_5.xAxis.data = x;
      this.option_4.xAxis.data = x;
      this.option_6.xAxis.data = x;
      this.option_9.xAxis.data = x;
      this.option_8.xAxis.data = x;
      this.option_7.xAxis.data = x;
      this.option_10.xAxis.data = x;
    },
    sub() {
      if (cookies.get("user").privilegeId > this.privilegeId) {
        this.nonPri();
        return;
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
