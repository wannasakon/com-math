import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";
import "../App.css";
function Hearder() {
    const navigate = useNavigate();

    const nextPage = (page) => {
        navigate("/" + page);
    }
    return (
        <div className="hearder">
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
        </div>
    );
}
export default Hearder;