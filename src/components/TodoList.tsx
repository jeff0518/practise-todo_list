import { FC } from "react"
import TodoItem from "./TodoItem"

interface TodoListProps {
  data: {
    id: string,
    description: string
  }[]
}

const TodoList:FC<TodoListProps> = ({data}) => {

  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-8">
      {
        data.map(todoItem => <TodoItem key={todoItem.id} text={todoItem.description} />
        )
      }
    </div>
  )
}

export default TodoList