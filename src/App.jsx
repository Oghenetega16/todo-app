import { useState } from'react'
import Header from './components/Header'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoStatus from './components/TodoStatus'
import TodoFeatures from './components/TodoFeatures'
import Footer from './components/Footer'

export default function App() {

  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [checked, setChecked] = useState(false)

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

  function handleCheck() {
      setChecked(!checked)
  }
  
  return (
    <>
      <Header />
        <div className="main">
          <TodoInput handleChange={handleChange} addItem={addItem} input={input} />
            <div className="todo-list">
              <ul>
                {items.map((item, index) => (
                  <TodoList key={index} list={item} handleCheck={handleCheck} checked={checked}/>
                ))}
              </ul>
            </div>
            <TodoStatus items={items} checked={checked}/>
            <TodoFeatures />
        </div>
      <Footer />
    </>
  )
}

// What's left to do?:
// 1. Make the list checkable
// 2. Work on the All, Active and Completed buttons
