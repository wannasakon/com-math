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
} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Footer from './footer'
import Hearder from './hearder'


function B2s() {
    const navigate = useNavigate();
    const [bit2string, setBit2string] = useState("");
    const [result, setResult] = useState("");
    const generate = () => {
        getB2s(bit2string).then((res) => {
            setResult(res);
        });
    };

    const back = () => {
        navigate("/");
    };

    return ( <div class = "body" >
        <Hearder/>
        <Row style = {{ marginTop: "5%" } } >
        <Col sm = "2" > </Col> <Col sm = "8" >
        <div >
            
        <h2 style = {{ marginTop: "20px",align : "center"}} ><b>บทที่1 Basic Computing </b></h2> 
            </div >
            <div style = {{ marginTop: "20px",align : "center"}} >
                <h5>แปลงตัวเลขจากเลขฐานสอง โดยใช้ IEEE single precision format</h5>
        <h5 > exam: 01111000000001010000000000000000 </h5> 
        <h5>s = 0,
            e = 11110000,
            f = 00001010</h5>
            
        </div > 
        <div >
        <Row >
        <Col sm = "2" > </Col> <Col sm = "8" >
        <Card style = {
            { marginTop: "10px",alignItems: "center" }
        } >
        <Input style = {
            {
                marginTop: "20px",
                marginBottom: "20px",
                width: 500,
            }
        }
        value = { bit2string }
        type = "text"
        name = "bit2string"
        id = "bit2string"
        onChange = {
            (e) => setBit2string(e.target.value)
        }
        /> <h4 > ผลลัพธ์: { result } </h4> <Row style = {
            { marginBottom: "30px"}
        } >
        <Col sm = "8" >
        <Button onClick = { generate }
        color = "success" >
        <div style = {
            { width: 300 }
        } >
        <h6 style = {
            { marginTop: "10px" }
        } > คำนวณ </h6> </div > </Button> 
        </Col > 
        <Col sm = "4" >
        <Button onClick = { back }
        color = "primary">
        <div style = {
            { width: 100 }
        } >
        <h6 style = {
            { marginTop: "10px" }
        } >กลับ</h6> </div > </Button  > </Col >
         </Row> 
         </Card > 
         </Col> 
         <Col sm = "2" >
              </Col> 
         </Row > 
         </div> 
         </Col > 
         <Col sm = "2" > </Col> 
         </Row > <Footer/></div>
         
    );
}

export default B2s;