import MoreTools from "./MoreTools";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

export default function ToolsName(props) {
  function clipboard() {
    let text = document.getElementById("clipboard");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  }
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2">
        <h1 className="h2 text-dm fw-bold">{props.name}</h1>
        <div className="btn-toolbar my-2 mb-md-0">
          <button
            type="button"
            className="btn btn-sm btn-share btn-shrink text-dm p-2 me-2"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
          >
            <i className="fa-solid fa-share-nodes me-2 fa-color"></i>
            Share tools
          </button>
          <MoreTools />
          <div
            className="modal fade px-0"
            id="Modal"
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content text-rubik bg-light border-0">
                <div className="modal-header border-0">
                  <h5 className="modal-title" id="ModalLabel">
                    Share tools
                  </h5>
                </div>
                <div className="modal-body py-0">
                  <p style={{ fontSize: "14px" }}>
                    Share this link among your family and friends to make their
                    work easier!
                  </p>
                  <div className="row g-0 mb-3">
                    <div className="col-10 col-lg-11">
                      <div className="input-group input-group-sm">
                        <input
                          id="clipboard"
                          type="text"
                          className="form-control"
                          aria-label="Sizing  input"
                          aria-describedby="inputGroup-sizing-sm"
                          defaultValue={
                            "https://toolkit-online.vercel.app/" + props.url
                          }
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-2 col-lg-1 text-end">
                      <button
                        type="button"
                        className="btn btn-sm btn-copy btn-shrink text-dm"
                        onClick={() => {
                          clipboard();
                          setShow(true);
                        }}
                      >
                        <i className="fa-regular fa-clone text-light"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <Toast
                    onClose={() => setShow(false)}
                    show={show}
                    delay={5000}
                    autohide
                  >
                    <button
                      type="button"
                      className="btn btn-share btn-sm btn-success"
                      disabled
                    >
                      Copied!
                    </button>
                  </Toast>
                  <button
                    type="button"
                    className="btn btn-share btn-sm btn-shrink"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
