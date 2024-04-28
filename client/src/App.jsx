import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Home from "./Pages/Home.jsx"
import Register from "./Pages/Register.jsx"
import SignIn from "./Pages/SignIn.jsx"

function App() {
  return (
      <>
      <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/Contact-us" element={<Contact/>}/>
          </Routes>
      </>
  )
}

export default App
