import { FC, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Todo from './models/Todo.model'

const App:FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodoItem = (inputValue: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), description: inputValue}] )
  }

  const handleDeleteTodoItem = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todoItem => todoItem.id !== todoId))
  }
  return (
    <div className="App">
      <header className='w-full h-24 bg-blue-400 flex justify-center items-center'>
        <div className='test-center text-4xl font-bold'>TODO LIST</div>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem}/>
      <TodoList data={todos} handleDeleteTodoItem={handleDeleteTodoItem}/>
      <p className='mt-4'>目前有<span className='font-medium'>{todos.length}</span>個事項待完成</p>
    </div>
  )
}

export default App
