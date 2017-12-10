# react-router-dom 小demo
## 相关网站
- http://reacttraining.cn/ react 路由
- http://huziketang.com/books/react/lesson1 react简书
- http://www.css88.com/react/docs/hello-world.html  react中文网

## 安装依赖
```
npm install webpack webpack-dev-server babel-preset-react babel-preset-es2015 babel-preset-stage-0 html-webpack-plugin less less-loader css-loader style-loader file-loader url-loader babel-core babel-loader -D
npm install  react react-dom react-router-dom bootstrap  react-transition-group -S

```
## 跑通环境
```
npm run start
```

## 相关知识点
### 基本使用
```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
```
- BrowserRouter 和 HashRouter的区别
