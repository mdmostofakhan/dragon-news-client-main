import React from "react";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";
import moment from "moment";
import { Button, Container} from "react-bootstrap";

const Header = () => {
   
  return (
    <Container className="mt-4">
      <div className="text-center mt-5 ">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("LLLL")}</p>
      </div>

      <div className="d-flex mb-4">
        <Button variant="danger">latest</Button>
        <Marquee speed={100} className="text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <div>
    
      </div>
    </Container>
  );
};

export default Header;
