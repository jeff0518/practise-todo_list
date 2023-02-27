import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App:FC = () => {
  return (
    <div className="App">
      <header className='w-full h-24 bg-blue-400 flex justify-center items-center'>
        <div className='test-center text-4xl font-bold'>TODO LIST</div>
      </header>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
