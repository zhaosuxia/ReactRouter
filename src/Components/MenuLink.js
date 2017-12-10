//第三种渲染的方式
import React from 'react';
import {Route,Link} from 'react-router-dom';
/*
children 孩子们，也是一个函数
render 路劲匹配则渲染，不匹配则不渲染
children 路劲匹配则渲染，不匹配也渲染
match 匹配上有值，匹配不上则为null
 */
export default function ({to,children}) {

  return (
      <Route path={to} children={({match})=>(
            <Link to={to} className={match?'active':''}>
              {children}
            </Link>
      )}/>
  )
}