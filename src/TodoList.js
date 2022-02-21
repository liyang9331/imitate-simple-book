
import React, { Component } from 'react';
// import TodoItem from './components/TodoItem';
// import axios from 'axios';
import store from './store';
import TodoListUI from './TodoListUI';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleLiClick = this.handleLiClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  // 请求接口在当前函数下执行
  componentDidMount() {
    // 订阅store 
    store.subscribe(this.handleStoreChange);
    // axios.get('/api/todolist').then((res) => {
    //   this.setState(() => {
    //     return {
    //       list: [...res.data]
    //     }
    //   })
    // }).catch((err) => {
    // })
  }
  render() {
    return (
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  getItem() {
    // return this.state.list.map((item, index) => {
    //   return <TodoItem key={index} content={item} index={index} deleteItem={this.handleLiClick} />
    // })
  }
  handleInputChange(e) {
    // this.setState({ inputValue: e.target.value })
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    // 给store 发一个 action,store会将仓库数据和action 发给 reducer
    store.dispatch(action);
  }
  handleButtonClick() {
    // this.setState({ list: [...this.state.list, this.state.inputValue] })
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handleLiClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list: list })
  }
  handleItemDelete(index) {
    const action = {
      type: 'delete_item',
      value: index
    }
    store.dispatch(action)
  }
}

export default TodoList;