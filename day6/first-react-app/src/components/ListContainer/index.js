import styled from 'styled-components';
import { CommonInput } from '../CommonComponents';
import { useState } from 'react';
import TodoItem from '../TodoItem';

const Container = styled.ul`
    padding:0px;
    list-style-type: none;
    margin-top:10px;
    hr {
        border: 0.3px solid #d2d2d282
    }
    li {    
        display:flex;
        gap:10px;
        border-bottom: 1px solid #d2d2d2;
        button{
            border:none;
            background:none;
            color:red;
            margin-left:auto;
        }
    }
`

function ListContainer(props) {
    const [search, setSearch] = useState('');

    if (!props.todos.length) { // length == 0
        return <Container>
            <h4>Please add new task!</h4>
        </Container>
    }

    // BT3: Apply reduce to show the total task

    // BT4: Sort the list follow the isDone status (when add, update, delete)

    // 16:45 | 20:45
    const totalDoneTasks = props.todos.reduce((total, item) => {
        if (item.isDone) {
            return total + 1
        }
        return total
    }, 0)
    // 21: 13
    return <Container>
        <hr />
        <div style={{ display: 'flex', gap: 10 }}>
            <CommonInput value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%' }} placeholder="Search" />
            <p style={{ minWidth: '100px', margin: 0 }}>Total: {totalDoneTasks}/{props.todos.length}</p>
        </div>
        <hr />
        {props.todos
            .filter(todo => {
                return todo.title.toLowerCase().includes(search.toLowerCase())
            })
            .sort((a, b) => (a.isDone == b.isDone) ? b.id - a.id : a.isDone - b.isDone)
            .map(item => {
                return <TodoItem item={item} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
            })}
    </Container>
}

export default ListContainer

// NavigationBar (Home/Cart/Order | User)
// ProducstList (Grid component | 1 dong` co 4 san pham)
//  - Container  
//     -Sidebar 
//     - ProductContainer
//         - Product



// | create new folder
// https://vite.dev/guide/ 
// Run npm create vite@latest
// - shopping-cart
// - enter
// - Vanilla/Vue/React()
// - Typescript [ ]
// Enter
// npm i
// npm i @emotion/react @emotion/styled @mui/styled-engine-sc styled-components
// npm i @mui/material

// npm run dev

// https://prod.liveshare.vsengsaas.visualstudio.com/join?0DE3F745933299552F48FE5C1E50EE91E732

// https://mui.com/material-ui/getting-started/

// 16:45 | 20:45

//  NEXT
/**
 * Components / [props]
vite [x]

JS / TS [x]

Material UI [x]

life-cycle components / api call [x]

react-router [x]

global state management [useReducer/useContext]

performance 

unit test
*/

