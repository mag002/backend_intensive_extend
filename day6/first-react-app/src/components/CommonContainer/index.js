function CommonContainer(props) {
    return <div style={{ borderRadius: '5px', border: '1px solid red' }}>
        {props.children}
    </div>
}
export default CommonContainer