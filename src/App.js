import { useState } from 'react'; // 
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState([ // todo - хранит информацию о массиве объектов, а setTodo - функция, меняющая список

  ])


  return (
    <div className='container'>
      <Header />
      <AddTodo 
      todo={todo}
      setTodo={setTodo}/>
      <TodoList 
      todo={todo}
      setTodo={setTodo}/>
    </div>
  );
}

export default App;
