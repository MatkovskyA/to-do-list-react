import { useState } from "react"
import "./todoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons'



const TodoList = ({ todo, setTodo }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  
  const deleteTodo = (id) => {
    let newTodo = [...todo].filter(item => item.id !== id)
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
    <div className="todoList">
      {
        todo.map(item => (
          <div key={item.id} className="todoList__item">
            {
              edit == item.id ? 
              <div>
                <input className="todoList__change-title" value={value} onChange={(e) => setValue(e.target.value)} />
              </div> : 
              <div className="todoList__title">{item.title}</div>
            }
            {
              edit == item.id ? 
                <div>
                  <button className="todoList__btn-save btn" onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave}/></button> 
                </div> :
                <div className="todoList__btns">
                  <button className="todoList__btn-delete todoList__btn" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  <button className="todoList__btn-change todoList__btn" onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default TodoList;