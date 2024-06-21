import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="modal-container">
      <button onClick={handleModalPopup} type="button">
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h2>Customized Footer</h2>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
