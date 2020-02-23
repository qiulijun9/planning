import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
// import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "./Project.scss";

const Project = () => {
  const { projectId } = useParams();
  const routerHistory = useHistory();
  console.log(projectId);
  const editProject = () => {
    routerHistory.push(`/editProject/${projectId}`);
  };
  const [module, setModule] = useState([{ name: "111" }]);
  const option = {
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} °C"
      }
    },
    series: [
      {
        name: "最高气温",
        type: "line",
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "最低气温",
        type: "line",
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          data: [
            { type: "average", name: "平均值" },
            [
              {
                symbol: "none",
                x: "90%",
                yAxis: "max"
              },
              {
                symbol: "circle",
                label: {
                  position: "start",
                  formatter: "最大值"
                },
                type: "max",
                name: "最高点"
              }
            ]
          ]
        }
      }
    ]
  };
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
          <div className="create-project">新建模块</div>
        </div>
        <div className="project-box" onClick={editProject}>
          111
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
