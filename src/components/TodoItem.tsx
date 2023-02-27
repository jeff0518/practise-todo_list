import { FC } from "react"
import {TiDelete} from "react-icons/ti"

interface TodoItemProps {
  text: string
}

const TodoItem: FC<TodoItemProps> = ({text}) => {
  return (
    <div className="w-64 px-4 py-2 bg-gray-300 flex justify-between items-center">
      <div className="font-bold ">{text}</div>
      <TiDelete />
    </div>
  )
}

export default TodoItem