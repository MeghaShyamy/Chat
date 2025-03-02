import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Chat from './Pages/Chat';


const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/register" element ={<Register />}/>
    <Route path="/login" element ={<Login />}/>
    
    <Route path="/Chat" element ={<Chat />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
