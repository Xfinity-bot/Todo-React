import "./App.css";
import SingleItem from "./components/ListContainer";
import Navbar from "./components/Navbar";

import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SingleItem />

      <AddTask />
    </div>
  );
}

export default App;
