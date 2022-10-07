
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Layout from './Layout/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
           <Layout>  
             <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
              </Routes>
            </Layout>
        
      </BrowserRouter>
      

    </div>
  );
}

export default App;
