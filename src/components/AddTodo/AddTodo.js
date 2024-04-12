import { useState } from "react"
import "./addTodo.css"

const AddTodo = ({ todo, setTodo}) => {
  const [value, setValue] = useState("")

  const saveTodo = () => {
    setTodo(
      [...todo, {
        id: 4,
        title: value,
        status: true
      } ]
    )
  }

  return (
    <div>
      <input type="text" placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  )
}

export default AddTodo;