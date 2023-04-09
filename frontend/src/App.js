import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import './App.css';


function App() {
  return (
    <BrowserRouter>
<div className='App'>
  <ToastContainer />
  <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/add' element={<AddEdit />}></Route>
    <Route exact path='/update/:id' element={<AddEdit />}></Route>
    <Route exact path='/view/:id' element={<View />}></Route>
    <Route exact path='/about' element={<About />}></Route>

  </Routes>
</div>
</BrowserRouter>
  );
}

export default App;
