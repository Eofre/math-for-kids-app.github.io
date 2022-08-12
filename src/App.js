import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Addition from "./components/Addition";
import Divide from "./components/Divide";
import Subtraction from "./components/Subtraction";
import Multiplication from "./components/Multiplication";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="App" onClick={showSidebar}>
      <Router>
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Routes>
          <Route exact path="/" element={<Addition />}></Route>
          <Route path="/subtraction" element={<Subtraction />}></Route>
          <Route
            exact
            path="/multiplication"
            element={<Multiplication />}
          ></Route>
          <Route path="/divide" element={<Divide />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
