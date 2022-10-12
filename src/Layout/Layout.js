import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Layoutstyle } from './Layoutstyle';

const Layout = (props) => {
  console.log("layout",props, props.heading)

    const classes = Layoutstyle();
    const [isMobile, setIsMobile] = useState(false);
    const funcsetmobile = () => {
         setIsMobile(!isMobile);
    }
  return (
    <div className={classes.root}>
       
      <Sidebar isMobile={isMobile} heading ={props.heading} funcsetmobile ={funcsetmobile}/>
          <Navbar funcsetmobile ={funcsetmobile} heading ={props.heading} />
        <main>
          <div className={classes.navbarWidth}>
            {props.children}
          </div>
        </main>
    </div>
  )
}

export default Layout