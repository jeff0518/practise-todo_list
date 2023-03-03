import { FC, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader/MainHeader";

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");

    if (userLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={handleLogout} />
      <main>
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {isLoggedIn && <Home onLogout={handleLogout} />}
      </main>
    </div>
  );
};

export default App;
