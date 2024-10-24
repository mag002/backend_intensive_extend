import styled from 'styled-components';
import { CommonInput } from '../CommonComponents';
import { useState } from 'react';

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
                return <li key={item.id}>
                    <input type="checkbox" checked={item.isDone} onClick={() => props.handleUpdate(item.id)} />
                    <p style={{ textDecoration: item.isDone ? 'line-through' : 'initial' }}>{item.title}</p>
                    <button onClick={() => props.handleDelete(item.id)}>Delete</button>
                </li>
            })}
    </Container>
}

export default ListContainer


// COMING UP NEXT
/**
 * 
vite

JS / TS

Material UI

react-router

life-cycle components / api call

global state management

performance 

unit test
*/