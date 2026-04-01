import "./TodoList.css";

export default function TodoList({items, deleteTarefa, editTarefa}) {

    function handleDelete(index) {
        const newList = [...items];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`item-${index}`} />
                        <span>{item}</span>
                        <button onClick={() => deleteTarefa(index)}>x</button>
                        <button onClick={() => editTarefa(index)}>edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}