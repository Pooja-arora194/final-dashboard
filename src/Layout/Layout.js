import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Layoutstyle } from './Layoutstyle';

const Layout = ({children}) => {

    const classes = Layoutstyle();
    const [isMobile, setIsMobile] = useState(false);
    const funcsetmobile = () => {
         setIsMobile(!isMobile);
    }
  return (
    <div className={classes.root}>
       
      <Sidebar isMobile={isMobile}  funcsetmobile ={funcsetmobile}/>
          <Navbar funcsetmobile ={funcsetmobile} />
        <main>
          <div className={classes.navbarWidth}>
            {children}
          </div>
        </main>
    </div>
  )
}

export default Layout