import { useEffect } from "react"

function TodoItem({ item, handleDelete, handleUpdate }) {

    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    // khi component load
    // khi component re-render (props/state)
    useEffect(() => {
        console.log("EFFECT RUN")

    })

    // Fetch - isLoading
    // useEffect(()=>{ callApi },[isLoading])

    // useEffect(1) - cleanUp(1)
    // useEffect(1) executed 2 -> cleanUp(1) excuted -> cleanUp(2) hold

    useEffect(() => {
        console.log("EFFECT 2")
        // Khi component bi unmount (component will unmount)
        return () => {
            console.log("LAST RUN")
        }
    }, [])

    return <li key={item.id}>
        <input type="checkbox" checked={item.isDone} onClick={() => handleUpdate(item.id)} />
        <p style={{ textDecoration: item.isDone ? 'line-through' : 'initial' }}>{item.title}</p>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
}

export default TodoItem