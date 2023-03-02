import React, { FC, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Card from "../components/UI/Card";

const Home:FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, setError] = useState<Error>();

    const handleAddTodoItem = (inputValue: string) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), description: inputValue },
      ]);
    };

    const handleDeleteTodoItem = (todoId: string) => {
      setTodos((prevTodos) =>
        prevTodos.filter((todoItem) => todoItem.id !== todoId)
      );
    };
  return (
    <div className="relative top-12">
      <Card className="w-11/12 max-w-2xl p-12 mx-auto my-8 text-center">
        {/* <header className="w-full h-24 bg-blue-400 flex justify-center items-center">
          <div className="test-center text-4xl font-bold">TODO LIST</div>
        </header> */}
        <TodoForm handleAddTodoItem={handleAddTodoItem} />
        <TodoList data={todos} handleDeleteTodoItem={handleDeleteTodoItem} />
        <p className="mt-4">
          目前有<span className="font-medium">{todos.length}</span>個事項待完成
        </p>
      </Card>
    </div>
  );
};

export default Home;
