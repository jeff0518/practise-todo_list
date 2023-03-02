import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/UI/Card";
import Button from "./UI/Button";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen  bg-black/80"
      onClick={props.onConfirm}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card classStyle="fixed top-[30vh] left-[10%] w-4/5 overflow-hidden z-10">
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
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default ErrorModal;
