import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

function ListTodo() {
    const todos = useSelector((state) => state.todo.todos);
    const completes = useSelector((state)=> state.todo.completes);
    return (
        <React.Fragment>
            <div className="todoList">
                {todos.map((item, key) =>
                (
                    <TodoItem key={key} todo={item.content} type="waiting" />
                )
                )}
                {completes.map((item, key) =>
                (
                    <TodoItem key={key} todo={item.content} type="completed"/>
                )
                )}
                <div className="footerList"></div>
            </div>

        </React.Fragment>
    )
}

export default ListTodo;