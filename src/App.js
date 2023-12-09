import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Register from "./Components/Auth/Register.js";

import Login from "./Components/Auth/Login.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
const App = () => {
  return (
  <>
  <Router>
    <Navbar/>
  <Routes>
  <Route path="/login" exact element={<Login/>} />
  </Routes>

  <Routes>
  <Route path="/register" exact element={<Register/>} />
  </Routes>


  </Router>



  </>);
};

export default App;