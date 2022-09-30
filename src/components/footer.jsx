import React from 'react';
import logo from './footer.png'; 

console.log(logo);

function Footer() {

  return <img src={logo} alt="Display"  style={{width:'100%', height:'300px',position:'absolute', right:'0px'}}  />;
}

export default Footer;