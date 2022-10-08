<!--  -->
<template>
  <div>
    <div class="data_content">
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
            <div class="fr divData" style="background: #3399ff">
              <div>&nbsp{{ this.productinfo.flightId }}&nbsp</div>
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
            <div class="fr divData" style="background: #3399ff">
              &nbsp{{ this.productinfo.holeId }}&nbsp
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
            <div class="fr divData" style="background: #3399ff">
              &nbsp{{ this.productinfo.productNum }}&nbsp
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
            <div class="fl" style="height: 100%">
              <img
                src="@/assets/images/warn.png"
                style="
                  width: 100%;
                  height: 80%;
                  background: rgba(255, 255, 255, 0);
                "
              />
            </div>
            <div class="fl">&nbsp制孔精度下降，请及时换刀。</div>
            <br />
            <div class="fl">&nbsp刀具磨损严重，请及时换刀。</div>
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
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/末端执行器/刀具模块.png"
              alt=""
            />
            刀具磨损检测
          </div>
          <div class="chartDiv">
            <v-chart class="chart" :option="option_rotvel" />
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
        <div class="block1 fl">
          <el-cascader
            v-model="value"
            :options="options"
            :props="props"
            collapse-tags
            clearable
            @change="handleChange"
            style="height:20%;width: 40%;"
          ></el-cascader>
          <el-button type="success" @click="select">查询</el-button>
        </div>
        <div class="block1 fl">
          <el-cascader
            v-model="value1"
            :options="options1"
            :props="props1"
            collapse-tags
            clearable
            @change="handleChange1"
            style="height:20%;width: 40%;"
          ></el-cascader>
          <el-button type="success" @click="select1">查询</el-button>
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
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/移动平台/电机转速.png"
              alt=""
            />
            孔径架次统计
          </div>
          <div id="histogram" class="chartDiv" ></div>
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
              style="margin-left: -30px; margin-top: -6px"
              width="30px"
              height="30px"
              src="@/assets/images/HDYMJQRZK/机器人/功率.png"
              alt=""
            />
            孔径时间统计
          </div>
          <div class="chartDiv">
            <div class="chart" id="histogram1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ecStat from 'echarts-stat'
export default {
  components: {},
  data() {
    return {
      productinfo:{
        flightId:'',
        productNum:'',
        holeId:'',
        lastId:0,
      },
      strDate1:'',
      strDate2:'',
      strDate3:'',
      holemeasure: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
        lastFlightId:'',
        lastHoleId:'',
        lastProductNum:''
      },
      girth1:[],
      girth:[],
      map: '',
      value1:[[]],
      value: [[]],
      props1: { multiple: true},
      props: { multiple: true},
      options1: [
        {
          value: "3",
          label: "Φ3",
          children: [
            {
              value: "1",
              label: "一天内",
            },
            {
              value: "2",
              label: "一周内",
            },
            {
              value: "3",
              label: "一个月内",
            },
            {
              value: "4",
              label: "三个月内",
            },
            {
              value: "5",
              label: "半年内",
            },
            {
              value: "6",
              label: "一年内",
            },
          ],
        },
        {
          value: "4",
          label: "Φ4",
          children: [
            {
              value: "1",
              label: "一天内",
            },
            {
              value: "2",
              label: "一周内",
            },
            {
              value: "3",
              label: "一个月内",
            },
            {
              value: "4",
              label: "三个月内",
            },
            {
              value: "5",
              label: "半年内",
            },
            {
              value: "6",
              label: "一年内",
            },
          ],
        },
        {
          value: "5",
          label: "Φ5",
          children: [
            {
              value: "1",
              label: "一天内",
            },
            {
              value: "2",
              label: "一周内",
            },
            {
              value: "3",
              label: "一个月内",
            },
            {
              value: "4",
              label: "三个月内",
            },
            {
              value: "5",
              label: "半年内",
            },
            {
              value: "6",
              label: "一年内",
            },
          ],
        }
      ],
      options: [
        {
          value: "Y20",
          label: "运20",
          children: [
            {
              value: "1",
              label: "架次一",
              children: [
                {
                  value: "1",
                  label: "壁板一",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "2",
                  label: "壁板二",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "3",
                  label: "壁板三",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "4",
                  label: "壁板四",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "5",
                  label: "壁板五",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
              ],
            },
            {
              value: "2",
              label: "架次二",
              children: [
                {
                  value: "1",
                  label: "壁板一",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "2",
                  label: "壁板二",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "3",
                  label: "壁板三",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "4",
                  label: "壁板四",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "5",
                  label: "壁板五",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
              ],
            },
            {
              value: "3",
              label: "架次三",
              children: [
                {
                  value: "1",
                  label: "壁板一",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "2",
                  label: "壁板二",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "3",
                  label: "壁板三",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "4",
                  label: "壁板四",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
                {
                  value: "5",
                  label: "壁板五",
                  children:[
                    {
                      value:"3",
                      label:"Φ3",
                    },
                    {
                      value:"4",
                      label:"Φ4",
                    },
                    {
                      value:"5",
                      label:"Φ5",
                    },
                  ]
                },
              ],
            },
          ],
        }
      ],
      privilegeId: "B",
      timer: null,
      spinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
      },
      posinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
      },
      footpressinfo: {
        //存放处理后的数据
        list: [],
        //存放后端穿过来的数据
        listCache: [],
        lastData: {},
        lastId: 0,
        lastTime: 0,
      },
      option_rotvel: {
      },
      option_power: {
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
            data: [],
            color: "#002aff",
            type: "line",
            showSymbol: false,
          },
        ],
      },
      option_current: {
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
          name: "电流/A",
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
      option_temp: {
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
          name: "温度/℃",
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
      option_pos: {
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
      option_vel: {
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
          name: "mm/min",
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
      option_torque: {
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
          name: "N·m",
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
      option_footpress: {
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
          name: "kg",
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
      pie1: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            // fontSize: 5
            color: "#fff", //图例字体颜色等
          },
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
              borderWidth: 1,
            },
            color: ["#91cc75", "#ee6666", "#fac858"],
            label: {
              show: false,
              position: "center",
            },

            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "优秀" },
              { value: 50, name: "良好" },
              { value: 50, name: "故障" },
            ],
          },
        ],
      },
    };
  },
  methods: {
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
        this.productinfo.lastId = data.id;
        }
      });
    },
    drawHistogramChart1(){
      var histogramChart = this.$echarts.init(document.getElementById('histogram1'));
      // this.girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];
      var edata = new Array();
  var scopeMin = this.value1[0][0]*1-0.2;
  var scopeMax = this.value1[0][0]*1+0.3;
  var interval = (scopeMax-scopeMin)/8;
  var tmin = scopeMin;
  while(tmin < scopeMax){
   var x0 = tmin; 
   var x1 = tmin+interval;
   var samplenum = 0;
   for(var i=0;i<this.girth1.length;i++){
    if((scopeMin == x0 && this.girth1[i] < x0) || (x0 <= this.girth1[i] && x1 > this.girth1[i])
     ||(scopeMin == x1 && this.girth1[i] > x1)) {
     samplenum++;   
    }
   }
   tmin += interval;
   edata.push([x0, x1, samplenum]);
  }
      // var bins = ecStat.histogram(this.girth1);
      // var interval;
      // var min = Infinity;
      // var max = -Infinity;
      // var data = this.$echarts.util.map(bins.data, function (item, index) {
      //   // 左刻度
      //   var x0 = bins.bins[index].x0;
      //   // 右刻度
      //   var x1 = bins.bins[index].x1;
      //   interval = (x1 - x0);
      //   // 获得数据集中最值
      //   min = Math.min(min, x0);
      //   max = Math.max(max, x1);
      //   // item[0]代表刻度的中间值，item[1]代表出现的次数
      //   return [x0, x1, item[1]];
    function renderItem(params, api) {
        // 这个根据自己的需求适当调节
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();

        return {
            // 矩形及配置
            type: 'rect',
            shape: {
                x: start[0] + 1,
                y: start[1],
                width: size[0] - 2,
                height: size[1]
            },
            style: style
        };
    }
     var option = {
        title: {
            text: 'Girths of Black Cherry Trees',
            subtext: 'By ecStat.histogram',
            sublink: 'https://github.com/ecomfe/echarts-stat',
            left: 'center',
            top: 10
        },
        color: ['rgb(25, 183, 207)'],
        grid: {
            top: 80,
            // containLabel: true
        },
        xAxis: [{
            type: 'value',
            min: scopeMin,
            max: scopeMax,
            interval: interval,
            axisLabel:{
            formatter:function(value,index){
                return value.toFixed(2)   
            },
            rotate:45
        }}],
        yAxis: [{
            type: 'value',
        }],
        series: [{
            name: 'height',
            type: 'custom',
            renderItem: renderItem,
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                // 表示将data中的data[0]和data[1]映射到x轴
                x: [0, 1],
                // 表示将data中的data[2]映射到y轴
                y: 2,
                // 表示将data中的data[2]映射到tooltip
                tooltip: 2,
                // 表示将data中的data[2]映射到label
                label: 2
            },
            data: edata
        }]
    };
    histogramChart.setOption(option);
  },
  drawHistogramChart(){
      var histogramChart = this.$echarts.init(document.getElementById('histogram'));
      // this.girth = [8.3, 8.6, 8.8, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 14.0, 14.2, 14.5, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6];
      var edata = new Array();
      var scopeMin = this.value[0][3]*1-0.2;
      console.log("interval",scopeMin);
  var scopeMax = this.value[0][3]*1+0.3;
  var interval = (scopeMax-scopeMin)/8;
  console.log("interval",interval);
  var tmin = scopeMin;
  while(tmin < scopeMax){
   var x0 = tmin; 
   var x1 = tmin+interval;
   var samplenum = 0;
   for(var i=0;i<this.girth.length;i++){
    if((scopeMin == x0 && this.girth[i] < x0) || (x0 <= this.girth[i] && x1 > this.girth[i])
     ||(scopeMin == x1 && htis.girth[i] > x1)) {
     samplenum++;    
    }
   }
   tmin += interval;
   edata.push([x0, x1, samplenum]);}
    //   var bins = ecStat.histogram(this.girth);
    //   var interval;
    //   var min = Infinity;
    //   var max = -Infinity;
    //   var data = this.$echarts.util.map(bins.data, function (item, index) {
    //     // 左刻度
    //     var x0 = bins.bins[index].x0;
    //     // 右刻度
    //     var x1 = bins.bins[index].x1;
    //     interval = x1 - x0;
    //     // 获得数据集中最值
    //     min = Math.min(min, x0);
    //     max = Math.max(max, x1);
    //     // item[0]代表刻度的中间值，item[1]代表出现的次数
    //     return [x0, x1, item[1]];
    // });
    function renderItem(params, api) {
        // 这个根据自己的需求适当调节
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();

        return {
            // 矩形及配置
            type: 'rect',
            shape: {
                x: start[0] + 1,
                y: start[1],
                width: size[0] - 2,
                height: size[1]
            },
            style: style
        };
    }
     var option = {
        title: {
            text: 'Girths of Black Cherry Trees',
            subtext: 'By ecStat.histogram',
            sublink: 'https://github.com/ecomfe/echarts-stat',
            left: 'center',
            top: 10
        },
        color: ['rgb(25, 183, 207)'],
        grid: {
            top: 80,
            // containLabel: true
        },
        xAxis: [{
            type: 'value',
            min: scopeMin,
            max: scopeMax,
            interval: interval,
            axisLabel:{
            formatter:function(value,index){
                return value.toFixed(2)   
            }
        }}],
        yAxis: [{
            type: 'value',
        }],
        series: [{
            name: 'height',
            type: 'custom',
            renderItem: renderItem,
            label: {
                show: true,
                position: 'insideTop'
            },
            encode: {
                // 表示将data中的data[0]和data[1]映射到x轴
                x: [0, 1],
                // 表示将data中的data[2]映射到y轴
                y: 2,
                // 表示将data中的data[2]映射到tooltip
                tooltip: 2,
                // 表示将data中的data[2]映射到label
                label: 2
            },
            data: edata
        }]
    };
    histogramChart.setOption(option);
  },
  select1(){
      // console.log("成功",this.value1);
      // console.log("成功",this.map);
      // console.log("成功",this.value1.length);
      // console.log("value", this.value1[0][1]);
      if(this.value1[0].length == 0){
      this.value1[0]=['3','5'];
      this.map = new Map();
      for (let i = 0; i < this.value1.length; i++) {
        this.map.set(i,this.value1[i])   
      }
      }
      this.$http({
          url: this.$http.adornUrl("amehdym/holemeasure/statistics"),
          method: "get",
          params: this.$http.adornParams({map:this.map}),
        }).then(( {data} ) => {
          console.log("成功返回");
          console.log("data",data);
          // console.log("holedia",data[0]["holeDia"]);
          this.girth1 = data;
          this.drawHistogramChart1();
          this.map.clear();
          this.value1=[];
        });
    },
    handleChange1(value1) {
      this.map = new Map();
      for (let i = 0; i < value1.length; i++) {
        this.map.set(i,value1[i])   
      }
      // console.log("成功",this.value1);
      // console.log("shibai",this.map);
      
    },
    select(){
      // console.log("成功",this.value);
      // console.log("成功",this.map);
      // console.log("成功",this.value.length);
      // console.log("value", this.value[0][2]);
      // console.log("value",this.value);
      if(this.value[0].length == 0){
        this.value[0]=['Y20','1','1','3'];
        this.map = new Map();
      for (let i = 0; i < this.value.length; i++) {
        this.map.set(i,this.value[i])   
      }
        // console.log("value",this.value);
      }
      this.$http({
          url: this.$http.adornUrl("amehdym/holemeasure/list"),
          method: "get",
          params: this.$http.adornParams({map:this.map,length:this.value.length}),
        }).then(( {data} ) => {
          // console.log("成功返回");
          // console.log("data",data);
          // console.log("holedia",data[0]["holeDia"]);
          this.girth = data;
          this.drawHistogramChart();
          this.map.clear();
          this.value=[];
        });
    },
    handleChange(value) {
      this.map = new Map();
      for (let i = 0; i < value.length; i++) {
        this.map.set(i,value[i])   
      }
      // console.log("成功",this.value);
      // console.log("shibai",this.map);
      
    },
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
          entity.lastFlightId = entity.lastData.flightId;
          entity.lastHoleId = entity.lastData.holeId;
          entity.lastProductNum = entity.lastData.productNum;
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
      this.getRealtime("spinfo", this.spinfo);
      this.getRealtime("posinfo", this.posinfo);
      this.getRealtime("footpressinfo", this.footpressinfo);
      this.refresh0();
    },
    getD() {
      this.$http({
        url: this.$http.adornUrl("hdym/productinfo/getLast"),
        method: "get",
      }).then(({ data }) => {
        // console.log(data);
        this.productinfo = data;
      });
    },
    getRealtime(link, entity) {
      //读取实时表数据
      this.$http({
        url: this.$http.adornUrl("hdym/" + link + "/getLi/" + entity.lastId),
        method: "get",
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
    refresh0() {
      this.refresh(this.spinfo);
      this.refresh(this.posinfo);
      this.refresh(this.footpressinfo);
      this.refresh1(this.spinfo, this.option_rotvel.series[0], "rotvel");
      this.refresh1(this.spinfo, this.option_power.series[0], "power");
      this.refresh1(this.spinfo, this.option_current.series[0], "current");
      this.refresh1(this.spinfo, this.option_temp.series[0], "temp");
      this.refresh1(this.spinfo, this.option_pos.series[0], "pos");
      this.refresh1(this.posinfo, this.option_vel.series[0], "x11");
      this.refresh1(this.spinfo, this.option_torque.series[0], "torque");
      this.refresh1(this.spinfo, this.option_footpress.series[0], "footpress");
      this.refresh1(this.posinfo, this.option_ape_dimp.series[0], "z11");
      this.refresh1(this.posinfo, this.option_ape_dimp.series[1], "v2");
    },
    refresh(entity) {
      let li = entity.list.concat(entity.listCache);
      // console.log("ncsjdkn",li);
      let len = li.length;
      for (let i = 0; i < len; i++) {
        if (entity.lastTime - Date.parse(new Date(li[i].time)) / 1000 <= 40) {
          entity.list = li.slice(i);
          entity.listCache = [];
          break;
        }
      }
    },
    // 设置y轴数据
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
    },
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
        type: "warning",
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.XFkj();
      this.select();
      this.select1();
    });
    const timer = setInterval(() => {
      this.getDatakj();
      this.getproductinfo();
    }, 10000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
};
</script>
<style scoped></style>
