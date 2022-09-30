import React from "react";
import Subscribe from './contactForm'
import Footer from './footer'
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Button} from "react-bootstrap";




const Home = () => {
  const { logOut } = useUserAuth();
  const nav = useNavigate();
  const hLogout = async () => {
    try {
      await logOut();
      nav("/");
    } catch (error) {
      console.log(error.message);
    }
  };




  return (
    <>
      <br></br>
      <div className="text-center">
        Welcome to Dev@Deakin Home page <br />
      </div>

      <div className="d-grid ">
        <Button variant="dark" onClick={hLogout}>
          Log out
        </Button>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="text-center">
        To recieve our latest news <br />
        <Subscribe/>
      </div>   
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div classname= "className='img-fluid"><Footer/></div>  
      
    <></>
    </>
  );
};

export default Home;
