<template>
  <div class="equiaxis">
    <!-- <div class="tree_content"></div> -->
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
            src="@/assets/images/HDYMJQRZK/机器人/机器人.png"
            alt=""
          />
          设备轴状态
        </div>
        <div class="robot_table t_btn8">
          <table>
            <tr>
              <td>数据条编号</td>
              <td>{{ productinfo.id }}</td>
              <td>飞机编号</td>
              <td>{{ productinfo.aircraftId }}</td>
              <td>产品内部id</td>
              <td>{{ productinfo.productNum }}</td>
            </tr>
            <tr>
              <td>工艺流程编号</td>
              <td>{{ productinfo.taskId }}</td>
              <td>孔号</td>
              <td>{{ productinfo.holeId }}</td>
              <td>位姿状态</td>
              <td>正常</td>
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
              <el-select v-model="value3" @change="change3">
                <el-option
                  v-for="item in options3"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option3" />
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
              <el-select v-model="value4" @change="change4">
                <el-option
                  v-for="item in options4"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
            </div>
            <div class="chartDiv">
              <v-chart class="chart" :option="option4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      value1: "平台X轴速度",
      value2: "平台Y轴速度",
      value3: "工位切换轴速度",
      value4: "孔探轴速度",
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
      footpressinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0
      },
      options1: [
        { label: "平台X轴速度", name: "速度/m/s", key: "rotvel" },
        { label: "平台X轴位移", name: "位移/m", key: "current" },
        { label: "平台X轴温度", name: "温度/℃", key: "power" },
        { label: "平台X轴功率", name: "功率/W", key: "torque" },
        { label: "平台X轴电流", name: "电流/A", key: "torque" }
      ],
      options2: [
        { label: "平台Y轴速度", name: "速度/m/s", key: "rotvel" },
        { label: "平台Y轴位移", name: "位移/m", key: "current" },
        { label: "平台Y轴温度", name: "温度/℃", key: "power" },
        { label: "平台Y轴功率", name: "功率/W", key: "torque" },
        { label: "平台Y轴电流", name: "电流/A", key: "torque" }
      ],
      options3: [
        { label: "工位切换轴速度", name: "速度/m/s", key: "rotvel" },
        { label: "工位切换轴位移", name: "位移/m", key: "current" },
        { label: "工位切换轴温度", name: "温度/℃", key: "power" },
        { label: "工位切换轴功率", name: "功率/W", key: "torque" },
        { label: "工位切换轴电流", name: "电流/A", key: "torque" }
      ],
      options4: [
        { label: "孔探轴速度", name: "速度/m/s", key: "rotvel" },
        { label: "孔探轴位移", name: "位移/m", key: "current" },
        { label: "孔探轴温度", name: "温度/℃", key: "power" },
        { label: "孔探轴功率", name: "功率/W", key: "torque" },
        { label: "孔探轴电流", name: "电流/A", key: "torque" }
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
          this.refresh1(this.spinfo, this.option2.series[0], i.key);
          break;
        }
      }
    },
    change3(data) {
      for (let i of this.options3) {
        if (i.label == data) {
          this.option3.yAxis.name = i.name;
          this.refresh1(this.spinfo, this.option3.series[0], i.key);
          break;
        }
      }
    },
    change4(data) {
      for (let i of this.options4) {
        if (i.label == data) {
          this.option4.yAxis.name = i.name;
          this.refresh1(this.spinfo, this.option4.series[0], i.key);
          break;
        }
      }
    },
    getData() {
      this.getD();
      this.getRealtime("posinfo", this.posinfo);
      this.refresh0();
    },
    getD() {
      this.$http({
        url: this.$http.adornUrl("hdym/productinfo/getLast"),
        method: "get"
      }).then(({ data }) => {
        this.productinfo = data;
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
      this.refresh(this.posinfo);
      this.refresh1(this.posinfo, this.option1.series[0], "a1");
      this.refresh1(this.posinfo, this.option1.series[1], "a2");
      this.refresh1(this.posinfo, this.option1.series[2], "a3");
      this.refresh1(this.posinfo, this.option1.series[3], "a4");
      this.refresh1(this.posinfo, this.option1.series[4], "a5");
      this.refresh1(this.posinfo, this.option1.series[5], "a6");
      this.option2.series = this.option1.series;
      this.option3.series = this.option1.series;
      this.option4.series = this.option1.series;
      this.option5.series = this.option1.series;
      this.option6.series = this.option1.series;
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
    });
  }
};
</script>
<style>

</style>
