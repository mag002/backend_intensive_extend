import styled from 'styled-components';
import { CommonButton, CommonInput } from '../CommonComponents';

const Container = styled.div`
    display: flex;
    gap:10px;
    width: 100%;
    input {
        width: 100%;
    }
`

function InputContainer({
    inputValue, handleChange, handleAddTodo
}) {
    return <Container>
        <CommonInput value={inputValue} onChange={handleChange} />
        <CommonButton onClick={handleAddTodo}>Add</CommonButton>
    </Container>
}

export default InputContainer