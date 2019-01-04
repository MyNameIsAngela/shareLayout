import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Layout</h1>
        水平导航
        <ul>
          <li><Link to="/egone">示例1 【flex实现】 适用于Chrome Safari Firefox 可切换为其他三种导航类型</Link></li>
          <li><Link to="/egfive">示例2 【calc百分比减去px高度】需给定值</Link></li>
          <li><Link to="/egsix">示例3 【overflow: hidden将多余高度隐藏】</Link></li>
        </ul>
        倒L导航
        <ul>
          <li><Link to="/egone">示例1 【flex实现】 适用于Chrome Safari Firefox 可切换为其他三种导航类型</Link></li>
          <li><Link to="/egfour">示例2 【grid布局】 未实现 做不到某一列固定另一列自适应，会联动的改变大小</Link></li>
          <li><Link to="/egseven">示例3 【calc百分比减去px高度+绝对定位实现】</Link></li>
        </ul>
        垂直导航
        <ul>
          <li><Link to="/egone">示例1 【flex实现】 适用于Chrome Safari Firefox 可切换为其他三种导航类型</Link></li>
          <li><Link to="/egtwo">示例2 【绝对定位实现】 左侧绝对定位，需给定左侧width和右侧margin-left的值 无法切换为其他导航类型 需给定值</Link></li>
          <li><Link to="/egthree">示例3 【浮动布局】 左侧浮动</Link></li>
        </ul>
      </div>
    )
  }
})
