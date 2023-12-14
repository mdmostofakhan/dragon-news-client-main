import React from "react";
import { Button, Dropdown, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp
} from "react-icons/fa";
import QZone from "../qzone/QZone";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <div>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle>Login with Google
        </Button>
        <Button className="mb-4" variant="outline-secondary">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </div>
      <div>
        <h3 className="mt-4">Find Us On</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-4">
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className="right-container text-center ">
        <h4 className="text-white mb-4">Create an Amazing Newspaper</h4>
        <h4 className="text-white m-4">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h4>
        <Button className="ps-4" variant="danger">
          Learn More
        </Button>
      </div>
     
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://wa.me/1980637109?text=heroman?"> <FaWhatsapp className="h1 text-success"></FaWhatsapp></Dropdown.Item>
        <Dropdown.Item href=""><FaTelegram className="h1 text-primary"></FaTelegram ></Dropdown.Item>
        <Dropdown.Item href="#/action-3">  <FaFacebook/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default RightNav;
