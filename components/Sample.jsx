import Buttons from "./Buttons";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

export default function Sample() {
  const [show, setShow] = useState(false);
  const handleSampleText = () => {
    setText("Hi, How are you!");
  };
  const handleReset = () => {
    setText("");
  };
  const clipboard = () => {
    let copyText = document.getElementById("copy-to-clipboard");
    navigator.clipboard.writeText(copyText.value);
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div
          className="btn-group my-2 rounded"
          role="group"
          aria-label="Basic example"
        >
          <Buttons name="Sample" func={handleSampleText} class="btn-sm" />
          <Buttons
            func={handleReset}
            icon="fa-trash-can text-danger"
            class="mx-2 btn-sm"
          />
          <Buttons
            func={() => {
              clipboard();
              setShow(true);
            }}
            icon="fa-copy fw-light text-success"
            class="btn-sm"
          />
        </div>
        <div
          className="btn-group my-2 rounded ms-auto"
          role="group"
          aria-label="Basic example"
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={5000}
            autohide
          >
            <Buttons
              name="Copied!"
              icon="fa-circle-check fa-sm me-2 text-light"
              class="btn-sm fs-7 btn-success disabled"
            />
          </Toast>
        </div>
      </div>
    </>
  );
}
