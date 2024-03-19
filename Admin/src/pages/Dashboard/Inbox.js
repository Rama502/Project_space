import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

//import images
import avatar1 from '../../assets/images/users/Ceo.png'
import avatar2 from '../../assets/images/users/veejababu.png'
import avatar3 from '../../assets/images/users/Rajesh.png'
import avatar4 from '../../assets/images/users/Kiran Kumar.png'

const Overview = () => {

    const inbox = [
        {
            id: 1,
            img: avatar1,
            name: 'Babji Neelam',
            desc: "Founder & CEO",
            // time: '05 min'
        },
        {
            id: 2,
            img: avatar2,
            name: 'Veerababu',
            desc: "Program Manager Operations",
            // time: '12 min'
        },
        {
            id: 3,
            img: avatar3,
            name: 'Rajesh',
            desc: "Program Manager Placements",
            // time: '18 min'
        },
        {
            id: 4,
            img: avatar4,
            name: 'Kiran Kumar',
            desc: "Program Manager Relationship",
            // time: '2hr ago'
        },
    ]

    return (
        <React.Fragment>
            <Col lg={4}>
                <Card>
                    <CardBody>
                        <h4 className="card-title mb-4">Main Leads</h4>

                        <ul className="inbox-wid list-unstyled">
                        {inbox.map((inbox, key) => (
                            <li className="inbox-list-item" key={key}>
                                <Link to="#">
                                    <div className="d-flex align-items-start">
                                        <div className="me-3 align-self-center">
                                            <img src={inbox.img} alt=""
                                                className="avatar-sm rounded-circle" />
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <h5 className="font-size-16 mb-1">{inbox.name}</h5>
                                            <p className="text-truncate mb-0">{inbox.desc}</p>
                                        </div>
                                        <div className="font-size-12 ms-auto">
                                            {inbox.time}
                                                    </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                            
                        </ul>

                        <div className="text-center">
                            <Link to="#" className="btn btn-primary btn-sm">Load more</Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default Overview;