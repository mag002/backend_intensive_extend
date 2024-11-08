import React, { useEffect } from "react";

function ChildrenExample({ example }: { example: any }) {
    useEffect(() => {
        console.log("RUNNN IN USEEFFECT")
    })
    console.log("RUNNNN")
    return <div>
        ChildrenExample
        <button onClick={example}>ok</button>
    </div>
}

export default React.memo(ChildrenExample);