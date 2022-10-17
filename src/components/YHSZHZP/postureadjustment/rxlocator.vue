<template>
  <div class="leftshang">
    <!-- <div class="tree_content"></div> -->
    <div class="data_content fl">
      <div class="fasten_content fl">
        <div class="fasten_title">
          <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
            src="@/assets/images/HDYMJQRZK/机器人/机器人.png" alt="" />
          右机翼下壁板吊装
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
              右机翼下壁板定位器1位置(mm)与承载(kg)
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
              右机翼下壁板定位器2位置(mm)与承载(kg)
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
              右机翼下壁板定位器3位置(mm)与承载(kg)
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
              右机翼下壁板定位器4位置(mm)与承载(kg)
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
              右机翼下壁板定位器5位置(mm)与承载(kg)
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
              右机翼下壁板定位器6位置(mm)与承载(kg)
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
              右机翼下壁板定位器7位置(mm)与承载(kg)
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
              右机翼下壁板定位器8位置(mm)与承载(kg)
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
              <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
              右机翼下壁板底座1位置(mm)
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
              右机翼下壁板底座2位置(mm)
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
              </el-table>
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
              <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
              右机翼下壁板底座3位置(mm)
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
              右机翼下壁板底座4位置(mm)
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
              右机翼下壁板底座5位置(mm)
            </div>
            <div class="data_table">
              <el-table :data="tableData13" style="width: 100%; height: 100%;"
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
              </el-table>
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
              <img style="margin-left:-30px;margin-top:-6px" width="30px" height="30px"
                src="@/assets/images/HDYMJQRZK/机器人/加速度.png" alt="" />
              右机翼下壁板大平台位置(mm)
            </div>
            <div class="data_table">
              <el-table :data="tableData14" style="width: 100%; height: 100%;"
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
      rxbasestanid:0,
      rxlocastan1id:0,
      rxlocastan2id:0,
      rxbasedisid:0,
      rxlocadis1id:0,
      rxlocadis2id:0,
      rxbasedis:{},
      rxlocadis1:{},
      rxlocadis2:{},
      rxbasestan:{},
      rxlocastan1:{},
      rxlocastan2:{},
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
        {column1:'Xc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
        ],
      tableData10: [
        {column1:'Xc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
        ],
      tableData11: [
        {column1:'Xc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
        ],
      tableData12: [
        {column1:'Xc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
        ],
      tableData13: [
        {column1:'Xc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△X',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Xt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
        ],
      tableData14: [
        {column1:'Zc',column2:`${Xc}`,column3:'Zc',column4:`${Yc}`},
        {column1:'△Z',column2:`${Xc}`,column3:'△Z',column4:`${Yc}`},
        {column1:'Zt',column2:`${Xc}`,column3:'Zt',column4:`${Yc}`}
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
    getrxlocadis1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocadis1/getlast/"+this.rxlocadis1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxlocadis1=data;
          this.rxlocadis1id=data.id;
          this.tableData1[0].column2=this.rxlocadis1.locax1;
          this.tableData1[0].column4=this.rxlocadis1.locay1;
          this.tableData1[0].column6=this.rxlocadis1.locaz1;
          this.tableData2[0].column2=this.rxlocadis1.locax2;
          this.tableData2[0].column4=this.rxlocadis1.locay2;
          this.tableData2[0].column6=this.rxlocadis1.locaz2;
          this.tableData3[0].column2=this.rxlocadis1.locax3;
          this.tableData3[0].column4=this.rxlocadis1.locay3;
          this.tableData3[0].column6=this.rxlocadis1.locaz3;
          this.tableData4[0].column2=this.rxlocadis1.locax4;
          this.tableData4[0].column4=this.rxlocadis1.locay4;
          this.tableData4[0].column6=this.rxlocadis1.locaz4;
        }
      });
    },
    getrxlocadis2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocadis2/getlast/"+this.rxlocadis2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxlocadis2=data;
          this.rxlocadis2id=data.id;
          this.tableData5[0].column2=this.rxlocadis2.locax5;
          this.tableData5[0].column4=this.rxlocadis2.locay5;
          this.tableData5[0].column6=this.rxlocadis2.locaz5;
          this.tableData6[0].column2=this.rxlocadis2.locax6;
          this.tableData6[0].column4=this.rxlocadis2.locay6;
          this.tableData6[0].column6=this.rxlocadis2.locaz6;
          this.tableData7[0].column2=this.rxlocadis2.locax7;
          this.tableData7[0].column4=this.rxlocadis2.locay7;
          this.tableData7[0].column6=this.rxlocadis2.locaz7;
          this.tableData8[0].column2=this.rxlocadis2.locax8;
          this.tableData8[0].column4=this.rxlocadis2.locay8;
          this.tableData8[0].column6=this.rxlocadis2.locaz8;
        }
      });
    },
    getrxbasedis(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxbasedis/getlast/"+this.rxbasedisid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxbasedis=data;
          this.rxbasedisid=data.id;
          this.tableData9[0].column2=this.rxbasedis.basex1;
          this.tableData9[0].column4=this.rxbasedis.basez1;
          this.tableData10[0].column2=this.rxbasedis.basex2;
          this.tableData10[0].column4=this.rxbasedis.basez2;
          this.tableData11[0].column2=this.rxbasedis.basex3;
          this.tableData11[0].column4=this.rxbasedis.basez3;
          this.tableData12[0].column2=this.rxbasedis.basex4;
          this.tableData12[0].column4=this.rxbasedis.basez4;
          this.tableData13[0].column2=this.rxbasedis.basex4;
          this.tableData13[0].column4=this.rxbasedis.basez4;
          this.tableData14[0].column2=this.rxbasedis.basesqux;
          this.tableData14[0].column4=this.rxbasedis.basesquz;
        }
      });
    },
    getrxlocastan1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocastan1/getlast/"+this.rxlocastan1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("sdata",data);
          this.rxlocastan1=data;
          this.rxlocastan1id=data.id;
          this.tableData1[2].column2=this.rxlocastan1.locasx1;
          this.tableData1[2].column4=this.rxlocastan1.locasy1;
          this.tableData1[2].column6=this.rxlocastan1.locasz1;
          this.tableData2[2].column2=this.rxlocastan1.locasx2;
          this.tableData2[2].column4=this.rxlocastan1.locasy2;
          this.tableData2[2].column6=this.rxlocastan1.locasz2;
          this.tableData3[2].column2=this.rxlocastan1.locasx3;
          this.tableData3[2].column4=this.rxlocastan1.locasy3;
          this.tableData3[2].column6=this.rxlocastan1.locasz3;
          this.tableData4[2].column2=this.rxlocastan1.locasx4;
          this.tableData4[2].column4=this.rxlocastan1.locasy4;
          this.tableData4[2].column6=this.rxlocastan1.locasz4;
        }
      });
    },
    getrxlocastan2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocastan2/getlast/"+this.rxlocastan2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("sdata",data);
          this.rxlocastan2=data;
          this.rxlocastan2id=data.id;
          this.tableData5[2].column2=this.rxlocastan2.locasx5;
          this.tableData5[2].column4=this.rxlocastan2.locasy5;
          this.tableData5[2].column6=this.rxlocastan2.locasz5;
          this.tableData6[2].column2=this.rxlocastan2.locasx6;
          this.tableData6[2].column4=this.rxlocastan2.locasy6;
          this.tableData6[2].column6=this.rxlocastan2.locasz6;
          this.tableData7[2].column2=this.rxlocastan2.locasx7;
          this.tableData7[2].column4=this.rxlocastan2.locasy7;
          this.tableData7[2].column6=this.rxlocastan2.locasz7;
          this.tableData8[2].column2=this.rxlocastan2.locasx8;
          this.tableData8[2].column4=this.rxlocastan2.locasy8;
          this.tableData8[2].column6=this.rxlocastan2.locasz8;
        }
      });
    },
    getrxbasestan(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxbasestan/getlast/"+this.rxbasestanid),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxbasestan=data;
          this.rxbasestanid=data.id;
          this.tableData9[0].column2=this.rxbasestan.basesx1;
          this.tableData9[0].column4=this.rxbasestan.basesz1;
          this.tableData10[0].column2=this.rxbasestan.basesx2;
          this.tableData10[0].column4=this.rxbasestan.basesz2;
          this.tableData11[0].column2=this.rxbasestan.basesx3;
          this.tableData11[0].column4=this.rxbasestan.basesz3;
          this.tableData12[0].column2=this.rxbasestan.basesx4;
          this.tableData12[0].column4=this.rxbasestan.basesz4;
          this.tableData13[0].column2=this.rxbasestan.basesx4;
          this.tableData13[0].column4=this.rxbasestan.basesz4;
          this.tableData14[0].column2=this.rxbasestan.basesqusx;
          this.tableData14[0].column4=this.rxbasestan.basesqusz;
        }
      });
    },
    getrxdeltaloca1(){
      this.getrxlocadis1();
      this.getrxlocastan1();
      this.tableData1[1].column2=(this.rxlocastan1.locasx1-this.rxlocadis1.locax1).toFixed(2);
      this.tableData1[1].column4=(this.rxlocastan1.locasy1-this.rxlocadis1.locay1).toFixed(2);
      this.tableData1[1].column6=(this.rxlocastan1.locasz1-this.rxlocadis1.locaz1).toFixed(2);
      this.tableData2[1].column2=(this.rxlocastan1.locasx2-this.rxlocadis1.locax2).toFixed(2);
      this.tableData2[1].column4=(this.rxlocastan1.locasy2-this.rxlocadis1.locay2).toFixed(2);
      this.tableData2[1].column6=(this.rxlocastan1.locasz2-this.rxlocadis1.locaz2).toFixed(2);
      this.tableData3[1].column2=(this.rxlocastan1.locasx3-this.rxlocadis1.locax3).toFixed(2);
      this.tableData3[1].column4=(this.rxlocastan1.locasy3-this.rxlocadis1.locay3).toFixed(2);
      this.tableData3[1].column6=(this.rxlocastan1.locasz3-this.rxlocadis1.locaz3).toFixed(2);
      this.tableData4[1].column2=(this.rxlocastan1.locasx4-this.rxlocadis1.locax4).toFixed(2);
      this.tableData4[1].column4=(this.rxlocastan1.locasy4-this.rxlocadis1.locay4).toFixed(2);
      this.tableData4[1].column6=(this.rxlocastan1.locasz4-this.rxlocadis1.locax1).toFixed(2);
    },
    getrxdeltaloca2(){
      this.getrxlocadis1();
      this.getrxlocastan1();
      this.tableData5[1].column2=(this.rxlocastan2.locasx1-this.rxlocadis2.locax1).toFixed(2);
      this.tableData5[1].column4=(this.rxlocastan2.locasy1-this.rxlocadis2.locay1).toFixed(2);
      this.tableData5[1].column6=(this.rxlocastan2.locasz1-this.rxlocadis2.locaz1).toFixed(2);
      this.tableData6[1].column2=(this.rxlocastan2.locasx2-this.rxlocadis2.locax2).toFixed(2);
      this.tableData6[1].column4=(this.rxlocastan2.locasy2-this.rxlocadis2.locay2).toFixed(2);
      this.tableData6[1].column6=(this.rxlocastan2.locasz2-this.rxlocadis2.locaz2).toFixed(2);
      this.tableData7[1].column2=(this.rxlocastan2.locasx3-this.rxlocadis2.locax3).toFixed(2);
      this.tableData7[1].column4=(this.rxlocastan2.locasy3-this.rxlocadis2.locay3).toFixed(2);
      this.tableData7[1].column6=(this.rxlocastan2.locasz3-this.rxlocadis2.locaz3).toFixed(2);
      this.tableData8[1].column2=(this.rxlocastan2.locasx4-this.rxlocadis2.locax4).toFixed(2);
      this.tableData8[1].column4=(this.rxlocastan2.locasy4-this.rxlocadis2.locay4).toFixed(2);
      this.tableData8[1].column6=(this.rxlocastan2.locasz4-this.rxlocadis2.locax1).toFixed(2);
    },
    getrxdeltabase(){
      this.getrxbasedis();
      this.getrxbasestan();
      this.tableData9[1].column2=(this.rxbasestan.basesx1-this.rxbasedis.basex1).toFixed(2);
      this.tableData9[1].column4=(this.rxbasestan.basesy1-this.rxbasedis.basey1).toFixed(2);
      this.tableData10[1].column2=(this.rxbasestan.basesx2-this.rxbasedis.basex2).toFixed(2);
      this.tableData10[1].column4=(this.rxbasestan.basesy2-this.rxbasedis.basey2).toFixed(2);
      this.tableData11[1].column2=(this.rxbasestan.basesx3-this.rxbasedis.basex3).toFixed(2);
      this.tableData11[1].column4=(this.rxbasestan.basesy3-this.rxbasedis.basey3).toFixed(2);
      this.tableData12[1].column2=(this.rxbasestan.basesx4-this.rxbasedis.basex4).toFixed(2);
      this.tableData12[1].column4=(this.rxbasestan.basesy4-this.rxbasedis.basey4).toFixed(2);
      this.tableData13[1].column2=(this.rxbasestan.basesx4-this.rxbasedis.basex4).toFixed(2);
      this.tableData13[1].column4=(this.rxbasestan.basesy4-this.rxbasedis.basey4).toFixed(2);
      this.tableData14[1].column2=(this.rxbasestan.basesx4-this.rxbasedis.basex4).toFixed(2);
      this.tableData14[1].column4=(this.rxbasestan.basesy4-this.rxbasedis.basey4).toFixed(2);
    },
    getrxlocaload1(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocaload1/getlast/"+this.rxlocaload1id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxlocaload1=data;
          this.rxlocaload1id=data.id;
          this.tableData1[0].column8=this.rxlocaload1.loadx1;
          this.tableData1[1].column8=this.rxlocaload1.loady1;
          this.tableData1[2].column8=this.rxlocaload1.loadz1;
          this.tableData1[0].column8=this.rxlocaload1.loadx2;
          this.tableData1[1].column8=this.rxlocaload1.loady2;
          this.tableData1[2].column8=this.rxlocaload1.loadz2;
          this.tableData1[0].column8=this.rxlocaload1.loadx3;
          this.tableData1[1].column8=this.rxlocaload1.loady3;
          this.tableData1[2].column8=this.rxlocaload1.loadz3;
          this.tableData1[0].column8=this.rxlocaload1.loadx4;
          this.tableData1[1].column8=this.rxlocaload1.loady4;
          this.tableData1[2].column8=this.rxlocaload1.loadz4;
        }
      });
    },
    getrxlocaload2(){
      this.$http({
        url: this.$http.adornUrl("yhpa/rxlocaload2/getlast/"+this.rxlocaload2id),
        method: "get",
      }).then(({ data }) => {
        if (data!='') {
          console.log("data",data);
          this.rxlocaload2=data;
          this.rxlocaload2id=data.id;
          this.tableData1[0].column8=this.rxlocaload2.loadx5;
          this.tableData1[1].column8=this.rxlocaload2.loady5;
          this.tableData1[2].column8=this.rxlocaload2.loadz5;
          this.tableData1[0].column8=this.rxlocaload2.loadx6;
          this.tableData1[1].column8=this.rxlocaload2.loady6;
          this.tableData1[2].column8=this.rxlocaload2.loadz6;
          this.tableData1[0].column8=this.rxlocaload2.loadx7;
          this.tableData1[1].column8=this.rxlocaload2.loady7;
          this.tableData1[2].column8=this.rxlocaload2.loadz7;
          this.tableData1[0].column8=this.rxlocaload2.loadx8;
          this.tableData1[1].column8=this.rxlocaload2.loady8;
          this.tableData1[2].column8=this.rxlocaload2.loadz8;
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
      this.getrxdeltaloca1();
      this.getrxdeltaloca2();
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

