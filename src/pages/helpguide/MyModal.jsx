import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form class="quick-query-form" id="query_form" method="post" action="">
          <div class="form-group">
            <label for="email">
              Name <sup>*</sup>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="query_name"
              name="query_name"
            />
          </div>

          <div class="form-group">
            <label for="email">
              Email Address<sup>*</sup>{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="query_email"
              name="query_email"
            />
          </div>

          <div class="form-group">
            <label for="email">Phone Number</label>
            <input
              type="text"
              id="query_mobile"
              name="query_mobile"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label for="message">
              Message <sup>*</sup>{" "}
            </label>
            <textarea
              name="query_message"
              id="query_message"
              class="form-control"
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
