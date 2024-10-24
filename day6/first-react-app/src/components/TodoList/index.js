import { useState } from "react";
import { CommonButton, CommonContainer, CommonInput, TodoContainer } from "../CommonComponents"
import ListContainer from "../ListContainer";
import InputContainer from "../InputContainer";

function TodoList({ setIsLoggedIn }) {
    // state / props
    // hook - use<Something>
    const [darkMode, setDarkMode] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([])
    // filter
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleAddTodo = () => {
        const newTodoList = [...todos]; // rest operator - copy array
        if (inputValue) { // falsy value
            newTodoList.push({
                id: newTodoList.length,
                title: inputValue,
                isDone: false,
            })
            setTodos(newTodoList);
            setInputValue('')
        }
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    // BT1: 
    const handleDelete = (id) => {
        const newTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(newTodos)
    }
    // [16:21 | 20:21]
    // BT2: array.find / array.findIndex
    const handleUpdate = (id) => {
        const newTodos = [...todos];
        const itemIndex = newTodos.findIndex((todo) => {
            return todo.id === id
        })
        newTodos[itemIndex].isDone = !newTodos[itemIndex].isDone;
        setTodos(newTodos)
        // user todo id to find the element in array
        // update that element
        // update the state again
    }

    // Re-render component
    return <CommonContainer darkTheme={darkMode}>
        <div style={{ position: 'fixed', top: 10, right: 10, display: 'flex', gap: '10px' }}>
            <CommonButton onClick={handleDarkMode}>
                {darkMode ? 'Light mode' : 'Dark mode'}
            </CommonButton>
            <CommonButton onClick={handleLogout}>
                Logout
            </CommonButton>
        </div>

        <TodoContainer>

            {/* 2 ways binding */}
            <InputContainer
                inputValue={inputValue}
                handleChange={handleChange}
                handleAddTodo={handleAddTodo}
            />
            {/* Handle add new Todo
                // Requirement 1: Add new todo when user click Add button,
                the task title will be the user input
                // Requirement 2: clear the input after todo added
            */}
            <ListContainer handleUpdate={handleUpdate} handleDelete={handleDelete} todos={todos} />
        </TodoContainer>
    </CommonContainer>
}
// [21:13]
export default TodoList

// BTVN: LOGIN FORM
/**
 * 2 inputs: username/password
 * 
 * isLoggedIn
 * if(user/password correct){
 *  replace login form with todoList
 * }
 * else {
 *  show the error message
 * }
 * 
 * 
 */