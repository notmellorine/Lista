import TodoInput from "./TodoInput"
import "./TodoList.css";

export default function TodoList({items}) {
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`item-${index}`} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}