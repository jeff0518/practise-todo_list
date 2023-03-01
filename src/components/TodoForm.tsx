import { FC, FormEvent, useRef, useState } from "react";
import ErrorModal from "./EroorModal";
import Error from "../models/Error.model";

interface TodoFormProps {
  handleAddTodoItem: (inputValue: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ handleAddTodoItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<Error>();

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();

    const inputValue = inputRef.current!.value;
    if (inputValue.trim() === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid(non-empty values)",
      });

      return;
    }
    handleAddTodoItem(inputValue);
    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center gap-4 mt-4"
      >
        <input
          className="p-2 border"
          type="text"
          placeholder="請輸入代辦事項"
          ref={inputRef}
        ></input>
        <button
          className="px-4 py-2 rounded font-bold text-white bg-blue-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoForm;
