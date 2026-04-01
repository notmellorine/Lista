export default function TodoInput({ input, setInput, addTarefa }) {
    
    return (
        <div>
            <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            value={input} 
            onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addTarefa}>
                Adicionar
            </button>
        </div>
    )
}