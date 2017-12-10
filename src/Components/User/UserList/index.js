import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class UserList extends Component{
  constructor(){
    super();
    this.state={users:[]}
  }
  componentDidMount(){
    let users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    this.setState({users})
  }
  Delete=(id)=>{
    let index=this.state.users.findIndex(item=>item.id==id);
    let users ={users:[this.state.users.slice(0,index),...this.state.users.slice(index+1)]};
    this.setState({users},()=>{
      localStorage.setItem('users',JSON.stringify(users))
    })
  }
  render(){
    return(
        <ul className="list-group">
          {
            this.state.users.map(user=>(
            <Link key={user.id} to={{pathname:`detail/${user.id}`,state:{user}}}>
              <li  className="list-group-item">
                用户名：{user.userName}
                <button
                    onClick={()=>this.Delete(user.id)}
                    className="btn btn-danger btn-xs pull-right">删除</button>
              </li>
            </Link>

            ))
          }
        </ul>
    )
  }
}
