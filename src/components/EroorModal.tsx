import React from "react";
import Card from "../components/UI/Card"
import Button from "./UI/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-black/50"
        onClick={props.onConfirm}
      />
      <Card className="fixed top-[30vh] left-[10%] w-4/5 z-100 overflow-hidden">
        <header className="bg-indigo-600 p-4">
          <h2>{props.title}</h2>
        </header>
        <div className="p-1">
          <p>{props.message}</p>
        </div>
        <footer className="p-4 flex justify-end">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal