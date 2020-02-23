import React, { useState } from "react";
import "./Menu.scss";

interface Props {
  menu: any[];
}

const Menu = (menu: any[]) => {
  function scrollToAnchor(anchorName: string) {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }
  return menu.map((v, index) => {
    if (v.children) {
      return (
        <ul key={index}>
          <li style={{ color: "blue" }}>
            <a onClick={() => scrollToAnchor(index.toString())}>{v.name}</a>
          </li>
          {Menu(v.children)}
        </ul>
      );
    }
    return (
      <ul key={index}>
        <li> {v.name} </li>
      </ul>
    );
  });
};

export default Menu;
