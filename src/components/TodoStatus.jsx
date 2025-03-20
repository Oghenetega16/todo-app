import { useState } from "react"

export default function TodoFeatures() {

    const [count, setCount] = useState(0)

    return (
        <div className="todo-status">
            <p>{count} item(s) left</p>
            <p>Clear Completed</p>
        </div>
    )
}