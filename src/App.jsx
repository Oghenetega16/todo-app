import Header from './components/Header'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoStatus from './components/TodoStatus'
import TodoFeatures from './components/TodoFeatures'
import Footer from './components/Footer'
import { useState } from'react'

export default function App() {

  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  function handleChange(event) {
    const inputValue = event.target.value
    setInput(inputValue)
  }

  function addItem(event) {
    if(event.key === 'Enter' && input.trim() !== '') {
      setItems(prevItems => [...prevItems, input])
      setInput('')
    }
  }

  return (
    <>
      <Header />
        <div className="main">
          <TodoInput handleChange={handleChange} addItem={addItem} input={input} />
            <div className="todo-list">
              <ul>
                {items.map((item, index) => (
                  <TodoList key={index} list={item} />
                ))}
              </ul>
            </div>
            <TodoStatus />
            <TodoFeatures />
        </div>
      <Footer />
    </>
  )
}
