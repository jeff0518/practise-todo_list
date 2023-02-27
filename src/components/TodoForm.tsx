import { FC, FormEvent, useRef } from "react";

const TodoForm:FC = () => {
  const inputRef = useRef(null)
  const handleSubmit = (event:FormEvent) => {
    event?.preventDefault()
    const inputValue = inputRef.current!.value
    console.log(inputValue);
    
  }
  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center items-center gap-4 mt-4">
      <input className="p-2 border" type="text" placeholder="請輸入代辦事項" ref={inputRef}></input>
      <button className="px-4 py-2 rounded font-bold text-white bg-blue-300" type="submit">Submit</button>
    </form>
  )
}

export default TodoForm;
