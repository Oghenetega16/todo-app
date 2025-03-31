import { useState } from 'react'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoStatus from './components/TodoStatus'
import TodoFeatures from './components/TodoFeatures'
import Footer from './components/Footer'

export default function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All');

  function handleChange(event) {
    setInput(event.target.value)
  }

  function addItem(event) {
    if (event.key === 'Enter' && input.trim() !== '') {
      setItems(prevItems => [...prevItems, { text: input, checked: false }])
      setInput('')
    }
  }

  function handleCheck(index) {
    setItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    )
  }

  function handleDeleteItem(index) {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  }

  function clearCompleted() {
    setItems(prevItems => prevItems.filter(item => !item.checked));
  }

  // Filtered items based on the selected filter
  const filteredItems = items.filter(item => {
    if (filter === 'Active') return !item.checked;
    if (filter === 'Completed') return item.checked;
    return true // 'All' case
  })

  return (
    <>
      <Header />
      <div className="main">
        <TodoInput 
          handleChange={handleChange} addItem={addItem} input={input} />
        <div className="todo-list">
          <ul>
            {filteredItems.map((item, index) => (
              <TodoList
                key={index}
                list={item.text}
                checked={item.checked}
                handleCheck={() => handleCheck(index)}
                handleDeleteItem={() => handleDeleteItem(index)}
                filter = {filter}
              />
            ))}
          </ul>
        </div>
        <TodoStatus items={items} filter={filter} clearCompleted={clearCompleted} />
        <TodoFeatures setFilter={setFilter} filter={filter} />
      </div>
      <Footer />
    </>
  )
}
