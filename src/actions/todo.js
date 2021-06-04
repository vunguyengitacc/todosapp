export const addNew = (content) => {
    return {
        type: "ADD_NEW",
        payload: content
    }
}

export const destroy = (content) => {
    return {
        type: "DESTROY_ONE",
        payload: content
    }
}
export const destroyAll = () =>{
    return {
        type: "DESTROY_ALL",
    }
}
export const destroyWaiting = () =>{
    return {
        type: "DESTROY_WAITING"
    }
}

export const complete = (content) => {
    return {
        type: "COMPLETE_ONE",
        payload: content
    }
}
export const completeAll = () =>{
    return {
        type: "COMPLETE_ALL"
    }
}