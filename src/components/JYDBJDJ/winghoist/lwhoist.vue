<template>
  <div class="leftwai">
    <!-- <div class="tree_content"></div> -->
    <div class="data_content fl">
      <div class="fasten_content fl">
        <div class="fasten_title">
          <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
            src="@/assets/images/HDYMJQRZK/机器人/机器人.png" alt="" />
          1站位-左外翼吊装
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
              左外翼定位器1位置(mm)与承载(t)
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
              左外翼定位器2位置(mm)与承载(t)
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
              左外翼定位器3位置(mm)与承载(t)
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
              左外翼定位器4位置(mm)与承载(t)
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
        <div class="bottom_content3 fl">
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
              右外翼定位器1位置(mm)与承载(t)
            </div>
            <div class="data_table">
              <el-table :data="tableData5" style="width: 100%; height: 100%;"
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
              右外翼定位器2位置(mm)与承载(t)
            </div>
            <div class="data_table">
              <el-table :data="tableData6" style="width: 100%; height: 100%;"
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
        <div class="bottom_content4 fl">
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
              右外翼定位器3位置(mm)与承载(t)
            </div>
            <div class="data_table">
              <el-table :data="tableData7" style="width: 100%; height: 100%;"
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
              右外翼定位器4位置(mm)与承载(t)
            </div>
            <div class="data_table">
              <el-table :data="tableData8" style="width: 100%; height: 100%;"
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
        <div class="fasten_title1">
          <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
            src="@/assets/images/HDYMJQRZK/机器人/机器人.png" alt="" />
          1站位-右外翼吊装
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
      lwlocadisid:0,
      lwlocastanid:0,
      rwlocadisid:0,
      rwlocastanid:0,
      lwlocaloadid:0,
      rwlocaloadid:0,
      lwlocadis:{},
      lwlocastan:{},
      rwlocadis:{},
      rwlocastan:{},
      lwlocaload:{},
      rwlocaload:{},
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
      tableData5: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData6: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData7:[
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData8: [
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
    getlwlocadis(){
      this.$http({
        url: this.$http.adornUrl("dbj/lwlocadis/getlast/"+this.lwlocadisid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lwlocadis=data;
          this.lwlocadisid=data.id;
          this.tableData1[0].column2=this.lwlocadis.locax1;
          this.tableData1[0].column4=this.lwlocadis.locay1;
          this.tableData1[0].column6=this.lwlocadis.locaz1;
          this.tableData2[0].column2=this.lwlocadis.locax2;
          this.tableData2[0].column4=this.lwlocadis.locay2;
          this.tableData2[0].column6=this.lwlocadis.locaz2;
          this.tableData3[0].column2=this.lwlocadis.locax3;
          this.tableData3[0].column4=this.lwlocadis.locay3;
          this.tableData3[0].column6=this.lwlocadis.locaz3;
          this.tableData4[0].column2=this.lwlocadis.locax4;
          this.tableData4[0].column4=this.lwlocadis.locay4;
          this.tableData4[0].column6=this.lwlocadis.locaz4;
        }
      });
    },
    getrwlocadis(){
      this.$http({
        url: this.$http.adornUrl("dbj/rwlocadis/getlast/"+this.rwlocadisid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("rdata",data);
          this.rwlocadis=data;
          this.rwlocadisid=data.id;
          console.log("qdata",this.rwlocadisid);
          this.tableData5[0].column2=this.rwlocadis.locax1;
          console.log("xdata",this.tableData5[0].column2);
          this.tableData5[0].column4=this.rwlocadis.locay1;
          this.tableData5[0].column6=this.rwlocadis.locaz1;
          this.tableData6[0].column2=this.rwlocadis.locax2;
          this.tableData6[0].column4=this.rwlocadis.locay2;
          this.tableData6[0].column6=this.rwlocadis.locaz2;
          this.tableData7[0].column2=this.rwlocadis.locax3;
          this.tableData7[0].column4=this.rwlocadis.locay3;
          this.tableData7[0].column6=this.rwlocadis.locaz3;
          this.tableData8[0].column2=this.rwlocadis.locax4;
          this.tableData8[0].column4=this.rwlocadis.locay4;
          this.tableData8[0].column6=this.rwlocadis.locaz4;
        }
      });
    },
    getlwlocastan(){
      this.$http({
        url: this.$http.adornUrl("dbj/lwlocastan/getlast/"+this.lwlocastanid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lwlocastan=data;
          this.lwlocastanid=data.id;
          this.tableData1[2].column2=this.lwlocastan.locasx1;
          this.tableData1[2].column4=this.lwlocastan.locasy1;
          this.tableData1[2].column6=this.lwlocastan.locasz1;
          this.tableData2[2].column2=this.lwlocastan.locasx2;
          this.tableData2[2].column4=this.lwlocastan.locasy2;
          this.tableData2[2].column6=this.lwlocastan.locasz2;
          this.tableData3[2].column2=this.lwlocastan.locasx3;
          this.tableData3[2].column4=this.lwlocastan.locasy3;
          this.tableData3[2].column6=this.lwlocastan.locasz3;
          this.tableData4[2].column2=this.lwlocastan.locasx4;
          this.tableData4[2].column4=this.lwlocastan.locasy4;
          this.tableData4[2].column6=this.lwlocastan.locasz4;
        }
      });
    },
    getrwlocastan(){
      this.$http({
        url: this.$http.adornUrl("dbj/rwlocastan/getlast/"+this.rwlocastanid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rwlocastan=data;
          this.rwlocastanid=data.id;
          this.tableData5[2].column2=this.rwlocastan.locasx1;
          this.tableData5[2].column4=this.rwlocastan.locasy1;
          this.tableData5[2].column6=this.rwlocastan.locasz1;
          this.tableData6[2].column2=this.rwlocastan.locasx2;
          this.tableData6[2].column4=this.rwlocastan.locasy2;
          this.tableData6[2].column6=this.rwlocastan.locasz2;
          this.tableData7[2].column2=this.rwlocastan.locasx3;
          this.tableData7[2].column4=this.rwlocastan.locasy3;
          this.tableData7[2].column6=this.rwlocastan.locasz3;
          this.tableData8[2].column2=this.rwlocastan.locasx4;
          this.tableData8[2].column4=this.rwlocastan.locasy4;
          this.tableData8[2].column6=this.rwlocastan.locasz4;
        }
      });
    },
    getlwlocaload(){
      this.$http({
        url: this.$http.adornUrl("dbj/lwlocaload/getlast/"+this.lwlocaloadid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lwlocaload=data;
          this.lwlocaloadid=data.id;
          this.tableData1[0].column8=this.lwlocaload.loadx1;
          this.tableData1[1].column8=this.lwlocaload.loady1;
          this.tableData1[2].column8=this.lwlocaload.loadz1;
          this.tableData2[0].column8=this.lwlocaload.loadx2;
          this.tableData2[1].column8=this.lwlocaload.loady2;
          this.tableData2[2].column8=this.lwlocaload.loadz2;
          this.tableData3[0].column8=this.lwlocaload.loadx3;
          this.tableData3[1].column8=this.lwlocaload.loady3;
          this.tableData3[2].column8=this.lwlocaload.loadz3;
          this.tableData4[0].column8=this.lwlocaload.loadx4;
          this.tableData4[1].column8=this.lwlocaload.loady4;
          this.tableData4[2].column8=this.lwlocaload.loadz4;
        }
      });
    },
    getrwlocaload(){
      this.$http({
        url: this.$http.adornUrl("dbj/rwlocaload/getlast/"+this.rwlocaloadid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rwlocaload=data;
          this.rwlocaloadid=data.id;
          this.tableData5[0].column8=this.rwlocaload.loadx1;
          this.tableData5[1].column8=this.rwlocaload.loady1;
          this.tableData5[2].column8=this.rwlocaload.loadz1;
          this.tableData6[0].column8=this.rwlocaload.loadx2;
          this.tableData6[1].column8=this.rwlocaload.loady2;
          this.tableData6[2].column8=this.rwlocaload.loadz2;
          this.tableData7[0].column8=this.rwlocaload.loadx3;
          this.tableData7[1].column8=this.rwlocaload.loady3;
          this.tableData7[2].column8=this.rwlocaload.loadz3;
          this.tableData8[0].column8=this.rwlocaload.loadx4;
          this.tableData8[1].column8=this.rwlocaload.loady4;
          this.tableData8[2].column8=this.rwlocaload.loadz4;
        }
      });
    },
    getlwdeltaloca(){
      this.getlwlocadis();
      this.getlwlocastan();
      // this.getlwlocaload();
      this.tableData1[1].column2=(this.lwlocastan.locasx1-this.lwlocadis.locax1).toFixed(2);
      this.tableData1[1].column4=(this.lwlocastan.locasy1-this.lwlocadis.locay1).toFixed(2);
      this.tableData1[1].column6=(this.lwlocastan.locasz1-this.lwlocadis.locaz1).toFixed(2);
      this.tableData2[1].column2=(this.lwlocastan.locasx2-this.lwlocadis.locax2).toFixed(2);
      this.tableData2[1].column4=(this.lwlocastan.locasy2-this.lwlocadis.locay2).toFixed(2);
      this.tableData2[1].column6=(this.lwlocastan.locasz2-this.lwlocadis.locaz2).toFixed(2);
      this.tableData3[1].column2=(this.lwlocastan.locasx3-this.lwlocadis.locax3).toFixed(2);
      this.tableData3[1].column4=(this.lwlocastan.locasy3-this.lwlocadis.locay3).toFixed(2);
      this.tableData3[1].column6=(this.lwlocastan.locasz3-this.lwlocadis.locaz3).toFixed(2);
      this.tableData4[1].column2=(this.lwlocastan.locasx4-this.lwlocadis.locax4).toFixed(2);
      this.tableData4[1].column4=(this.lwlocastan.locasy4-this.lwlocadis.locay4).toFixed(2);
      this.tableData4[1].column6=(this.lwlocastan.locasz4-this.lwlocadis.locaz4).toFixed(2);
    },
    getrwdeltaloca(){
      this.getrwlocadis();
      this.getrwlocastan();
      // this.getrwlocaload();
      this.tableData5[1].column2=(this.rwlocastan.locasx1-this.rwlocadis.locax1).toFixed(2);
      this.tableData5[1].column4=(this.rwlocastan.locasy1-this.rwlocadis.locay1).toFixed(2);
      this.tableData5[1].column6=(this.rwlocastan.locasz1-this.rwlocadis.locaz1).toFixed(2);
      this.tableData6[1].column2=(this.rwlocastan.locasx2-this.rwlocadis.locax2).toFixed(2);
      this.tableData6[1].column4=(this.rwlocastan.locasy2-this.rwlocadis.locay2).toFixed(2);
      this.tableData6[1].column6=(this.rwlocastan.locasz2-this.rwlocadis.locaz2).toFixed(2);
      this.tableData7[1].column2=(this.rwlocastan.locasx3-this.rwlocadis.locax3).toFixed(2);
      this.tableData7[1].column4=(this.rwlocastan.locasy3-this.rwlocadis.locay3).toFixed(2);
      this.tableData7[1].column6=(this.rwlocastan.locasz3-this.rwlocadis.locaz3).toFixed(2);
      this.tableData8[1].column2=(this.rwlocastan.locasx4-this.rwlocadis.locax4).toFixed(2);
      this.tableData8[1].column4=(this.rwlocastan.locasy4-this.rwlocadis.locay4).toFixed(2);
      this.tableData8[1].column6=(this.rwlocastan.locasz4-this.rwlocadis.locaz4).toFixed(2);
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
      this.getlwdeltaloca();
      this.getrwdeltaloca();
      this.getlwlocaload();
      this.getrwlocaload();
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

