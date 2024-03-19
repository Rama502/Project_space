import React from "react"
import { Link } from "react-router-dom"
import {  Row, Col, Card, CardBody } from "reactstrap"

//Import Image
import avatar2 from "../../assets/images/users/Ceo.png"
import img3 from "../../assets/images/small/g1.jpg"
import img4 from "../../assets/images/small/g2.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

const EmailRead = () => {
  return (
    <React.Fragment>
      <div className="page-content">
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Read Email" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <EmailSideBar />

              <div className="email-rightbar mb-3">
                <Card>
                  {/* Render Email Top Tool Bar */}
                  <EmailToolbar />

                  <CardBody>
                    <div className="d-flex mb-4">
                      <img
                        className="d-flex me-3 rounded-circle avatar-sm"
                        src={avatar2}
                        alt="Qovex"
                      />
                      <div className="flex-1">
                        <h5 className="font-size-14 mt-1">
                          Babji Neelam ,ceo
                        </h5>
                        <small className="text-muted">technicalhub.io@gmail.com</small>
                      </div>
                    </div>

                    {/* <h4 className="mt-0 font-size-16">
                      T
                    </h4> */}

                    <p>Dear Babji Neelam sir,</p>
                    <p>
                     <center><b>Sub: *Technical Hub Journey Platform*</b><br></br></center>
                    The Technical Hub Journey Platform is a comprehensive project designed 
                    to revolutionize placement training within our college's technical hub. 
                    This platform aims to provide students with a seamless and enriching journey towards their 
                    career aspirations by offering a range of innovative features and resources. 
                    From personalized skill assessments and tailored learning paths to 
                    interactive workshops and mock interviews, the platform empowers students to 
                    enhance their technical competencies, soft skills, and professional development. 
                    With a user-friendly interface and access to real-world industry insights,
                    the Technical Hub Journey Platform serves as a dynamic hub for students to explore,
                    learn, and prepare for successful placement opportunities.
                    <br></br>
                    <center>Thanking you</center>

                    </p>
                    
                    
                    
                    <hr />

                    <Row>
                      <Col xl="2" xs="6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img3}
                            alt="Qovex"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </Col>
                      <Col xl="2" xs="6">
                        <Card>
                          <img
                            className="card-img-top img-fluid"
                            src={img4}
                            alt="Qovex"
                          />
                          <div className="py-2 text-center">
                            <Link to="" className="fw-medium">
                              Download
                            </Link>
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <Link
                      to="#"
                      className="btn btn-secondary waves-effect mt-4"
                    >
                      <i className="mdi mdi-reply"></i> Reply
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default EmailRead
