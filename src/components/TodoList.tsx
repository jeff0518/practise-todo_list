import { FC } from "react"
import TodoItem from "./TodoItem"

const TodoList:FC = () => {
  const TodoListData = [
    {
      id: '1',
      description: '學習英文',
    },
    {
      id: '2',
      description: '學習React',
    }
  ]
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-8">
      {
        TodoListData.map(todoItem => <TodoItem key={todoItem.id} text={todoItem.description} />
        )
      }
    </div>
  )
}

export default TodoList