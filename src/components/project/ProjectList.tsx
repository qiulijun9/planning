import React, { useState, useRef } from "react";
import "./ProjectList.scss";
import ReactEcharts from "echarts-for-react";
// import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import { useHistory } from "react-router-dom";
import Menu from "../menu/Menu";
import useHover from "../../custom_hooks/useHover";

const ProjectList = () => {
  const routerHistory = useHistory();
  const [projectlists, setProjectlists] = useState([
    {
      projectId: "111",
      title: "学习计划",
      creatTime: "2020-02-10",
      describe: "bulabula",
      option: {
        legend: {
          bottom: 10,
          left: "center",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "幽州"
              },
              { value: 535, name: "荆州" },
              { value: 510, name: "兖州" },
              { value: 634, name: "益州" },
              { value: 735, name: "西凉" }
            ]
          }
        ]
      }
    },
    {
      projectId: "222",
      title: "省钱计划",
      creatTime: "2020-02-10",
      describe: "bulabula",
      option: {
        tooltip: {
          //展示数据
          trigger: "axis"
        },
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "订单量",
            type: "bar",
            data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
          }
        ]
      }
    },
    {
      projectId: "333",
      title: "一年计划",
      creatTime: "2020-02-10",
      describe: "bulabula",
      option: {
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
      }
    },
    {
      projectId: "444",
      title: "计划",
      creatTime: "2020-02-10",
      describe: "bulabula",
      option: {
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
      }
    }
  ]);
  const [menu, setMenu] = useState([
    {
      name: "学习计划",
      children: [
        {
          name: "a1",
          children: [{ name: "1环" }, { name: "2环" }]
        },
        { name: "a2" }
      ]
    },
    { name: "省钱计划", children: [{ name: "fddf" }, { name: "b2" }] },
    { name: "一年计划", children: [{ name: "c1" }, { name: "c2" }] },
    { name: "减肥计划", children: [{ name: "c1" }] }
  ]);

  const showProject = (projectId: String) => {
    routerHistory.push(`/project/${projectId}`);
  };

  const hoverSelf = useRef(null);
  const [isHovering, events] = useHover();
  console.log(isHovering)

  return (
    <div className="project-list-page">
      <div  ref={hoverSelf}>123</div>

      <div {...events}>
      You are {isHovering ? 'hovering' : 'not hovering'} this div
     </div>
      <ul className="list">
        {projectlists.map((list, index) => (
          <li
            key={index}
            id={index.toString()}
            onClick={projectId => showProject(list.projectId)}
          >
            <h3 className="list-title">{list.title}</h3>
            <div className="list-context">{list.describe}</div>
            <div className="list-footer">
              <div>{list.creatTime}</div>
              <div className="list-charts">
                {list.option && (
                  <ReactEcharts
                    option={list.option}
                    theme="Imooc"
                    style={{ width: "80%", height: "100%" }}
                    className="charts"
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="project-list-container">
        <div className="project-list-menu">{Menu(menu)}</div>
      </div>
    </div>
  );
};

export default ProjectList;
