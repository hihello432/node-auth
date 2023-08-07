import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/SignUp'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='register' element={<SignUp />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='/*' element={<SignUp />}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
