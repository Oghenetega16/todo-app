
export default function TodoInput({handleChange, addItem, input}) {

    return (
        <div className="todo-input">
            <div className="circle"></div>
            <input type="text"
                onChange={handleChange}
                onKeyDown={addItem}
                value={input}
                placeholder="Create a new todo..."
            />
        </div>
    )
}