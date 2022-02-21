import React from "react";
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                    placeholder='todo info'
                    style={{ width: '300px' }} />
                <Button type='primary' onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                style={{ width: '300px' }}
                renderItem={(item, index) => (
                    <List.Item onClick={()=>{props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}
export default TodoListUI;