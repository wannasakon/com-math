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
  InputGroupText,
  Container,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getIntegration } from "../functions/function";
import Footer from './footer'
import Hearder from './hearder'

function Integration() {
  const navigate = useNavigate();

  const [result, setresult] = useState();
  const [a, seta] = useState(0);
  const [b, setb] = useState(3);

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div><Hearder />
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px" }}><b>
              บทที่5 Integration
              </b>
            </h2>
          </div>
          </Col></Row>
          <Container>
            <Row style={{ marginTop: "5%" }}>
              <Col>
            <Card style={{ marginTop: "0px", marginRight: "0px", margin: "0", backgroundColor: "" }}>
              <div style={{ marginTop: "0px", marginRight: "0px", margin: "10" }}>
                <h5 style={{ marginTop: "20px", marginRight: "110px", margin: "20px" }} >exam:</h5>
                <h6 style={{ marginRight: "110px", margin: "20px" }}>คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ แต่ละช่วงจะเป็นสี่เหลี่ยมแล้วรวมพื้นที่สี่เหลี่ยมเหล่านั้นมาประมาณค่าพื้นที่ใต้กราฟ</h6>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>เมื่อให้ f(x) = 3*x**2 + 9*x + 2 , n = 4</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>หาพื้นที่ใต้กราฟโดยใช้ Simpson's rule </h5>
                <p style={{ marginRight: "110px", margin: "20px" }}>สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</p>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>กำหนด  a = 0 และ b = 3</h5>
                <h5 style={{ marginRight: "110px", margin: "20px" }}>เมื่อแทนในสูตร ผลลัพธ์ที่ได้คือ 73.5</h5>
              </div>
            </Card>
            </Col>
            <Col>
            <Card style={{ marginTop: "0px", alignItems: "center" }}>
              <Row style={{ marginTop: "50px" }}>
                <Col></Col>
              </Row>

              <Row>
                <div className="text-center">
                  <Row>
                    <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
                    <Input
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: 100,
                      }}
                      value={a}
                      onChange={(e) => seta(e.target.value)}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                    />
                  </Row>
                  <Row>
                    <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
                    <Input
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        width: 100,
                      }}
                      value={b}
                      onChange={(e) => setb(e.target.value)}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                    />
                  </Row>
                </div>
              </Row>
              <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>

              <Row style={{ marginBottom: "30px" }}>
                <Col sm="8">
                  <Button onClick={generate} color="success">
                    <div style={{ width: 300 }}>
                      <h6 style={{ marginTop: "10px" }}>คำนวณ</h6>
                    </div>
                  </Button>
                </Col>
                <Col sm="4">
                  <Button onClick={back} color="primary">
                    <div style={{ width: 100 }}>
                      <h6 style={{ marginTop: "10px" }}>กลับ</h6>
                    </div>
                  </Button>
                </Col>
              </Row>
            </Card>
            </Col>
            </Row>
          </Container>

        <Col sm="4"></Col>
  
      <Footer /></div>
  );
}
export default Integration