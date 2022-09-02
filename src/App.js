import './App.css';
import React, { useState } from "react";
import Side from "./Side";
import Login from "./Login";
import Feed from "./Feed";
import Widgets from "./Widgets";
function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      {!user?(
      <Login setUser={setUser}/>):
      (<div className="app">
      <Side/>
      <Feed user={user}/>
      <Widgets/>
      </div>)}
    </div>
  );
}

export default App;
