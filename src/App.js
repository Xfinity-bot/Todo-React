import "./App.css";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import { useState,useEffect } from "react";

function App() {
  const [updated,setUpdated]=useState(false);
  console.log(updated + ' app.js')
  useEffect(()=>{},[updated])
  return (
    <div className="App">
      <Navbar />
      <ListContainer isupdated={updated}/>
      <AddTask updated={setUpdated}/>
    </div>
  );
}

export default App;
