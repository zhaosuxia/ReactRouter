import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
export default class UserAdd extends Component{
  constructor(){
    super();
    this.state={isEditing:false}
  }
  handleSubmit=(e)=>{
    e.preventDefault();//阻止默认事件----刷新页面
    let userName=this.userName.value;
    let passWord=this.passWord.value;
    //将取到的数据存到本地
    //1.先取后存，取Json.parse,存Json.stringify()
    let users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    localStorage.setItem('users',JSON.stringify([...users,{id:Date.now(),userName,passWord }]))
    this.setState({isEditing:false},()=>{
      this.props.history.push('/user/list')
    })
  }
  handleChange=()=>{
    let isEditing=!!(this.userName.value||this.passWord.value);
    console.log(isEditing);
    this.setState({isEditing})
  }
  render(){
    return(
        <div>
          <Prompt
              when={this.state.isEditing}
              message={location=>`你真的要切换到${location.pathname}`}
          />
          <form onSubmit={this.handleSubmit}>
            <div className="from-group">
              <label htmlFor="userName">用户名</label>
              <input
                  onChange={this.handleChange}
                  ref={input=>this.userName=input}
                  type="text" className="form-control"/>
            </div>
            <div className="from-group">
              <label htmlFor="passWord">密码</label>
              <input
                  onChange={this.handleChange}
                  ref={input=>this.passWord=input}
                  type="text" className="form-control"/>
            </div>
            <div className="from-group">
              <input
                  type="submit" className="btn btn-primary"/>
            </div>
          </form>
        </div>
    )
  }
}
/**
 *1.history是用来操作历史的  push goBack
 *2.location 路劲 pathname 路径名称  state 路径状态
 * Link跳转的时候可以写字符串，也可以写对象
 * <li><Link to="/user/add" >添加用户</Link></li>
 <li><Link to={{pathname:'/user/add,state:{msg:hello}} >添加用户</Link></li>
   *3.match 只有匹配上的时候才会有
   * params
   * path 路劲 来自于路由里的path属性
   * url  来自于url地址中的#
   * {path和url
   * 当有路劲参数的时候，path和url不一样
   *
   * }
   */