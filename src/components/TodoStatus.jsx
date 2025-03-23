
export default function TodoFeatures({items, checked}) {

    return (
        <div className="todo-status">
            <p>{checked ? `${items.length - 1} item(s) left` : `${items.length} item(s) left`}</p>
            <p>Clear Completed</p>
        </div>
    )
}