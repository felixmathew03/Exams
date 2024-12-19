import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
import AddS from "./Components/AddS"
import Edit from "./Components/Edit"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/addstudent" Component={AddS}/>
      <Route path="/editstudent/:id" Component={Edit}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
