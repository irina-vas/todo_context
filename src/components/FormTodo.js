import React, {useContext} from 'react';
import Button from './Button';
import AddTodo from './AddTodo';
import Context from './Context/Context';


function FormTodo() {
  const {addTodo} = useContext(Context);
  const {todo} = useContext(Context);
  const {setTodo} = useContext(Context);

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter(item => item.id !== id);
    setTodo(newTodo)
  }


  const handleSelectChange = (e,id) => {
      let newTodo = todo.map((item) => {
        if (item.id === id){
          return {id: item.id, title: item.title, completed: e.target.value}
        }
          return item
      })
    setTodo(newTodo)
  }

  let todoAdded = [...todo].filter(item => item.completed === 'added');
  let todoInProgress = [...todo].filter(item => item.completed === 'in progress');
  let todoDone = [...todo].filter(item => item.completed === 'done');
console.log(todoDone)

    return (
      <div className="wrapper">
        <div className="todos_nonSelected">
          <h2>Added tasks</h2>
          {todoAdded.map(item => {
            return (
              <div className="todo_item_wrapper" key={item.id}>
                <div className="todo_item">{item.title}</div>
                <div>
                  <select className="select_todo"
                    value={'added'}
                    onChange={(e)=>handleSelectChange(e, item.id)}
                  >
                    <option>select</option>
                    <option>in progress</option>
                    <option>done</option>
                  </select>
                  <button
                    className="todo_delete"
                    onClick={() => deleteTodo(item.id)}>
                    <span>DELETE</span>
                  </button>
                </div>

              </div>
            )
          })}
            {addTodo ? <AddTodo /> : <Button />}
        </div>
        <div className="todos_inProgress">
          <h2>Tasks in progress</h2>
          {todoInProgress.map(item => {
            return (
              <div className="todo_item_wrapper" key={item.id}>
                <div className="todo_item">{item.title}</div>
                <div>
                  <select className="select_todo"
                    value={'added'}
                    onChange={(e)=>handleSelectChange(e, item.id)}
                  >
                    <option>select</option>
                    <option>in progress</option>
                    <option>done</option>
                  </select>
                  <button
                    className="todo_delete"
                    onClick={() => deleteTodo(item.id)}>
                    <span>DELETE</span>
                  </button>
                </div>

              </div>
            )
          })}
        </div>
        <div className="todos_done">
          <h2>Tasks done</h2>
          {todoDone.map(item => {
            return (
              <div className="todo_item_wrapper" key={item.id}>
                <div className="todo_item">{item.title}</div>
                <div>
                  <select className="select_todo"
                    value={'added'}
                    onChange={(e)=>handleSelectChange(e, item.id)}
                  >
                    <option>select</option>
                    <option>in progress</option>
                    <option>done</option>
                  </select>
                  <button
                    className="todo_delete"
                    onClick={() => deleteTodo(item.id)}>
                    <span>DELETE</span>
                  </button>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    );
}

export default FormTodo;