import React from 'react';
import Header from '../pages/sharet/header/Header';
import Footer from '../pages/sharet/fooder/Footer';
import { Col, Container, Row } from 'react-bootstrap';
// import LeftNav from '../pages/sharet/leftNav/LeftNav';
import RightNav from '../pages/sharet/rightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
             <Header></Header>

<Container>
          
           <Row>
               <Col lg={9}>
                   <Outlet></Outlet>
               
               </Col>
              
               <Col lg={3}>
                  <RightNav></RightNav>
               </Col>
           </Row>
</Container>

       <Footer></Footer>

        </div>
    );
};

export default NewsLayout;