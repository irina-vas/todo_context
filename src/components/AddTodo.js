import React, {useContext, useState} from 'react';
import Context from './Context/Context';
import './AddTodo.css';



const AddTodo = () => {
    const [value, setValue] = useState('');
    const {setTodo} = useContext(Context);
    const {todo} = useContext(Context);


    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: new Date().getTime(),
                title: value,
                completed: 'added'
                }
            ]
        )
        setValue('')
    }
    
    const HandleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            saveTodo(e)
        }
    }

    return (
        <div>
            <div className="todo_new"></div>
            <div className="input_wrapper">
                <input
                    className="input_todo"
                    type = "text"
                    placeholder="add a task..."
                    value={value}
                    onKeyDown={HandleKeyEnter}
                    onChange={(e) => setValue((e.target.value))}
                />
                <button className="button_todo" onClick={saveTodo}>save</button>
            </div>


        </div>
    );
};

export default AddTodo;