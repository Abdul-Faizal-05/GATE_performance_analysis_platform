import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


function App() {
 

  return (
    <>
      <Router>
       <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
       </Routes>
     </Router> 
    </>
  )
}

export default App
