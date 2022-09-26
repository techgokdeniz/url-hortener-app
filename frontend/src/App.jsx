import Header from "./components/header"
import { Routes, Route,Link } from "react-router-dom"
import Home from "./pages/home"
import { v4 as uuidv4 } from 'uuid';
import MyLinks from "./pages/mylinks";

function App() {
 
  const userid=localStorage.getItem("userid")
  if(!userid){
    const useridgenerator=uuidv4().replace(/-/g, "")
    localStorage.setItem("userid",useridgenerator)
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylinks" element={<MyLinks />} />
      </Routes>
    </div>
  )
}

export default App
