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

  const saveTodo = (id) => {
    let newTodo = [...todo].map(item => {
      if(item.id == id) {
        item.title = value;
      }
      return item
    })
    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <div>
      {
        todo.map(item => (
          <div key={item.id}>
            {
              edit == item.id ? 
              <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
              </div> : 
              <div>{item.title}</div>
            }
            {
              edit == item.id ? 
                <div>
                  <button onClick={() => saveTodo(item.id)}>Сохранить</button> 
                </div> :
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