import { FC } from "react"
import {TiDelete} from "react-icons/ti"

interface TodoItemProps {
  id: string,
  text: string,
  handleDeleteTodoItem:(todoId: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({id, text, handleDeleteTodoItem}) => {
  return (
    <div className="w-64 px-4 py-2 bg-gray-300 flex justify-between items-center">
      <div className="font-bold ">{text}</div>
      <TiDelete onClick={handleDeleteTodoItem.bind(null, id)} />
    </div>
  )
}

export default TodoItem