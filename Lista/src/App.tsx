import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {

  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const addTarefa = () => {
    if(input.trim() !== "") {
      setList([...list, input])
      setInput("")
    }
  }

  return (
    <div>
      <div>
        <TodoInput input={input} setInput={setInput} addTarefa={addTarefa} />
      </div>
      <div>
        <TodoList items={list} />
      </div>
    </div>
  )
}

export default App;
