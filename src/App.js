import React, { Component,Fragment} from 'react';
class ToodList  extends Component {
  // constructor(){
  //   super(props);
  //   this.state = {inputValue:'',list:[]}
  // }
  state = {inputValue:'',list:[]}
  render() { 
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
             this.state.list.map((item,index)=>{
               return <li value={item} key={index} onClick={this.handleLiClick.bind(this,index)}>{item} <button>删除</button></li>
             })
          }
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e){
    this.setState({inputValue:e.target.value})
  }
  handleButtonClick(){
    this.setState({list:[...this.state.list,this.state.inputValue]})
  }
  handleLiClick(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({list:list})
  }
}

export default ToodList;

