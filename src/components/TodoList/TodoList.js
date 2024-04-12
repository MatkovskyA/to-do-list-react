import { useState } from "react"
import "./todoList.css"

const TodoList = ({ todo, setTodo }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  
  const deleteTodo = (id) => {
    let newTodo = [...todo].filter(item => item.id !== id)
    setTodo(newTodo)
  }

  const statusTodo = (id) => {
    let newTodo = [...todo].filter(item => {
      if(item.id == id) {
        item.status = !item.status
      }
      return item
    })
    setTodo(newTodo)
  }

  const editTodo = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  return (
    <div>
      {
        todo.map(item => (
          <div key={item.id}>
            {
              edit == item.id ? <div>
                  <input onChange={setValue} value={value}/>
                </div> : <div>{item.title}</div>
            }

            {
              edit == item.id ? 
                <button>Сохранить</button> :
                <div>
                  <button onClick={() => deleteTodo(item.id)}>Удалить задачу</button>
                  <button onClick={() => editTodo(item.id, item.title)}>Редактировать задачу</button>
                  <button onClick={() => statusTodo(item.id)}>Закрыть задачу</button>
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default TodoList;