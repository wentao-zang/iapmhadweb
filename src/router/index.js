import Vue from "vue";
import Router from "vue-router";
import HelloWorld1 from "@/components/HelloWorld1";
import login from "@/components/login";
import total from "@/components/total";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
import {
  hdymsystem,
  // 工艺参数
  fasten,
  coldExtrusionHoleProcess,
  coldExtrusionHoleTool,
  fastenHoleProcess,
  generalHoleProcess,
  holeMeasurement,
  nonColdExtrusionHoleTool,
  pointTracingProcess,
  modifyLog,
  //分析
  assemblyState,
  deviceState,
  productState,
  //系统设备
  ZDZXQ,
  robot,
  YDPT,
  //静态信息表
  hdymjqrzkxtStructure, //活动翼面机器人制孔系统组成表
  jqrSpecification, //机器人规格信息表
  zkzdzxqSpecification, //制孔终端执行器规格信息表
  ydptSpecification, //移动平台规格信息表
  dkSpecification, //刀库规格信息表
  jgzzSpecification, //进给装置规格信息
  yjzzSpecification, //压脚装置规格信息表
  fxclzzSpecification, //法向测量装置规格信息表
  sjclzzSpecification, //视觉测量装置规格信息表
  cpProduct, //产品信息表
  gyProcess, //工艺流程表
  holeAccuracy, //制孔工艺要求表
  holeProcess, //制孔工艺表
  robotProcess //机器人运动参数表
} from "@/components/HDYMJQRZK/index";

import {
  system1,
  // 工艺参数
  fasten1,
  coldExtrusionHoleProcess1,
  coldExtrusionHoleTool1,
  fastenHoleProcess1,
  generalHoleProcess1,
  holeMeasurement1,
  nonColdExtrusionHoleTool1,
  pointTracingProcess1,
  modifyLog1,
  //分析
  assemblyState1,
  deviceState1,
  productState1,
  //系统设备
  ZDZXQ1,
  robot1,
  YDPT1,
  //静态信息表
  hdymjqrzkxtStructure1, //活动翼面机器人制孔系统组成表
  jqrSpecification1, //机器人规格信息表
  zkzdzxqSpecification1, //制孔终端执行器规格信息表
  ydptSpecification1, //移动平台规格信息表
  dkSpecification1, //刀库规格信息表
  jgzzSpecification1, //进给装置规格信息
  yjzzSpecification1, //压脚装置规格信息表
  fxclzzSpecification1, //法向测量装置规格信息表
  sjclzzSpecification1, //视觉测量装置规格信息表
  cpProduct1, //产品信息表
  gyProcess1, //工艺流程表
  holeAccuracy1, //制孔工艺要求表
  holeProcess1, //制孔工艺表
  robotProcess1 //机器人运动参数表
} from "@/components/HDYMJQRZK1/index";

import {
  endeffector,
  equipmentaxis,
  linearlaserscanning,
  processinformation,
  holeanalysys,
  lslocator,
  lxlocator,
  lqlocator,
  rslocator,
  rxlocator,
  rqlocator,
  test,
  postureanalysys,
  yhsystem
} from "@/components/YHSZHZP/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/HelloWorld1",
      name: "HelloWorld1",
      component: HelloWorld1
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/total",
      name: "total",
      component: total,
      children: [
        //分析内容
        { 
          path: "", 
          name: "hdymsystem", 
          component: hdymsystem
        },
        {
          path: "hdymzkjqrxt/system",
          name: "hdymsystem",
          component: hdymsystem
        },
        {
          path: "hdymzkjqrxt/system1",
          name: "system1",
          component: system1
        },
        {
          path: "hdymzkjqrxt/assemblyState",
          name: "assemblyState",
          component: assemblyState
        },
        {
          path: "hdymzkjqrxt/deviceState",
          name: "deviceState",
          component: deviceState
        },
        {
          path: "hdymzkjqrxt/productState",
          name: "productState",
          component: productState
        },

        // 工艺参数
        {
          path: "hdymzkjqrxt/fasten",
          name: "fasten",
          component: fasten
        },
        {
          path: "hdymzkjqrxt/coldExtrusionHoleProcess",
          name: "coldExtrusionHoleProcess",
          component: coldExtrusionHoleProcess
        },
        {
          path: "hdymzkjqrxt/coldExtrusionHoleTool",
          name: "coldExtrusionHoleTool",
          component: coldExtrusionHoleTool
        },
        {
          path: "hdymzkjqrxt/fastenHoleProcess",
          name: "fastenHoleProcess",
          component: fastenHoleProcess
        },
        {
          path: "hdymzkjqrxt/generalHoleProcess",

          name: "generalHoleProcess",
          component: generalHoleProcess
        },
        {
          path: "hdymzkjqrxt/holeMeasurement",
          name: "holeMeasurement",
          component: holeMeasurement
        },
        {
          path: "hdymzkjqrxt/nonColdExtrusionHoleTool",
          name: "nonColdExtrusionHoleTool",
          component: nonColdExtrusionHoleTool
        },
        {
          path: "hdymzkjqrxt/pointTracingProcess",
          name: "pointTracingProcess",
          component: pointTracingProcess
        },
        {
          path: "hdymzkjqrxt/modifyLog",
          name: "modifyLog",
          component: modifyLog
        },
        //静态信息表
        {
          path: "hdymzkjqrxt/hdymjqrzkxtStructure",
          name: "hdymjqrzkxtStructure",
          component: hdymjqrzkxtStructure
        },
        {
          path: "hdymzkjqrxt/jqrSpecification",
          name: "jqrSpecification",
          component: jqrSpecification
        },
        {
          path: "hdymzkjqrxt/zkzdzxqSpecification",
          name: "zkzdzxqSpecification",
          component: zkzdzxqSpecification
        },
        {
          path: "hdymzkjqrxt/ydptSpecification",
          name: "ydptSpecification",
          component: ydptSpecification
        },
        {
          path: "hdymzkjqrxt/dkSpecification",
          name: "dkSpecification",
          component: dkSpecification
        },
        {
          path: "hdymzkjqrxt/jgzzSpecification",
          name: "jgzzSpecification",
          component: jgzzSpecification
        },
        {
          path: "hdymzkjqrxt/yjzzSpecification",
          name: "yjzzSpecification",
          component: yjzzSpecification
        },
        {
          path: "hdymzkjqrxt/fxclzzSpecification",
          name: "fxclzzSpecification",
          component: fxclzzSpecification
        },
        {
          path: "hdymzkjqrxt/sjclzzSpecification",
          name: "sjclzzSpecification",
          component: sjclzzSpecification
        },
        {
          path: "hdymzkjqrxt/cpProduct",
          name: "cpProduct",
          component: cpProduct
        },
        {
          path: "hdymzkjqrxt/gyProcess",
          name: "gyProcess",
          component: gyProcess
        },
        {
          path: "hdymzkjqrxt/holeAccuracy",
          name: "holeAccuracy",
          component: holeAccuracy
        },
        {
          path: "hdymzkjqrxt/holeProcess",
          name: "holeProcess",
          component: holeProcess
        },
        {
          path: "hdymzkjqrxt/robotProcess",
          name: "robotProcess",
          component: robotProcess
        },
        //系统设备
        {
          path: "hdymzkjqrxt/ZDZXQ",
          name: "ZDZXQ",
          component: ZDZXQ
        },
        {
          path: "hdymzkjqrxt/robot",
          name: "robot",
          component: robot
        },
        {
          path: "hdymzkjqrxt/YDPT",
          name: "YDPT",
          component: YDPT
        },
        //展示
        {
          path: "hdymzkjqrxt/assemblyState1",
          name: "assemblyState1",
          component: assemblyState1
        },
        {
          path: "hdymzkjqrxt/deviceState1",
          name: "deviceState1",
          component: deviceState1
        },
        {
          path: "hdymzkjqrxt/productState1",
          name: "productState1",
          component: productState1
        },

        // 工艺参数
        {
          path: "hdymzkjqrxt/fasten1",
          name: "fasten1",
          component: fasten1
        },
        {
          path: "hdymzkjqrxt/coldExtrusionHoleProcess1",
          name: "coldExtrusionHoleProcess1",
          component: coldExtrusionHoleProcess1
        },
        {
          path: "hdymzkjqrxt/coldExtrusionHoleTool1",
          name: "coldExtrusionHoleTool1",
          component: coldExtrusionHoleTool1
        },
        {
          path: "hdymzkjqrxt/fastenHoleProcess1",
          name: "fastenHoleProcess1",
          component: fastenHoleProcess1
        },
        {
          path: "hdymzkjqrxt/generalHoleProcess1",

          name: "generalHoleProcess1",
          component: generalHoleProcess1
        },
        {
          path: "hdymzkjqrxt/holeMeasurement1",
          name: "holeMeasurement1",
          component: holeMeasurement1
        },
        {
          path: "hdymzkjqrxt/nonColdExtrusionHoleTool1",
          name: "nonColdExtrusionHoleTool1",
          component: nonColdExtrusionHoleTool1
        },
        {
          path: "hdymzkjqrxt/pointTracingProcess1",
          name: "pointTracingProcess1",
          component: pointTracingProcess1
        },
        {
          path: "hdymzkjqrxt/modifyLog1",
          name: "modifyLog1",
          component: modifyLog1
        },
        //静态信息表
        {
          path: "hdymzkjqrxt/hdymjqrzkxtStructure1",
          name: "hdymjqrzkxtStructure1",
          component: hdymjqrzkxtStructure1
        },
        {
          path: "hdymzkjqrxt/jqrSpecification1",
          name: "jqrSpecification1",
          component: jqrSpecification1
        },
        {
          path: "hdymzkjqrxt/zkzdzxqSpecification1",
          name: "zkzdzxqSpecification1",
          component: zkzdzxqSpecification1
        },
        {
          path: "hdymzkjqrxt/ydptSpecification1",
          name: "ydptSpecification1",
          component: ydptSpecification1
        },
        {
          path: "hdymzkjqrxt/dkSpecification1",
          name: "dkSpecification1",
          component: dkSpecification1
        },
        {
          path: "hdymzkjqrxt/jgzzSpecification1",
          name: "jgzzSpecification1",
          component: jgzzSpecification1
        },
        {
          path: "hdymzkjqrxt/yjzzSpecification1",
          name: "yjzzSpecification1",
          component: yjzzSpecification1
        },
        {
          path: "hdymzkjqrxt/fxclzzSpecification1",
          name: "fxclzzSpecification1",
          component: fxclzzSpecification1
        },
        {
          path: "hdymzkjqrxt/sjclzzSpecification1",
          name: "sjclzzSpecification1",
          component: sjclzzSpecification1
        },
        {
          path: "hdymzkjqrxt/cpProduct1",
          name: "cpProduct1",
          component: cpProduct1
        },
        {
          path: "hdymzkjqrxt/gyProcess1",
          name: "gyProcess1",
          component: gyProcess1
        },
        {
          path: "hdymzkjqrxt/holeAccuracy1",
          name: "holeAccuracy1",
          component: holeAccuracy1
        },
        {
          path: "hdymzkjqrxt/holeProcess1",
          name: "holeProcess1",
          component: holeProcess1
        },
        {
          path: "hdymzkjqrxt/robotProcess1",
          name: "robotProcess1",
          component: robotProcess1
        },
        //系统设备
        {
          path: "hdymzkjqrxt/ZDZXQ1",
          name: "ZDZXQ1",
          component: ZDZXQ1
        },
        {
          path: "hdymzkjqrxt/robot1",
          name: "robot1",
          component: robot1
        },
        {
          path: "hdymzkjqrxt/YDPT1",
          name: "YDPT1",
          component: YDPT1
        },
        //翼盒
        {
          path: "yhszhzp/yhsystem",
          name: "yhsystem",
          component: yhsystem
        },
        {
          path: "yhszhzp/endeffector",
          name: "endeffector",
          component: endeffector
        },
        {
          path: "yhszhzp/equipmentaxis",
          name: "equipmentaxis",
          component: equipmentaxis
        },
        {
          path: "yhszhzp/linearlaserscanning",
          name: "linearlaserscanning",
          component: linearlaserscanning
        },
        {
          path: "yhszhzp/processinformation",
          name: "processinformation",
          component: processinformation
        },
        {
          path: "yhszhzp/holeanalysys",
          name: "holeanalysys",
          component: holeanalysys
        },
        {
          path: "yhszhzp/locator/lslocator",
          name: "lslocator",
          component: lslocator
        },
        {
          path: "yhszhzp/locator/lxlocator",
          name: "lxlocator",
          component: lxlocator
        },
        {
          path: "yhszhzp/locator/lqlocator",
          name: "lqlocator",
          component: lqlocator
        },
        {
          path: "yhszhzp/locator/rslocator",
          name: "rslocator",
          component: rslocator
        },
        {
          path: "yhszhzp/locator/rxlocator",
          name: "rxlocator",
          component: rxlocator
        },
        {
          path: "yhszhzp/locator/rqlocator",
          name: "rqlocator",
          component: rqlocator
        },
        {
          path: "yhszhzp/test/lstest",
          name: "test",
          component: test
        },
        {
          path: "yhszhzp/postureanalysys",
          name: "postureanalysys",
          component: postureanalysys
        }
      ]
    }
  ]
});
