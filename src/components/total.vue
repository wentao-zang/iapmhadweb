<!--  -->
<template>
  <div>
    <div class="header">
      <div class="bg_header">
        <div class="header_nav fl t_title" @click="turnCmp">
          数据采集与分析平台
        </div>
      </div>
    </div>
    <div class="tree_content">
      <el-tree
        :data="tree"
        :props="defaultProps"
        accordion
        ref="tree"
        node-key="id"
        @node-click="handleNodeClick"
        @node-expand="handleNodeClick"
        auto-expand-parent
      >
      </el-tree>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmp: true,
      link: "/total/hdymzkjqrxt/assemblyState",
      tree: [
        {
          id: 1,
          label: "活动翼面制孔机器人系统",
          link: "/total/hdymzkjqrxt/system",
          children: [
            {
              id: 11,
              label: "装配过程分析与决策",
              children: [
                {
                  label: "装配质量分析",
                  id: 111,
                  link: "/total/hdymzkjqrxt/assemblyState"
                },
                {
                  label: "设备状态监控",
                  id: 112,
                  link: "/total/hdymzkjqrxt/deviceState"
                },
                {
                  label: "产品加工进度",
                  id: 113,
                  link: "/total/hdymzkjqrxt/productState"
                }
              ]
            },
            {
              id: 12,
              label: "系统设备",
              children: [
                {
                  id: 121,
                  label: "终端执行器",
                  link: "/total/hdymzkjqrxt/ZDZXQ"
                },
                { id: 122, label: "机器人", link: "/total/hdymzkjqrxt/robot" },
                { id: 123, label: "移动平台", link: "/total/hdymzkjqrxt/YDPT" }
              ]
            },
            {
              id: 13,
              label: "工艺参数",
              children: [
                {
                  id: 131,
                  label: "紧固件表",
                  link: "/total/hdymzkjqrxt/fasten"
                },
                {
                  id: 132,
                  label: "一般孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/generalHoleProcess"
                },
                {
                  id: 133,
                  label: "冷挤压孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/coldExtrusionHoleProcess"
                },
                {
                  id: 134,
                  label: "预连接孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/fastenHoleProcess"
                },
                {
                  id: 135,
                  label: "描点工艺参数表",
                  link: "/total/hdymzkjqrxt/pointTracingProcess"
                },
                {
                  id: 136,
                  label: "孔径测量表",
                  link: "/total/hdymzkjqrxt/holeMeasurement"
                },
                {
                  id: 137,
                  label: "冷挤压孔刀具表",
                  link: "/total/hdymzkjqrxt/coldExtrusionHoleTool"
                },
                {
                  id: 138,
                  label: "非冷挤压孔刀具表",
                  link: "/total/hdymzkjqrxt/nonColdExtrusionHoleTool"
                },
                {
                  id: 139,
                  label: "工艺参数库修改日志",
                  link: "/total/hdymzkjqrxt/modifyLog"
                }
              ]
            },
            {
              id: 14,
              label: "系统信息表",
              children: [
                {
                  id: 141,
                  label: "系统组成表",
                  link: "/total/hdymzkjqrxt/hdymjqrzkxtStructure"
                },
                {
                  id: 142,
                  label: "机器人规格信息表",
                  link: "/total/hdymzkjqrxt/jqrSpecification"
                },
                {
                  id: 143,
                  label: "制孔终端执行器规格信息表",
                  link: "/total/hdymzkjqrxt/zkzdzxqSpecification"
                },
                {
                  id: 144,
                  label: "移动平台规格信息表",
                  link: "/total/hdymzkjqrxt/ydptSpecification"
                },
                {
                  id: 145,
                  label: "刀库规格信息表",
                  link: "/total/hdymzkjqrxt/dkSpecification"
                },
                {
                  id: 146,
                  label: "进给装置规格信息",
                  link: "/total/hdymzkjqrxt/jgzzSpecification"
                },
                {
                  id: 147,
                  label: "压脚装置规格信息表",
                  link: "/total/hdymzkjqrxt/yjzzSpecification"
                },
                {
                  id: 148,
                  label: "法向测量装置规格信息表",
                  link: "/total/hdymzkjqrxt/fxclzzSpecification"
                },
                {
                  id: 149,
                  label: "视觉测量装置规格信息表",
                  link: "/total/hdymzkjqrxt/sjclzzSpecification"
                },
                {
                  id: 1410,
                  label: "产品信息表",
                  link: "/total/hdymzkjqrxt/cpProduct"
                },
                {
                  id: 1411,
                  label: "工艺流程表",
                  link: "/total/hdymzkjqrxt/gyProcess"
                },
                {
                  id: 1412,
                  label: "制孔工艺要求表",
                  link: "/total/hdymzkjqrxt/holeAccuracy"
                },
                {
                  id: 1413,
                  label: "制孔工艺表",
                  link: "/total/hdymzkjqrxt/holeProcess"
                },
                {
                  id: 1414,
                  label: "机器人运动参数表",
                  link: "/total/hdymzkjqrxt/robotProcess"
                }
              ]
            }
          ]
        },
        {
          label: "机翼翼盒数字化装配系统",
          link: "/total/yhszhzp/yhsystem",
          children: [
            {
              id: 21,
              label: "机床制孔系统",
              children: [
                {
                  label: "末端执行器",
                  id: 211,
                  link: "/total/yhszhzp/endeffector"
                },
                {
                  label: "设备轴状态",
                  id: 212,
                  link: "/total/yhszhzp/equipmentaxis"
                },
                {
                  label: "线激光扫描系统",
                  id: 213,
                  link: "/total/yhszhzp/linearlaserscanning"
                },
                {
                  label: "工艺信息",
                  id: 214,
                  link: "/total/yhszhzp/processinformation"
                }
              ]
            },
            {
              id: 22,
              label: "调姿控制系统",
              children:[
                {
                  id: 221,
                  label: "定位器实时坐标",
                  children: [
                {
                  id: 2211,
                  label: "左机翼上壁板吊装",
                  link: "/total/yhszhzp/locator/lslocator"
                },
                {
                  id: 2212,
                  label: "左机翼下壁板吊装",
                  link: "/total/yhszhzp/locator/lxlocator"
                },
                {
                  id: 2213,
                  label: "左前缘吊装",
                  link: "/total/yhszhzp/locator/lqlocator"
                },
                {
                  id: 2214,
                  label: "右机翼上壁板吊装",
                  link: "/total/yhszhzp/locator/rslocator"
                },
                {
                  id: 2215,
                  label: "右机翼下壁板吊装",
                  link: "/total/yhszhzp/locator/rxlocator"
                },
                {
                  id: 2216,
                  label: "右前缘吊装",
                  link: "/total/yhszhzp/locator/rqlocator"
                }
              ]
                },
                {
                  id: 222,
                  label: "产品位姿测量系统",
                  children:[
                  {
                  id: 2221,
                  label: "产品位姿测量系统",
                  link: "/total/yhszhzp/test/lstest"
                }
                  ]
                }
              ]
            },
            {
              id: 23,
              label: "装配过程分析与决策",
              children: [
                {
                  id: 231,
                  label: "制孔质量分析",
                  link: "/total/yhszhzp/holeanalysys"
                },
                {
                  id: 232,
                  label: "产品位姿评价",
                  link: "/total/yhszhzp/postureanalysys"
                },
              ]
            }
          ]
        },
        {
          label: "机翼大部件对接系统",
          children: [
            {
              id: 211,
              label: "装配过程分析与决策",
              children: [
                {
                  label: "装配质量分析",
                  id: 1211,
                  link: "/total/hdymzkjqrxt/assemblyState"
                },
                {
                  label: "设备状态监控",
                  id: 112,
                  link: "/total/hdymzkjqrxt/deviceState"
                },
                {
                  label: "产品加工进度",
                  id: 113,
                  link: "/total/hdymzkjqrxt/productState"
                }
              ]
            },
            {
              id: 12,
              label: "系统设备",
              children: [
                {
                  id: 121,
                  label: "终端执行器",
                  link: "/total/hdymzkjqrxt/ZDZXQ"
                },
                { id: 122, label: "机器人", link: "/total/hdymzkjqrxt/robot" },
                { id: 123, label: "移动平台", link: "/total/hdymzkjqrxt/YDPT" }
              ]
            },
            {
              id: 13,
              label: "工艺参数",
              children: [
                {
                  id: 131,
                  label: "紧固件表",
                  link: "/total/hdymzkjqrxt/fasten"
                },
                {
                  id: 132,
                  label: "一般孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/generalHoleProcess"
                },
                {
                  id: 133,
                  label: "冷挤压孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/coldExtrusionHoleProcess"
                },
                {
                  id: 134,
                  label: "预连接孔加工工艺参数表",
                  link: "/total/hdymzkjqrxt/fastenHoleProcess"
                },
                {
                  id: 135,
                  label: "描点工艺参数表",
                  link: "/total/hdymzkjqrxt/pointTracingProcess"
                },
                {
                  id: 136,
                  label: "孔径测量表",
                  link: "/total/hdymzkjqrxt/holeMeasurement"
                },
                {
                  id: 137,
                  label: "冷挤压孔刀具表",
                  link: "/total/hdymzkjqrxt/coldExtrusionHoleTool"
                },
                {
                  id: 138,
                  label: "非冷挤压孔刀具表",
                  link: "/total/hdymzkjqrxt/nonColdExtrusionHoleTool"
                },
                {
                  id: 139,
                  label: "工艺参数库修改日志",
                  link: "/total/hdymzkjqrxt/modifyLog"
                }
              ]
            },
            {
              id: 14,
              label: "系统信息表",
              children: [
                {
                  id: 141,
                  label: "系统组成表",
                  link: "/total/hdymzkjqrxt/hdymjqrzkxtStructure"
                },
                {
                  id: 142,
                  label: "机器人规格信息表",
                  link: "/total/hdymzkjqrxt/jqrSpecification"
                },
                {
                  id: 143,
                  label: "制孔终端执行器规格信息表",
                  link: "/total/hdymzkjqrxt/zkzdzxqSpecification"
                },
                {
                  id: 144,
                  label: "移动平台规格信息表",
                  link: "/total/hdymzkjqrxt/ydptSpecification"
                },
                {
                  id: 145,
                  label: "刀库规格信息表",
                  link: "/total/hdymzkjqrxt/dkSpecification"
                },
                {
                  id: 146,
                  label: "进给装置规格信息",
                  link: "/total/hdymzkjqrxt/jgzzSpecification"
                },
                {
                  id: 147,
                  label: "压脚装置规格信息表",
                  link: "/total/hdymzkjqrxt/yjzzSpecification"
                },
                {
                  id: 148,
                  label: "法向测量装置规格信息表",
                  link: "/total/hdymzkjqrxt/fxclzzSpecification"
                },
                {
                  id: 149,
                  label: "视觉测量装置规格信息表",
                  link: "/total/hdymzkjqrxt/sjclzzSpecification"
                },
                {
                  id: 1410,
                  label: "产品信息表",
                  link: "/total/hdymzkjqrxt/cpProduct"
                },
                {
                  id: 1411,
                  label: "工艺流程表",
                  link: "/total/hdymzkjqrxt/gyProcess"
                },
                {
                  id: 1412,
                  label: "制孔工艺要求表",
                  link: "/total/hdymzkjqrxt/holeAccuracy"
                },
                {
                  id: 1413,
                  label: "制孔工艺表",
                  link: "/total/hdymzkjqrxt/holeProcess"
                },
                {
                  id: 1414,
                  label: "机器人运动参数表",
                  link: "/total/hdymzkjqrxt/robotProcess"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
      if (data.link != undefined) {
        this.link = data.link;
        this.turn();
      }
    },
    fir() {
      console.log(this.$refs.tree.store.nodesMap[11]);
      this.$refs.tree.store.nodesMap[1].expanded = true;
      this.$refs.tree.store.nodesMap[11].expanded = true;
    },
    turnCmp() {
      this.cmp = !this.cmp;
      this.turn();
      console.log(this.cmp);
    },
    turn() {
      if (this.cmp) {
        this.$router.push({ path: this.link, replace: true });
      } else {
        this.$router.push({ path: this.link + "1", replace: true });
      }
    }
    // fre() {
    //   this.$router.go(0);
    // }
  },

  mounted() {
    this.$nextTick(() => {
      this.fir();
    });
    // this.$nextTick(() => {
    //   setInterval(this.fre, 300000);
    // });
  }
};
</script>
<style scoped>
.el-tree-node__content {
  height: 35px;
}
</style>
