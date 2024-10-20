import styled from 'styled-components';

const Container = styled.ul`
    padding:0px;
    list-style-type: none;
    margin-top:10px;

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
    if (!props.todos.length) { // length == 0
        return <Container>
            <h4>Please add new task!</h4>
        </Container>
    }

    return <Container>
        {props.todos.map(item => {
            return <li key={item.id}>
                <input type="checkbox" />
                <p>{item.title}</p>
                <button>Delete</button>
            </li>
        })}
    </Container>
}

export default ListContainer