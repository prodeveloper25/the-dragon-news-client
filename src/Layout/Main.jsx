import React from 'react';
import Header from '../pages/Shered/Header/Header';
import Footer from '../pages/Shered/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shered/RightNav/RightNav';
import LeftNav from '../pages/Shered/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shered/NavigartionBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
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

export default Main;