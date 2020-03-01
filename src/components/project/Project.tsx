import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
// import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "./Project.scss";
import mapData from "./data.json";

const Project = () => {
  const { projectId } = useParams();
  const routerHistory = useHistory();
  console.log(projectId);
  const editProject = () => {
    routerHistory.push(`/editProject/${projectId}`);
  };
  const [module, setModule] = useState([{ name: "111" }]);
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>{c}"
    },
    visualMap: {
      min: 800,
      max: 50000,
      text: ["High", "Low"],
      realtime: false,
      calculable: true,
      inRange: {
        color: ["lightskyblue", "yellow", "orangered"]
      }
    },
    series: [
      {
        type: "map",
        mapType: "BJ",
        // roam: false,
        label: {
          show: true
        },
        data: [
          { name: "延庆县", value: 20057.34 },
          { name: "怀柔区", value: 15477.48 },
          { name: "密云县", value: 31686.1 },
          { name: "昌平区", value: 6992.6 },
          { name: "顺义区", value: 44045.49 },
          { name: "平谷区", value: 40689.64 },
          { name: "门头沟区", value: 37659.78 },
          { name: "海淀区", value: 45180.97 },
          { name: "朝阳区", value: 55204.26 },
          { name: "石景山区", value: 21900.9 },
          { name: "西城区", value: 4918.26 },
          { name: "东城区", value: 5881.84 },
          { name: "玄武区", value: 4178.01 },
          { name: "崇文区", value: 2227.92 },
          { name: "丰台区", value: 2180.98 },
          { name: "通州区", value: 9172.94 },
          { name: "房山区", value: 3368 },
          { name: "大兴区", value: 806.98 }
        ]
      }
    ]
  };

  function createModel() {}
  echarts.registerMap("BJ", mapData);
  return (
    <div className="project-wrapper">
      <header className="project-title"></header>
      <div className="project-content">
        <div className="project-dashboard">
          <div className="project-charts">
            <ReactEcharts
              option={option}
              theme="Imooc"
              style={{ width: "100%", height: "100%" }}
              className="charts"
            />
          </div>
          <div className="create-project">
            <button className="create-projct-btn" onClick={createModel}>
              新建模块dddeee
            </button>
          </div>
        </div>
        <div className="project-box" onClick={editProject}>
          <div className="project-name">模块名称</div>
          <div className="project-describe">描述描述描述描述描述</div>
          <div className="project-tag">tag</div>
        </div>
        <div className="project-box">111</div>
        <div className="project-box">111</div>
        <div className="project-box">111</div>
        <div className="project-box">111</div>
        <div className="project-box">111</div>
      </div>
    </div>
  );
};
export default Project;
