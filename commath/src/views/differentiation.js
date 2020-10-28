import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Container
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/function";
import Footer from './footer'
import Hearder from './hearder'

function Differentiation() {
  const navigate = useNavigate();
  const [h, seth] = useState(0.64);
  const [p, setp] = useState(2);

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h: h,
      p: p

    };
    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  };

  return (

    <div><Hearder />
      <Container style={{ marginTop: "5%" }}>
        <div className="text-center">
          <h2 style={{ marginTop: "20px" }}><b>
            บทที่4 Differentiation</b>
          </h2>
        </div>
        </Container>
      <Container>
        <Row style={{ marginTop: "5%" }}>
          <Col sm="9"></Col>
          <Col >

            <Card style={{ marginTop: "0px", marginRight: "0px", margin: "10", backgroundColor: "" }}>
              <div style={{ marginTop: "0px", marginRight: "0px", margin: "10", backgroundColor: "" }}>
                <h5 style={{ marginTop: "20px", marginRight: "110px", margin: "20px" }} >exam:</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>หาค่า Central Difference Approximations: CDA</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>โดยใช้ Richardson Extrapolation</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>สูตร ((2**p)* g(h/2)- g(h))/(2**p - 1)</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>h = 0.64</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>p = 2</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>เมื่อแทนในสูตร ผลลัพธ์ที่ได้คือ 0.36784333333333336</h5>
              </div>
            </Card>
          </Col>
          <Card style={{ marginTop: "0px", alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h5 style={{ marginBottom: "10px" }}>ผลลัพธ์: {result}</h5>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="success">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginLeft: "10px" }}>คำนวณ</h5>
                  </div>
                </Button>
              </Col>
              <Col sm="3">
                <Button onClick={back} color="primary">
                  <div style={{ width: 100 }}>
                    <h5 style={{ marginTop: "0px" }}>กลับ</h5>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>


          <Col sm="4"></Col>
        </Row>
      </Container>
      <Footer /></div>
  );
}
export default Differentiation;
