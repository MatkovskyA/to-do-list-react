import { useState } from 'react'; // 
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState([ // todo - хранит информацию о массиве объектов, а setTodo - функция, меняющая список
    {
      id: 1,
      title: "First todo",
      status: true,
    },  {
      id: 2,
      title: "Second todo",
      status: true,
    },  {
      id: 3,
      title: "Third todo",
      status: false,
    }
  ])


  return (
    <div className='wrapper'>
      <Header />
      <AddTodo />
      <TodoList 
      todo={todo}
      setTodo={setTodo}/>
    </div>
  );
}

export default App;
