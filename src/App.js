
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Replenish_Now from './pages/Replenish_Now';
import Replenish_Soon from './pages/Replenish_Soon';
import Layout from './Layout/Layout';
import Allsku from './pages/Allsku';
import Product from './pages/Product';
import Setting from './pages/Setting';
import Specialevent from './pages/Specialevent';
import { useState } from 'react';
function App() {
  const [heading, setHeading] = useState("dashboard");
  return (
    <div className="App">
      <BrowserRouter>
      
           <Layout heading={heading}>  
             <Routes>
                  <Route path='/' element={<Home setHeading={setHeading}/>}></Route>
                  <Route path='/replenish_now' element={<Replenish_Now setHeading={setHeading}/>}></Route>
                  <Route path='/replenish_soon' element={<Replenish_Soon setHeading={setHeading} />}></Route>
                  <Route path='/allsku' element={<Allsku setHeading={setHeading}/>}></Route>
                  <Route path='/product' element={<Product setHeading={setHeading}/>}></Route>
                  <Route path='/setting' element={<Setting setHeading={setHeading}/>}></Route>
                  <Route path='/specialevent' element={<Specialevent setHeading={setHeading}/>}></Route>
                 
              </Routes>
            </Layout>
        
      </BrowserRouter>
      

    </div>
  );
}

export default App;
