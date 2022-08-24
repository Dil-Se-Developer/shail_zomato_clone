import React from "react";
import "./Modal.css";

const Backdrop = (props) => {
  const { onClose } = props;
  return <div className="backdrop" onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const { onClose } = props;
  return (
    <>
      <Backdrop onClose={onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
