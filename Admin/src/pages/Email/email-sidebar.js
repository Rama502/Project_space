import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import images
import avatar2 from "../../assets/images/users/Rajesh.png"
import avatar3 from "../../assets/images/users/veejababu.png"
import avatar4 from "../../assets/images/users/Kiran Kumar.png"
import avatar6 from "../../assets/images/users/Saifu.png"

const EmailSideBar = () => {
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <Button
          type="button"
          color="danger"
          className="btn-block waves-effect waves-light"
          onClick={() => {
            setmodal(!modal)
          }}
          block
        >
          Compose
        </Button>
        <div className="mail-list mt-4">
          <Link to="email-inbox" className="active">
            <i className="mdi mdi-email-outline me-2"></i> Inbox{" "}
            <span className="ms-1 float-end">(18)</span>
          </Link>
          <Link to="#">
            <i className="mdi mdi-star-outline me-2"></i>Starred
          </Link>
          <Link to="#">
            <i className="mdi mdi-diamond-stone me-2"></i>Important
          </Link>
          <Link to="#">
            <i className="mdi mdi-file-outline me-2"></i>Draft
          </Link>
          <Link to="#">
            <i className="mdi mdi-email-check-outline me-2"></i>Sent Mail
          </Link>
          <Link to="#">
            <i className="mdi mdi-trash-can-outline me-2"></i>Trash
          </Link>
        </div>

        <h6 className="mt-4">Labels</h6>

        <div className="mail-list mt-1">
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>
            Theme Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>
            Traineers Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>
            Trainees
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>
            Linked in
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>
          Social Media
          </Link>
        </div>

        <h6 className="mt-4">Chat</h6>

        <div className="mt-2">
          <Link to="#" className="d-flex align-items-start">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar2}
              alt=""
              height="36"
            />
            <div className="flex-1 chat-user-box">
              <p className="user-title m-0">Rajesh</p>
              <p className="text-muted">Hello.....</p>
            </div>
          </Link>

          <Link to="#" className="d-flex align-items-start">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar3}
              alt=""
              height="36"
            />
            <div className="flex-1 chat-user-box overflow-hidden">
              <p className="user-title m-0">VeeraBabu</p>
              <p className="text-muted">What about our next..</p>
            </div>
          </Link>

          <Link to="#" className="d-flex align-items-start">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar4}
              alt=""
              height="36"
            />
            <div className="flex-1 chat-user-box overflow-hidden">
              <p className="user-title m-0">Kiran</p>
              <p className="text-muted">Yeah everything is fine</p>
            </div>
          </Link>

          <Link to="#" className="d-flex align-items-start">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar6}
              alt=""
              height="36"
            />
            <div className="flex-1 chat-user-box overflow-hidden">
              <p className="user-title m-0">MD.Shaifu</p>
              <p className="text-muted">Wow that's great</p>
            </div>
          </Link>
        </div>
      </Card>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            New Message
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control" placeholder="To" />
              </div>

              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal)
              }}
            >
              Close
            </Button>
            <Button type="button" color="primary">
              Send <i className="fab fa-telegram-plane ms-1"></i>
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default EmailSideBar
