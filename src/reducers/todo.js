const inititalState = {
    todos: [],
    completes: []
}

const todo = (state = inititalState, action) => {
    let todosTemp = [];
    let completesTemp = [];
    switch (action.type) {
        case "ADD_NEW":
            todosTemp = [...state.todos];
            const todoItem = {
                content: action.payload,
                createdDate: Date.now()
            }
            todosTemp.push(todoItem);
            return {
                ...state,
                todos: todosTemp
            }
        case "DESTROY_ONE":
            todosTemp = [...state.todos.filter(item => item.content !== action.payload)];
            return {
                ...state,
                todos: todosTemp
            }
        case "COMPLETE_ONE":
            completesTemp = [...state.completes];
            todosTemp = [...state.todos.filter(item => item.content !== action.payload)];
            let completedItem = {
                content: action.payload,
                completedDate: Date.now()
            }
            completesTemp.push(completedItem);
            completesTemp.sort((a, b) => b.completedDate - a.completedDate);
            return {
                ...state,
                todos: todosTemp,
                completes: completesTemp
            }
        case "DESTROY_ALL":
            return {
                ...state,
                todos: [],
                completes: []
            }
        case "DESTROY_WAITING":
            return {
                ...state,
                todos: []
            }
        case "COMPLETE_ALL":
            completesTemp = [...state.completes];
            todosTemp = [...state.todos];
            let tempArray = [];
            // eslint-disable-next-line
            todosTemp.map(item => {
                tempArray.push({
                    content: item.content,
                    completedDate: Date.now()
                })
            })
            completesTemp.push(...tempArray);
            console.log(completesTemp)
            completesTemp.sort((a, b) => b.completedDate - a.completedDate);
            return {
                ...state,
                todos: [],
                completes: completesTemp
            }
        default:
            return state;
    }
}

export default todo;