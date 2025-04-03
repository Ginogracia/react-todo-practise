import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Todo from "./components/Todo.jsx"
import Register from "./components/Register.jsx";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App