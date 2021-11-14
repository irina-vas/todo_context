import React, { useState} from 'react';
import './App.css';
import Context from './components/Context/Context';
import FormTodo from './components/FormTodo';


function App() {
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState(false);

    const handleAddTodo = () => {
        setAddTodo(true);
    }

    return (
        <Context.Provider value={{handleAddTodo, addTodo, todo, setTodo}}>
            <FormTodo />
        </Context.Provider>

    );
}

export default App;
