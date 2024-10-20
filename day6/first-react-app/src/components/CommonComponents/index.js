import styled from 'styled-components'

export const CommonContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${(props) => props.darkTheme ? `
        background: black;
        color:white;
       `: `
        background: white;
        color:black;
       `
    }
`

export const CommonInput = styled.input`
    padding: 5px 10px;
    border-radius: 5px;
    border: 0.3px solid #d2d2d2;
`


export const CommonButton = styled.button`
    padding: 5px 10px;
    background-color:lightblue;
    border:none;
    border-radius: 5px;
`
export const TodoContainer = styled.div`
        border-radius: 10px;
        box-shadow: rgba(210, 210, 210, 0.75) 5px 5px 10px;
        padding: 20px;
        min-width: 500px
`