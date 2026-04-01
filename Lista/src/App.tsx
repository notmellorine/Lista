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

  const deleteTarefa = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    }

    const editTarefa = (index) => {
      const valorParaEditar = list[index];
      setInput(valorParaEditar);
      deleteTarefa(index);
    }

  return (
    <div>
      <div>
        <TodoInput input={input} setInput={setInput} addTarefa={addTarefa} />
      </div>
      <div>
        <TodoList items={list} deleteTarefa={deleteTarefa} editTarefa={editTarefa} />
      </div>
    </div>
  )
}

export default App;
