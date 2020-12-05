import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
//JSX 语法
let app = <App />;
let root = document.querySelector("#root");
ReactDOM.render(app, root);
//实现页面时刻显示
function clock() {
  let time = new Date().toLocaleTimeString();
  let ele = <h1>现在的时间是{time}</h1>;
  let root = document.querySelector("#root");
  ReactDOM.render(ele, root);
}
clock();
// 创建计时器
setInterval(() => {
  clock();
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
