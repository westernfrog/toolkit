import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

export default function CaseConverter() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
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
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar caseconverter="active-category" />
          <main className="col-md-11 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName name="Case converter" url="tools/case-converter" />
            <div className="d-flex justify-content-between align-items-center">
              <div
                class="btn-group mt-3 mb-2 rounded"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-share btn-shrink fst-italics rounded text-dm"
                  onClick={handleSampleText}
                >
                  Sample
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-share btn-shrink rounded mx-2"
                  onClick={handleReset}
                >
                  <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-share btn-shrink rounded"
                  onClick={() => {
                    clipboard();
                    setShow(true);
                  }}
                >
                  <i class="fa-regular fa-copy text-success"></i>
                </button>
              </div>
              <div
                class="btn-group mt-3 mb-1 rounded ms-auto"
                role="group"
                aria-label="Basic example"
              >
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={5000}
                  autohide
                >
                  <button
                    type="button"
                    className="btn btn-share btn-sm btn-success rounded fs-7 text-dm"
                    disabled
                  >
                    <i className="fa-solid fa-circle-check fa-sm text-light me-2"></i>
                    Copied!
                  </button>
                </Toast>
              </div>
            </div>

            <div
              class="btn-group mb-1 rounded d-flex justify-content-between align-items-center"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded"
              >
                <i class="fa-solid fa-sm fa-bold"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded mx-2"
              >
                <i class="fa-solid fa-sm fa-italic"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded"
              >
                <i class="fa-solid fa-sm fa-underline"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded mx-2"
              >
                <i class="fa-solid fa-sm fa-strikethrough"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded"
              >
                <i class="fa-solid fa-sm fa-align-right"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded mx-2"
              >
                <i class="fa-solid fa-sm fa-align-left"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded"
              >
                <i class="fa-solid fa-sm fa-align-center"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-share btn-shrink rounded ms-2"
              >
                <i class="fa-solid fa-sm fa-align-justify"></i>
              </button>
            </div>
            <div className="form-floating text-dm">
              <textarea
                className="form-control shadow-sm"
                id="copy-to-clipboard"
                style={{
                  height: "300px",
                  borderRadius: "10px",
                  resize: "none",
                }}
                value={text}
                onChange={handleOnChange}
              ></textarea>
              <label htmlFor="floatingTextarea" className="text-muted">
                the text goes here..
              </label>
            </div>
            <div className="row g-0">
              <div className="col-lg-12 col-4 d-grid my-3">
                <button
                  type="button"
                  className="btn btn-sm btn-share border text-dm rounded text-uppercase text-dark text-dm fw-bold btn-shrink"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                  Uppercase
                </button>
              </div>
              <div className="col-lg-12 col-4 d-grid my-3">
                <button
                  type="button"
                  className="btn btn-sm btn-share border text-dm text-uppercase text-dark text-dm fw-bold btn-shrink"
                  style={{ borderRadius: "10px", fontSize: "12px" }}
                >
                  <i className="fa-solid fa-recycle fa-color me-0 me-lg-2 fa-lg"></i>
                  Uppercase
                </button>
              </div>
              <div className="col-lg-12 col-4 d-grid my-3">
                <button
                  type="button"
                  className="btn btn-sm btn-share border text-dm rounded text-uppercase text-dark text-dm fw-bold btn-shrink"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                  Uppercase
                </button>
              </div>
              <div className="col-lg-12 col-4 d-grid my-3">
                <button
                  type="button"
                  className="btn btn-sm btn-share border text-dm rounded text-uppercase text-dark text-dm fw-bold btn-shrink"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                  Uppercase
                </button>
              </div>
              <div className="col-lg-12 col-4 d-grid my-3">
                <button
                  type="button"
                  className="btn btn-sm btn-share border text-dm text-uppercase text-dark text-dm fw-bold btn-shrink"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="fa-solid fa-recycle fa-color me-0 me-lg-2 fa-lg"></i>
                  Uppercase
                </button>
              </div>
            </div>

            <p className="text-dm col-lg-10 fs-7">
              A free online tool for converting text to different cases. If you
              have a wrongly formatted text you want to convert it to a specific
              case, online case converter will assist you to perform it
              immediately.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
