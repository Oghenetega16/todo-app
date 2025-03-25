export default function TodoFeatures({ setFilter, filter }) {
    return (
        <div className="todo-features">
            <p className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</p>
            <p className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active</p>
            <p className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</p>
        </div>
    )
}
