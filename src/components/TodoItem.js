import { useDispatch } from "react-redux"
import { complete, destroy } from "../actions/todo";


export const TodoItem = (props) => {
    const dispatch = useDispatch();
    const destroyHandler = () => {
        const action = destroy(props.todo);
        dispatch(action);
    }
    const completeHandler = ()=>{
        const action = complete(props.todo);
        dispatch(action);
    }
    return (
        <div className={"item "+props.type}>
            <button onClick={destroyHandler} className="destroy"><span className="fa fa-trash"></span></button>
            <p>{props.todo}</p>
            <button onClick={completeHandler} className="complete"><span className="fa fa-check"></span></button>
        </div>
    )
}