<!--  -->
<template>
  <div>
    <div class="data_content ">
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
            <div class="fl">&nbsp&nbsp刀具磨损严重。</div>
            <br />
            <div class="fl">&nbsp&nbsp请及时换刀。</div>
          </div>
          <div class="content1_button fr">
            <el-row>
              <el-button type="danger" round size="large">确定执行</el-button>
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
              src="@/assets/images/HDYMJQRZK/末端执行器/T放孔.png"
              alt=""
            />
            孔径窝深检测
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_1" />
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
            <v-chart class="chart" :option="option_2" />
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
              src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
              alt=""
            />
            主轴转速
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
              src="@/assets/images/HDYMJQRZK/机器人/功率.png"
              alt=""
            />
            主轴功率
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
              src="@/assets/images/HDYMJQRZK/机器人/电流.png"
              alt=""
            />
            主轴电流
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
            主轴温度
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
              src="@/assets/images/HDYMJQRZK/末端执行器/传感器.png"
              alt=""
            />
            工位切换轴
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
              src="@/assets/images/HDYMJQRZK/移动平台/速度.png"
              alt=""
            />
            进给轴位置
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
              src="@/assets/images/HDYMJQRZK/机器人/扭矩.png"
              alt=""
            />
            扭矩
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
              src="@/assets/images/HDYMJQRZK/机器人/压力.png"
              alt=""
            />
            压紧力
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
      timer: null,

      option_1: {
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
          name: "kg"
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
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              37.316,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939,
              74.939
            ],
            color: "#002aff",
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
              position: "center"
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

      this.option_3.xAxis.data = x;
      this.option_4.xAxis.data = x;
      this.option_1.xAxis.data = x;
      this.option_5.xAxis.data = x;
      this.option_6.xAxis.data = x;
      this.option_7.xAxis.data = x;
      this.option_8.xAxis.data = x;
      this.option_9.xAxis.data = x;
      this.option_2.xAxis.data = x;
      this.option_10.xAxis.data = x;
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
