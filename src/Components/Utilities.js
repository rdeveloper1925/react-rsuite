import {
  Modal,
  Button,
  ButtonToolbar,
  Panel,
  PanelGroup,
  IconButton,
  ButtonGroup,
} from "rsuite";
import React from "react";
import { AiOutlineFundView, AiFillEdit, AiFillDelete } from "react-icons/ai";

export function CompleteModal({ btnTitle, title, body, ...others }) {
  const [open, setOpen] = React.useState(false);
  const modalOpenClose = () => setOpen(!open);
  return (
    <div className="modal-container">
      <ButtonToolbar>
        <Button appearance="primary" onClick={modalOpenClose}>
          {" "}
          {btnTitle}
        </Button>
      </ButtonToolbar>

      <Modal open={open} onClose={modalOpenClose} {...others}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={modalOpenClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={modalOpenClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export function CardCollapsible(props) {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", margin: "5px" }}
    >
      <img src="https://via.placeholder.com/300x150" height="150" />
      <PanelGroup accordion>
        <Panel header="Invoice Information">
          <p>Invoice Information</p>
          <p>Invoice Information</p>
          <p>Invoice Information</p>
          <p>Invoice Information</p>
        </Panel>
        <Panel header="Actions">
          <ButtonToolbar>
            <ButtonGroup>
              <Button
                appearance="primary"
                color="green"
                icon={<AiOutlineFundView />}
              >
                View Items
              </Button>
              <Button appearance="primary" color="yellow" icon={<AiFillEdit />}>
                Edit
              </Button>
              <Button appearance="primary" color="red" icon={<AiFillDelete />}>
                Delete
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Panel>
      </PanelGroup>
    </Panel>
  );
}
