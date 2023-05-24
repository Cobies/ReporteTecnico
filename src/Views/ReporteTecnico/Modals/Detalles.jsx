import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Detalles = () => {
  const [showOuterModal, setShowOuterModal] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);

  const handleOuterModal = () => {
    setShowOuterModal(!showOuterModal);
  };

  const handleInnerModal = () => {
    setShowInnerModal(!showInnerModal);
  };

  return (
    <div>
      <h1>Modal Component</h1>
      <Button variant="primary" onClick={handleOuterModal}>
        Open Outer Modal
      </Button>

      <Modal show={showOuterModal} onHide={handleOuterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Outer Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Content of Outer Modal</p>
          <Button variant="primary" onClick={handleInnerModal}>
            Open Inner Modal
          </Button>

          <Modal show={showInnerModal} onHide={handleInnerModal}>
            <Modal.Header closeButton>
              <Modal.Title>Inner Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Content of Inner Modal</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleInnerModal}>
                Close Inner Modal
              </Button>
            </Modal.Footer>
          </Modal>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOuterModal}>
            Close Outer Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Detalles;
