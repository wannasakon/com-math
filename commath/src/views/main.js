import React from "react";
import { CardTitle, CardText, Image, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Background from '../images/blackboard.jpg';
import Footer from './footer'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <body style={{ backgroundColor: "#FAEEEB" }}>
      <div className="text-center">
        <Container style={{ backgroundColor: "#D09C90" }}>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              {/* <Nav.Link href="/home">Active</Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h1 className="text-center mt-4 mb-4" style={{ color: "white" }, {}}>Computational Mathematics</h1>
          <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link className="link" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("b2s") }} eventKey="link-1">บทที่ 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("elimination") }} eventKey="link-2">บทที่ 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("interpolation") }} eventKey="link-3">บทที่ 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("differentiation") }} eventKey="link-4">บทที่ 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("integration") }} eventKey="link-5">บทที่ 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="link" onClick={() => { nextPage("root-finding") }} eventKey="link-6">บทที่ 6</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                wannasakon.ph
            </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>

        <Row style={{ marginTop: "20px" }}></Row>

        <Container >
          <div className="text-center">
            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#D0D3D4" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 1</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Basic Computing</h4>
                  </CardText>

                  <Button onClick={() => { nextPage("b2s") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>

                </Card>
              </Col>

              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#FAEEEB" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 2</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Linear Equations</h4>
                  </CardText>
                  <Button onClick={() => { nextPage("elimination") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#FAEEEB" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 3</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Interpolation</h4>
                  </CardText>
                  <Button onClick={() => { nextPage("interpolation") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#D0D3D4" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 4</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Differentiation</h4>
                  </CardText>
                  <Button onClick={() => { nextPage("differentiation") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#D0D3D4" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 5</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Integration</h4>
                  </CardText>
                  <Button onClick={() => { nextPage("integration") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{ width: '30rem' }, { backgroundColor: "#FAEEEB" }}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><b>บทที่ 6</b></h3>
                  </CardTitle>
                  <CardText>
                    <h4>Root-finding</h4>
                  </CardText>
                  <Button onClick={() => { nextPage("root-finding") }} color="dark">
                    <h5 style={{ marginTop: "10px" }}>ทดสอบ</h5>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer/>
      </div>
      
    </body>
  );
}

export default Main;
