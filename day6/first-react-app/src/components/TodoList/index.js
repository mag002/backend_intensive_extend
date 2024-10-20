import { useState } from "react";
import { CommonButton, CommonContainer, CommonInput, TodoContainer } from "../CommonComponents"
import ListContainer from "../ListContainer";
import InputContainer from "../InputContainer";

function TodoList() {
    // state / props
    // hook - use<Something>
    const [darkMode, setDarkMode] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([])

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
    // Re-render component
    return <CommonContainer darkTheme={darkMode}>
        <CommonButton style={{ position: 'fixed', top: 10, right: 10 }} onClick={handleDarkMode}>
            {darkMode ? 'Light mode' : 'Dark mode'}
        </CommonButton>
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
            <ListContainer todos={todos} />
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