import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    // 构造函数，首先执行
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {}
    }
    render() {
        return (<div>{this.props.content}<button onClick={this.handleClick}>删除</button></div>);
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
// 类型检测,出错只警告
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
// 默认值
TodoItem.defaultProps={

}
export default TodoItem;