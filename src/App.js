import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import ListTodo from './components/ListTodo';
import { addNew, completeAll, destroyAll, destroyWaiting } from './actions/todo';

function App() {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    const content = document.getElementById("input");
    if (content.value.length <= 0) {
      alert("Vui lòng nhập công việc");
      return;
    }
    const action = addNew(content.value);
    dispatch(action);
    content.value = "";
  }
  const destroyAllHanldler = ()=>{
    const action = destroyAll();
    dispatch(action);
  }
  const destroyWaitingHandler = () =>{
    const action = destroyWaiting();
    dispatch(action);
  }
  const completeAllHandler = () =>{
    const action = completeAll();
    dispatch(action);
  }
  return (
    <React.Fragment>
      <div className="todoApp">
        <h1>Todos App</h1>
        <input type="text" id="input" placeholder="Nhập ghi chú..." />
        <button onClick={onClickHandler}>Thêm</button>
        <ListTodo />
        <div className="footer">
          <button onClick={destroyAllHanldler} className="btnDeleteFooter"><span className="fa fa-trash"></span> <span className="fa fa-tasks"></span></button>
          <button onClick={destroyWaitingHandler} className="btnDeleteWaitingFooter"><span className="fa fa-trash"></span> <span className="fa fa-spinner"></span></button>
          <button onClick={completeAllHandler} className="btnCompleteFooter"><span className="fa fa-check"></span> <span className="fa fa-tasks"></span></button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
