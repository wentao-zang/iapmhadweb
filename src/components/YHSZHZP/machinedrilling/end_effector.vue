<template>
  <div class="fasten">
    <!-- <div class="tree_content"></div> -->
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
              <td>数据条编号</td>
              <td id="1">{{ productinfo.id }}</td>
              <td>飞机编号</td>
              <td id="2">{{ productinfo.aircraftId }}</td>
              <td>产品内部id</td>
              <td id="3">{{ productinfo.productNum }}</td>
            </tr>
            <tr>
              <td>工艺流程编号</td>
              <td id="4">{{ productinfo.taskId }}</td>
              <td>孔号</td>
              <td id="5">{{ productinfo.holeId }}</td>
              <td>主轴编号</td>
              <td id="6">{{ spinfo.lastData.id }}</td>
            </tr>
            <tr>
              <td>
                主轴开关
              </td>
              <td>{{ statusinfo.spopenstatus }}</td>
              <td>
                快换法兰开关
              </td>
              <td>{{ statusinfo.flangeopenstatus }}</td>
              <td>
                油雾开关
              </td>
              <td>{{ statusinfo.oilopenstatus }}</td>
            </tr>
            <tr>
              <td>
                换刀阀门开关
              </td>
              <td>{{ statusinfo.toolchangeropenstatus }}</td>
              <td>
                回刀阀门开关
              </td>
              <td>{{ statusinfo.recuropenstatus }}</td>
              <td>
                压脚气缸开关
              </td>
              <td>{{ statusinfo.footopenstatus }}</td>
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
      this.getD1();
      this.getD2();
      this.getRealtime("footpressinfo", this.footpressinfo);
      this.getRealtime("spinfo", this.spinfo);
      this.getRealtime("posinfo", this.posinfo);
      this.refresh0();
    },
    getD1() {
      this.$http({
        url: this.$http.adornUrl("hdym/productinfo/getLast"),
        method: "get"
      }).then(({ data }) => {
        this.productinfo = data;
      });
    },
    getD2() {
      this.$http({
        url: this.$http.adornUrl("hdym/statusinfo/getLast"),
        method: "get"
      }).then(({ data }) => {
        this.statusinfo = data;
      });
    },
    getRealtime(link, entity) {
      //读取实时表数据
      this.$http({
        url: this.$http.adornUrl("hdym/" + link + "/getLi/" + entity.lastId),
        method: "get"
      }).then(({ data }) => {
        entity.listCache = data;
        let len = entity.listCache.length;
        if (len != 0) {
          entity.lastData = entity.listCache[len - 1];
          entity.lastId = entity.lastData.id;
          entity.lastTime = Date.parse(new Date(entity.lastData.time)) / 1000;
        }
      });
    },

    refresh(entity) {
      let li = entity.list.concat(entity.listCache);
      let len = li.length;
      for (let i = 0; i < len; i++) {
        if (entity.lastTime - Date.parse(new Date(li[i].time)) / 1000 <= 40) {
          entity.list = li.slice(i);
          entity.listCache = [];
          break;
        }
      }
    },
    refresh0() {
      this.refresh(this.spinfo);
      this.refresh(this.posinfo);
      this.refresh(this.footpressinfo);
      this.refresh1(this.spinfo, this.option1.series[0], "rotvel");
      this.refresh1(this.spinfo, this.option2.series[0], "pos");
      this.refresh1(this.footpressinfo, this.option3.series[0], "feedPos");
      this.refresh1(this.posinfo, this.option4.series[0], "z11");
      this.refresh1(this.posinfo, this.option4.series[1], "v2");
      this.refresh1(this.footpressinfo, this.option5.series[0], "normal1");
      this.refresh1(this.footpressinfo, this.option5.series[1], "normal2");
      this.refresh1(this.footpressinfo, this.option5.series[2], "normal3");
      this.refresh1(this.footpressinfo, this.option5.series[3], "normal4");
      this.refresh1(this.footpressinfo, this.option6.series[0], "normalbeta");
      this.refresh1(this.footpressinfo, this.option6.series[1], "normaltheata");
      this.refresh1(this.footpressinfo, this.option6.series[2], "normalgamma");
    },
    // 设置y轴数据
    refresh1(entity, series, key) {
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
      series.data = dataX;
    },
    change1(data) {
      for (let i of this.options1) {
        if (i.label == data) {
          this.option1.yAxis.name = i.name;
          this.refresh1(this.spinfo, this.option1.series[0], i.key);
          break;
        }
      }
    },
    change2(data) {
      for (let i of this.options2) {
        if (i.label == data) {
          this.option2.yAxis.name = i.name;
          this.refresh1(this[i.en], this.option2.series[0], i.key);
          break;
        }
      }
    },
    switch() {},
    // 设置x轴坐标
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
      // clearInterval(time);
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
  width: 23%;
  font-size: 25px;
  font-weight: 600;
  color: #61d2f7;
  padding-left: 60px;
  line-height: 50px;
}
td:nth-child(2),
td:nth-child(4) {
  width: 10%;
  font-size: 25px;
  font-weight: 600;
  padding-left: 60px;
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
