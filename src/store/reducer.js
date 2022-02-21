//state:仓库中存储的数据
const defaultState = {
    inputValue: '',
    list: [1, 2]
}
const reducer = (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        // 深拷贝一份state，修改 inputValue
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        // 抛出修改后拷贝值
        return newState;
    }
    if (action.type === 'add_todo_item' && state.inputValue !== '') {
        // 深拷贝一份state
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        // 抛出修改后拷贝值
        return newState;
    }
    if (action.type === 'delete_item') {
        // 深拷贝一份state
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        // 抛出修改后拷贝值
        return newState;
    }
    return state;
}
export default reducer; 