import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./addTodo.css"

const AddTodo = ({ todo, setTodo}) => {
  const [value, setValue] = useState("")

  const saveTodo = () => {

    const uniqueId = uuidv4()
    setTodo(
      [...todo, {
        id: uniqueId,
        title: value,
        status: true
      } ]
    )
    setValue('');
  }

  return (
    <div>
      <input type="text" placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  )
}

export default AddTodo;