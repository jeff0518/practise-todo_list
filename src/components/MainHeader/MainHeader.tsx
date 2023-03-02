import React from "react";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-blue-400 px-8">
      <h1 className="text-white">TODO LIST</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
