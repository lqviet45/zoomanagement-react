import React from "react";
import { Container } from "react-bootstrap";

function AddSpecies() {
    return ( 
        <Container fluid>
            <Row className="py-5 d-flex justify-content-center align-items-center">
                <Col md={8} lg={5} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-1">
                                <div className="mb-3">
                                    <Form>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="staffAddName">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={UserName}
                                                onChange={(e) => {
                                                    setUserName(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter Username" />
                                            <div className="text-danger">
                                                {dirty["userName"] && errors["userName"][0] ?
                                                    errors["userName"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="staffAddEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={Email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter Email" />
                                            <div className="text-danger">
                                                {dirty["Email"] && errors["Email"][0] ?
                                                    errors["Email"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="staffAddPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={PhoneNumber}
                                                onChange={(e) => {
                                                    setPhoneNumber(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter your phone number" />
                                            <div className="text-danger">
                                                {dirty["PhoneNumber"] && errors["PhoneNumber"][0] ?
                                                    errors["PhoneNumber"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="staffAddFullName">
                                            <Form.Label>Full name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={FullName}
                                                onChange={(e) => {
                                                    setFullName(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter full name" />
                                            <div className="text-danger">
                                                {dirty["FullName"] && errors["FullName"][0] ?
                                                    errors["FullName"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="staffAddPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={Password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter password" />
                                            <div className="text-danger">
                                                {dirty["Password"] && errors["Password"][0] ?
                                                    errors["Password"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="addConfirmPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                value={ConfirmPassword}
                                                onChange={(e) => {
                                                    setConfirmPassword(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter confirm password" />
                                            <div className="text-danger">
                                                {dirty["ConfirmPassword"] && errors["ConfirmPassword"][0] ?
                                                    errors["ConfirmPassword"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="addDateofBirth">
                                            <Form.Label>Date Of Birth</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={DateOfBirth}
                                                onChange={(e) => {
                                                    setDateOfBirth(e.target.value);
                                                }}
                                                placeholder="Enter full name" />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="addGender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Select
                                                value={Gender}
                                                onChange={(e) => {
                                                    setGender(e.target.value);
                                                }}
                                            >
                                                <option >Choose gender</option>
                                                <option value={"Male"}>Male</option>
                                                <option value={"Female"}>Female</option>
                                                <option value={"Other"}>Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Row>
                                            <Col lg={6} md={6} sm={0}>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-end">
                                                <Button size="sm" variant="secondary" className="mx-2" >
                                                    Cancel
                                                </Button>
                                                <Button size="sm" variant="primary" onClick={onAddClick}>
                                                    Add
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>{message}</Row>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
     )
}

export default AddSpecies;