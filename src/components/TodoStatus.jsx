export default function TodoStatus({ items, filter, clearCompleted }) {
    let filteredCount = 0;

    if (filter === 'All') {
        filteredCount = items.length;
    } else if (filter === 'Active') {
        filteredCount = items.filter(item => !item.checked).length;
    } else if (filter === 'Completed') {
        filteredCount = items.filter(item => item.checked).length;
    }

    return (
        <div className="todo-status">
            <p>{filteredCount} {filteredCount === 0 || filteredCount === 1 ? 'item' : 'items'} {filter.toLowerCase()}</p>
            <p onClick={clearCompleted} style={{ cursor: 'pointer' }}>Clear Completed</p>
        </div>
    );
}
