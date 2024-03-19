import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const Overview = () => {

    return (
        <React.Fragment>
            <Col lg={3} className="col-xl-3">
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Reviews</h4>
                        <div className="mb-4">
                            <h5><span className="text-primary">5000</span>+ Placements</h5>
                        </div>
                        <div className="mb-3">
                            <i className="fas fa-quote-left h4 text-primary"></i>
                        </div>

                        <div id="reviewExampleControls" className="carousel slide review-carousel"
                            data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div>
                                        <p>Technical Hub  Platform serves as a dynamic hub for students to explore, learn,
                                             and prepare for successful placement opportunities.</p>
                                        <div className="d-flex align-items-start mt-4">
                                            <div className="avatar-sm me-3">
                                                <span
                                                    className="avatar-title bg-soft-primary text-primary rounded-circle">
                                                    B
                                                            </span>
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-size-16 mb-1">Babji Neelam</h5>
                                                <p className="mb-2">CEO of TechnicalHub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <p>For science, music, sport, etc, Europe uses the same vocabulary
                                                        languages only differ in their grammar</p>
                                        <div className="d-flex align-items-start mt-4">
                                            <div className="avatar-sm me-3">

                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-size-16 mb-1">Kelly Rivera</h5>
                                                <p className="mb-2">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <p>The new common language will be more simple and regular than the
                                                        existing European languages.</p>
                                        <div className="d-flex align-items-start mt-4">
                                            <div className="avatar-sm me-3">
                                                <span
                                                    className="avatar-title bg-soft-primary text-primary rounded-circle">
                                                    S
                                                            </span>
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-size-16 mb-1">Simon Hawkins</h5>
                                                <p className="mb-2">CEO of XYZ Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#reviewExampleControls" role="button"
                                data-bs-slide="prev">
                                <i className="mdi mdi-chevron-left carousel-control-icon"></i>
                            </a>
                            <a className="carousel-control-next" href="#reviewExampleControls" role="button"
                                data-bs-slide="next">
                                <i className="mdi mdi-chevron-right carousel-control-icon"></i>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Overview;