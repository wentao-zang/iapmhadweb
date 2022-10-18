<template>
    <div class="wing">
      <!-- <div class="tree_content"></div> -->
      <div class="data_content fl">
        <div class="fasten_content fl">
          <div class="fasten_title">
            <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
              src="@/assets/images/HDYMJQRZK/机器人/机器人.png" alt="" />
            2站位-机翼吊装
          </div>
        </div>
        <div class="data_top fl">
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
                <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                  src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
                机翼定位器1位置(mm)与承载(t)
              </div>
              <div class="data_table">
                <el-table :data="tableData1" style="width: 100%; height: 100%;"
                  highlight-current-row:true 
                  :cell-style="{ textAlign: 'center' }">
                  <el-table-column prop="column1">
                  </el-table-column>
                  <el-table-column prop="column2">
                  </el-table-column>
                  <el-table-column prop="column3">
                  </el-table-column>
                  <el-table-column prop="column4">
                  </el-table-column>
                  <el-table-column prop="column5">
                  </el-table-column>
                  <el-table-column prop="column6">
                  </el-table-column>
                  <el-table-column prop="column7">
                  </el-table-column>
                  <el-table-column prop="column8">
                  </el-table-column>
                </el-table>
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
                <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                  src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
                机翼定位器2位置(mm)与承载(t)
              </div>
              <div class="data_table">
                <el-table :data="tableData2" style="width: 100%; height: 100%;"
                  highlight-current-row:true 
                  :cell-style="{ textAlign: 'center' }">
                  <el-table-column prop="column1">
                  </el-table-column>
                  <el-table-column prop="column2">
                  </el-table-column>
                  <el-table-column prop="column3">
                  </el-table-column>
                  <el-table-column prop="column4">
                  </el-table-column>
                  <el-table-column prop="column5">
                  </el-table-column>
                  <el-table-column prop="column6">
                  </el-table-column>
                  <el-table-column prop="column7">
                  </el-table-column>
                  <el-table-column prop="column8">
                  </el-table-column>
                </el-table>
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
                <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                  src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
                机翼定位器3位置(mm)与承载(t)
              </div>
              <div class="data_table">
                <el-table :data="tableData3" style="width: 100%; height: 100%;"
                  highlight-current-row:true 
                  :cell-style="{ textAlign: 'center' }">
                  <el-table-column prop="column1">
                  </el-table-column>
                  <el-table-column prop="column2">
                  </el-table-column>
                  <el-table-column prop="column3">
                  </el-table-column>
                  <el-table-column prop="column4">
                  </el-table-column>
                  <el-table-column prop="column5">
                  </el-table-column>
                  <el-table-column prop="column6">
                  </el-table-column>
                  <el-table-column prop="column7">
                  </el-table-column>
                  <el-table-column prop="column8">
                  </el-table-column>
                </el-table>
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
                <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                  src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
                机翼定位器4位置(mm)与承载(t)
              </div>
              <div class="data_table">
                <el-table :data="tableData4" style="width: 100%; height: 100%;"
                  highlight-current-row:true 
                  :cell-style="{ textAlign: 'center' }">
                  <el-table-column prop="column1">
                  </el-table-column>
                  <el-table-column prop="column2">
                  </el-table-column>
                  <el-table-column prop="column3">
                  </el-table-column>
                  <el-table-column prop="column4">
                  </el-table-column>
                  <el-table-column prop="column5">
                  </el-table-column>
                  <el-table-column prop="column6">
                  </el-table-column>
                  <el-table-column prop="column7">
                  </el-table-column>
                  <el-table-column prop="column8">
                  </el-table-column>
                </el-table>
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
      let Xc='1';
      let Yc='1';
      let Zc='1';
      let Lx='1';
      //这里存放数据
      return {
        lslocadis1:{
          lastId:0,
          locax1:'',
          locay1:'',
          locaz1:''
        },
        tableData1: [
          {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
          {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
          {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
          ],
        tableData2: [
          {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
          {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
          {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
          ],
        tableData3:[
          {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
          {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
          {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
          ],
        tableData4: [
          {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
          {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
          {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
          ],
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
            name: "mm·s^-2"
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
            name: "N·M"
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
      };
    },
    methods: {
      getlslocadis1(){
        this.$http({
          url: this.$http.adornUrl("yhpa/lslocadis1/getlast/"+this.lslocadis1.lastId),
          method: "get",
        }).then(({ data }) => {
          console.log("data",data);
          if (data!='') {
          }
        });
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
        // this.getData();
        this.getlslocadis1();
      }, 1000);
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    }
  };
  </script>
  <style scoped>
  .data_content .fasten_content .robot_table table {
    width: 100%;
    margin-top: 40px;
    /* border:solid #ffff43 2px; */
  }
  
  </style>
  
  