import React,{Component} from 'react';
export default class UserDetail extends Component{

  render(){
    console.log(this.props);
    // 如果跳转的时候带来了就有，如果舔砖都没有带过来就没有
    let user;
    if(this.props.location.state && this.props.location.state.user){
      user=this.props.location.state.user;
    }else{
      let {params:{id}}=this.props.match;
      let users=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[];
      user=users.find(item=>item.id==id)
    }
    return(
        <div>
          {user.id}
        </div>
    )
  }
}
