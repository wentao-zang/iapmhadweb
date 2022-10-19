<template>
  <div class="lefthou">
    <!-- <div class="tree_content"></div> -->
    <div class="data_content fl">
      <div class="fasten_content fl">
        <div class="fasten_title">
          <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
            src="@/assets/images/HDYMJQRZK/机器人/机器人.png" alt="" />
          左侧后缘吊装
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
              后缘主定位器1位置(mm)与承载(kg)
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
              后缘主定位器2位置(mm)与承载(kg)
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
              后缘主定位器3位置(mm)与承载(kg)
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
              后缘主定位器4位置(mm)与承载(kg)
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
              后缘主定位器5位置(mm)与承载(kg)
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
              后缘主定位器6位置(mm)与承载(kg)
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
              后缘主定位器7位置(mm)与承载(kg)
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
              后缘主定位器8位置(mm)与承载(kg)
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
        <div class="bottom_content5 fl">
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
              后缘主定位器9位置(mm)与承载(kg)
            </div>
            <div class="data_table">
              <el-table :data="tableData9" style="width: 100%; height: 100%;"
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
              后缘主定位器10位置(mm)与承载(kg)
            </div>
            <div class="data_table">
              <el-table :data="tableData10" style="width: 100%; height: 100%;"
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
        <div class="bottom_content6 fl">
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
              后缘主定位器11位置(mm)与承载(kg)
            </div>
            <div class="data_table">
              <el-table :data="tableData11" style="width: 100%; height: 100%;"
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
              后缘主定位器12位置(mm)与承载(kg)
            </div>
            <div class="data_table">
              <el-table :data="tableData12" style="width: 100%; height: 100%;"
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
      lhlocaload1id:0,
      lhlocaload2id:0,
      lhlocaload3id:0,
      lhlocadis1id:0,
      lhlocadis2id:0,
      lhlocadis3id:0,
      lhlocastan1id:0,
      lhlocastan2id:0,
      lhlocastan3id:0,
      lhlocaload1:{},
      lhlocaload2:{},
      lhlocadis3:{},
      lhlocadis1:{},
      lhlocadis2:{},
      lhlocadis3:{},
      lhlocastan1:{},
      lhlocastan2:{},
      lhlocastan3:{},
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
      tableData7: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData8: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData9: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData10: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData11: [
        {column1:'Xc',column2:`${Xc}`,column3:'Yc',column4:`${Yc}`,column5:'Zc',column6:`${Zc}`,column7:'Lx',column8:`${Lx}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Y',column4:`${Yc}`,column5:'△Z',column6:`${Zc}`,column7:'Ly',column8:`${Lx}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Yt',column4:`${Yc}`,column5:'Zt',column6:`${Zc}`,column7:'Lz',column8:`${Lx}`}
        ],
      tableData12: [
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
    getlhlocadis1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocadis1/getlast/"+this.lhlocadis1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocadis1=data;
          this.lhlocadis1id=data.id;
          this.tableData1[0].column2=this.lhlocadis1.locax1;
          this.tableData1[0].column4=this.lhlocadis1.locay1;
          this.tableData1[0].column6=this.lhlocadis1.locaz1;
          this.tableData2[0].column2=this.lhlocadis1.locax2;
          this.tableData2[0].column4=this.lhlocadis1.locay2;
          this.tableData2[0].column6=this.lhlocadis1.locaz2;
          this.tableData3[0].column2=this.lhlocadis1.locax3;
          this.tableData3[0].column4=this.lhlocadis1.locay3;
          this.tableData3[0].column6=this.lhlocadis1.locaz3;
          this.tableData4[0].column2=this.lhlocadis1.locax4;
          this.tableData4[0].column4=this.lhlocadis1.locay4;
          this.tableData4[0].column6=this.lhlocadis1.locaz4;
        }
      });
    },
    getlhlocadis2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocadis2/getlast/"+this.lhlocadis2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocadis2=data;
          this.lhlocadis2id=data.id;
          this.tableData5[0].column2=this.lhlocadis2.locax5;
          this.tableData5[0].column4=this.lhlocadis2.locay5;
          this.tableData5[0].column6=this.lhlocadis2.locaz5;
          this.tableData6[0].column2=this.lhlocadis2.locax6;
          this.tableData6[0].column4=this.lhlocadis2.locay6;
          this.tableData6[0].column6=this.lhlocadis2.locaz6;
          this.tableData7[0].column2=this.lhlocadis2.locax7;
          this.tableData7[0].column4=this.lhlocadis2.locay7;
          this.tableData7[0].column6=this.lhlocadis2.locaz7;
          this.tableData8[0].column2=this.lhlocadis2.locax8;
          this.tableData8[0].column4=this.lhlocadis2.locay8;
          this.tableData8[0].column6=this.lhlocadis2.locaz8;
        }
      });
    },
    getlhlocadis3(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocadis3/getlast/"+this.lhlocadis3id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocadis3=data;
          this.lhlocadis3id=data.id;
          this.tableData9[0].column2=this.lhlocadis3.locax9;
          this.tableData9[0].column4=this.lhlocadis3.locay9;
          this.tableData9[0].column6=this.lhlocadis3.locaz9;
          this.tableData10[0].column2=this.lhlocadis3.locax10;
          this.tableData10[0].column4=this.lhlocadis3.locay10;
          this.tableData10[0].column6=this.lhlocadis3.locaz10;
          this.tableData11[0].column2=this.lhlocadis3.locax11;
          this.tableData11[0].column4=this.lhlocadis3.locay11;
          this.tableData11[0].column6=this.lhlocadis3.locaz11;
          this.tableData12[0].column2=this.lhlocadis3.locax12;
          this.tableData12[0].column4=this.lhlocadis3.locay12;
          this.tableData12[0].column6=this.lhlocadis3.locaz12;
        }
      });
    },
    getlhlocastan1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocastan1/getlast/"+this.lhlocastan1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocastan1=data;
          this.lhlocastan1id=data.id;
          this.tableData1[2].column2=this.lhlocastan1.locasx1;
          this.tableData1[2].column4=this.lhlocastan1.locasy1;
          this.tableData1[2].column6=this.lhlocastan1.locasz1;
          this.tableData2[2].column2=this.lhlocastan1.locasx2;
          this.tableData2[2].column4=this.lhlocastan1.locasy2;
          this.tableData2[2].column6=this.lhlocastan1.locasz2;
          this.tableData3[2].column2=this.lhlocastan1.locasx3;
          this.tableData3[2].column4=this.lhlocastan1.locasy3;
          this.tableData3[2].column6=this.lhlocastan1.locasz3;
          this.tableData4[2].column2=this.lhlocastan1.locasx4;
          this.tableData4[2].column4=this.lhlocastan1.locasy4;
          this.tableData4[2].column6=this.lhlocastan1.locasz4;
        }
      });
    },
    getlhlocastan2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocastan2/getlast/"+this.lhlocastan2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocastan2=data;
          this.lhlocastan2id=data.id;
          this.tableData5[2].column2=this.lhlocastan2.locasx5;
          this.tableData5[2].column4=this.lhlocastan2.locasy5;
          this.tableData5[2].column6=this.lhlocastan2.locasz5;
          this.tableData6[2].column2=this.lhlocastan2.locasx6;
          this.tableData6[2].column4=this.lhlocastan2.locasy6;
          this.tableData6[2].column6=this.lhlocastan2.locasz6;
          this.tableData7[2].column2=this.lhlocastan2.locasx7;
          this.tableData7[2].column4=this.lhlocastan2.locasy7;
          this.tableData7[2].column6=this.lhlocastan2.locasz7;
          this.tableData8[2].column2=this.lhlocastan2.locasx8;
          this.tableData8[2].column4=this.lhlocastan2.locasy8;
          this.tableData8[2].column6=this.lhlocastan2.locasz8;
        }
      });
    },
    getlhlocastan3(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocastan3/getlast/"+this.lhlocastan3id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocastan3=data;
          this.lhlocastan3id=data.id;
          this.tableData9[2].column2=this.lhlocastan3.locasx9;
          this.tableData9[2].column4=this.lhlocastan3.locasy9;
          this.tableData9[2].column6=this.lhlocastan3.locasz9;
          this.tableData10[2].column2=this.lhlocastan3.locasx10;
          this.tableData10[2].column4=this.lhlocastan3.locasy10;
          this.tableData10[2].column6=this.lhlocastan3.locasz10;
          this.tableData11[2].column2=this.lhlocastan3.locasx11;
          this.tableData11[2].column4=this.lhlocastan3.locasy11;
          this.tableData11[2].column6=this.lhlocastan3.locasz11;
          this.tableData12[2].column2=this.lhlocastan3.locasx12;
          this.tableData12[2].column4=this.lhlocastan3.locasy12;
          this.tableData12[2].column6=this.lhlocastan3.locasz12;
        }
      });
    },
    getlhlocaload1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocaload1/getlast/"+this.lhlocaload1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocaload1=data;
          this.lhlocaload1id=data.id;
          this.tableData1[0].column8=this.lhlocaload1.loadx1;
          this.tableData1[1].column8=this.lhlocaload1.loady1;
          this.tableData1[2].column8=this.lhlocaload1.loadz1;
          this.tableData2[0].column8=this.lhlocaload1.loadx2;
          this.tableData2[1].column8=this.lhlocaload1.loady2;
          this.tableData2[2].column8=this.lhlocaload1.loadz2;
          this.tableData3[0].column8=this.lhlocaload1.loadx3;
          this.tableData3[1].column8=this.lhlocaload1.loady3;
          this.tableData3[2].column8=this.lhlocaload1.loadz3;
          this.tableData4[0].column8=this.lhlocaload1.loadx4;
          this.tableData4[1].column8=this.lhlocaload1.loady4;
          this.tableData4[2].column8=this.lhlocaload1.loadz4;
        }
      });
    },
    getlhlocaload2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocaload2/getlast/"+this.lhlocaload2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocaload2=data;
          this.lhlocaload2id=data.id;
          this.tableData5[0].column8=this.lhlocaload2.loadx5;
          this.tableData5[1].column8=this.lhlocaload2.loady5;
          this.tableData5[2].column8=this.lhlocaload2.loadz5;
          this.tableData6[0].column8=this.lhlocaload2.loadx6;
          this.tableData6[1].column8=this.lhlocaload2.loady6;
          this.tableData6[2].column8=this.lhlocaload2.loadz6;
          this.tableData7[0].column8=this.lhlocaload2.loadx7;
          this.tableData7[1].column8=this.lhlocaload2.loady7;
          this.tableData7[2].column8=this.lhlocaload2.loadz7;
          this.tableData8[0].column8=this.lhlocaload2.loadx8;
          this.tableData8[1].column8=this.lhlocaload2.loady8;
          this.tableData8[2].column8=this.lhlocaload2.loadz8;
        }
      });
    },
    getlhlocaload3(){
      this.$http({
        url: this.$http.adornUrl("yhpa/lhlocaload3/getlast/"+this.lhlocaload3id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.lhlocaload3=data;
          this.lhlocaload3id=data.id;
          this.tableData9[0].column8=this.lhlocaload3.loadx9;
          this.tableData9[1].column8=this.lhlocaload3.loady9;
          this.tableData9[2].column8=this.lhlocaload3.loadz9;
          this.tableData10[0].column8=this.lhlocaload3.loadx10;
          this.tableData10[1].column8=this.lhlocaload3.loady10;
          this.tableData10[2].column8=this.lhlocaload3.loadz10;
          this.tableData11[0].column8=this.lhlocaload3.loadx11;
          this.tableData11[1].column8=this.lhlocaload3.loady11;
          this.tableData11[2].column8=this.lhlocaload3.loadz11;
          this.tableData12[0].column8=this.lhlocaload3.loadx12;
          this.tableData12[1].column8=this.lhlocaload3.loady12;
          this.tableData12[2].column8=this.lhlocaload3.loadz12;
        }
      });
    },
    getlhdeltaloca1(){
      this.getlhlocadis1();
      this.getlhlocastan1();
      this.getlhlocaload1();
      this.tableData1[1].column2=(this.lhlocastan1.locasx1-this.lhlocadis1.locax1).toFixed(2);
      this.tableData1[1].column4=(this.lhlocastan1.locasy1-this.lhlocadis1.locay1).toFixed(2);
      this.tableData1[1].column6=(this.lhlocastan1.locasz1-this.lhlocadis1.locaz1).toFixed(2);
      this.tableData2[1].column2=(this.lhlocastan1.locasx2-this.lhlocadis1.locax2).toFixed(2);
      this.tableData2[1].column4=(this.lhlocastan1.locasy2-this.lhlocadis1.locay2).toFixed(2);
      this.tableData2[1].column6=(this.lhlocastan1.locasz2-this.lhlocadis1.locaz2).toFixed(2);
      this.tableData3[1].column2=(this.lhlocastan1.locasx3-this.lhlocadis1.locax3).toFixed(2);
      this.tableData3[1].column4=(this.lhlocastan1.locasy3-this.lhlocadis1.locay3).toFixed(2);
      this.tableData3[1].column6=(this.lhlocastan1.locasz3-this.lhlocadis1.locaz3).toFixed(2);
      this.tableData4[1].column2=(this.lhlocastan1.locasx4-this.lhlocadis1.locax4).toFixed(2);
      this.tableData4[1].column4=(this.lhlocastan1.locasy4-this.lhlocadis1.locay4).toFixed(2);
      this.tableData4[1].column6=(this.lhlocastan1.locasz4-this.lhlocadis1.locaz4).toFixed(2);
    },
    getlhdeltaloca2(){
      this.getlhlocadis2();
      this.getlhlocastan2();
      this.getlhlocaload2();
      this.tableData5[1].column2=(this.lhlocastan2.locasx5-this.lhlocadis2.locax5).toFixed(2);
      this.tableData5[1].column4=(this.lhlocastan2.locasy5-this.lhlocadis2.locay5).toFixed(2);
      this.tableData5[1].column6=(this.lhlocastan2.locasz5-this.lhlocadis2.locaz5).toFixed(2);
      this.tableData6[1].column2=(this.lhlocastan2.locasx6-this.lhlocadis2.locax6).toFixed(2);
      this.tableData6[1].column4=(this.lhlocastan2.locasy6-this.lhlocadis2.locay6).toFixed(2);
      this.tableData6[1].column6=(this.lhlocastan2.locasz6-this.lhlocadis2.locaz6).toFixed(2);
      this.tableData7[1].column2=(this.lhlocastan2.locasx7-this.lhlocadis2.locax7).toFixed(2);
      this.tableData7[1].column4=(this.lhlocastan2.locasy7-this.lhlocadis2.locay7).toFixed(2);
      this.tableData7[1].column6=(this.lhlocastan2.locasz7-this.lhlocadis2.locaz7).toFixed(2);
      this.tableData8[1].column2=(this.lhlocastan2.locasx8-this.lhlocadis2.locax8).toFixed(2);
      this.tableData8[1].column4=(this.lhlocastan2.locasy8-this.lhlocadis2.locay8).toFixed(2);
      this.tableData8[1].column6=(this.lhlocastan2.locasz8-this.lhlocadis2.locaz8).toFixed(2);
    },
    getlhdeltaloca3(){
      this.getlhlocadis3();
      this.getlhlocastan3();
      this.getlhlocaload3();
      this.tableData9[1].column2=(this.lhlocastan3.locasx9-this.lhlocadis3.locax9).toFixed(2);
      this.tableData9[1].column4=(this.lhlocastan3.locasy9-this.lhlocadis3.locay9).toFixed(2);
      this.tableData9[1].column6=(this.lhlocastan3.locasz9-this.lhlocadis3.locaz9).toFixed(2);
      this.tableData10[1].column2=(this.lhlocastan3.locasx10-this.lhlocadis3.locax10).toFixed(2);
      this.tableData10[1].column4=(this.lhlocastan3.locasy10-this.lhlocadis3.locay10).toFixed(2);
      this.tableData10[1].column6=(this.lhlocastan3.locasz10-this.lhlocadis3.locaz10).toFixed(2);
      this.tableData11[1].column2=(this.lhlocastan3.locasx11-this.lhlocadis3.locax11).toFixed(2);
      this.tableData11[1].column4=(this.lhlocastan3.locasy11-this.lhlocadis3.locay11).toFixed(2);
      this.tableData11[1].column6=(this.lhlocastan3.locasz11-this.lhlocadis3.locaz11).toFixed(2);
      this.tableData12[1].column2=(this.lhlocastan3.locasx12-this.lhlocadis3.locax12).toFixed(2);
      this.tableData12[1].column4=(this.lhlocastan3.locasy12-this.lhlocadis3.locay12).toFixed(2);
      this.tableData12[1].column6=(this.lhlocastan3.locasz12-this.lhlocadis3.locaz12).toFixed(2);
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
      this.getlhdeltaloca1();
      this.getlhdeltaloca2();
      this.getlhdeltaloca3();
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

