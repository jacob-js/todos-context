import React from 'react'
import TodosContext from './todosContext'

function TodosContextProvider({children}) {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) =>{
        setTodos(prevTodods => [...prevTodods, {id: (prevTodods.at(-1)?.id ?? 0) + 1, title, done: false}])
    };

    const deleteTodo = (id) =>{
        setTodos(prevTodods => prevTodods.filter(todo => todo.id !== id))
    };

    const toggleTodoStatus = (id) =>{
        const todo = todos.find(td => td.id === id);
        setTodos(prevTodods => [...prevTodods.filter(td => td.id !== id), {...todo, done: !todo.done}].sort((a, b) => a.id - b.id))
    };

    const updateTodo = (id, title) =>{
        const todo = todos.find(td => td.id === id);
        setTodos(prevTodods => [...prevTodods.filter(td => td.id !== id), {...todo, title}].sort((a, b) => a.id - b.id))
    };

  return <TodosContext.Provider value={{todos, addTodo, deleteTodo, toggleTodoStatus, updateTodo}}>{children}</TodosContext.Provider>;
}

export default TodosContextProvider