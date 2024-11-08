import { useCallback, useEffect, useMemo, useState } from "react";
import ChildrenExample from "../Children";
// sum(a,b);

// sum(1, 2) expect output 3
// sum("a", 2) expect output "error message"

// TDD

// BDD 

//
export default function MemoziedExample() {
    const [count, setCount] = useState(0);

    //cache
    // const abc = useMemo(() => {
    //     return {
    //         item: 5
    //     }
    // }, []);


    // Pass by reference

    // Asynchronus (event loop)

    const abc = useCallback(() => {
        console.log(count)
    }, [count])

    return <div>
        <button onClick={() => { console.log('increase'); setCount(count + 1) }}>Increase</button>
        <ChildrenExample example={abc}></ChildrenExample>
    </div>
}

