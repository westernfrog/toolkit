import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import $ from "jquery";
import Buttons from "@/components/Buttons";

export default function JSFormat() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (event) => {
    let newData = event.target.value;
    setText(newData);
  };

  const handleSampleText = () => {
    let json = `{"describeMe":"sexy"}`;
    setText(json);
  };

  const handleOnClick = () => {
    setNewText(text);
  };

  const handleReset = () => {
    setText("");
    setNewText("");
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar javascriptformatter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4 text-dm">
            <Share
              name="Javascript formatter"
              url="misc-tools/javascript-formatter"
            />
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div
                className="btn-group rounded"
                role="group"
                aria-label="Basic example"
              >
                <Buttons
                  name="Sample"
                  func={handleSampleText}
                  class="btn-sm my-1"
                />
                <Buttons
                  func={handleReset}
                  icon="fa-trash-can text-danger"
                  class="btn-sm mx-2 my-1"
                />
                <Buttons icon="fa-copy text-success" class="btn-sm my-1" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 d-grid">
                <Buttons
                  name="Format"
                  func={handleOnClick}
                  icon="fa-arrow-right fa-color me-2"
                  class="btn-sm fs-7 shadow-sm my-1"
                />
              </div>
              <div className="col-md-8 d-grid">
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={5000}
                  autohide
                >
                  <Buttons
                    name="JSON Selected!"
                    icon="fa-circle-check fa-sm me-2 text-light"
                    class="btn-sm fs-7 btn-success disabled my-1 border d-none d-md-block"
                  />
                </Toast>
              </div>
            </div>
            <div className="row text-center text-rubik mt-1 mb-4">
              <div className="col-md-4 d-grid">
                <div className="border-0" style={{ borderRadius: "10px" }}>
                  <textarea
                    className="form-control shadow-sm fs-7 input"
                    placeholder="Input"
                    style={{
                      height: "400px",
                      borderRadius: "10px",
                      resize: "none",
                    }}
                    value={text}
                    onChange={handleOnChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-8 mt-3 mt-lg-0 d-grid">
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={5000}
                  autohide
                >
                  <Buttons
                    name="JSON Selected!"
                    icon="fa-circle-check fa-sm me-2 text-light"
                    class="btn-sm fs-7 btn-success disabled my-1 border d-lg-none"
                  />
                </Toast>
                <div className="border-0" style={{ borderRadius: "10px" }}>
                  <div
                    className="text-dm rounded shadow-sm text-start p-3 overflow-auto bg-dark user-select-all"
                    style={{ height: "400px" }}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <JSONPretty
                      id="json-pretty"
                      data={newText}
                      space="4"
                      theme={{
                        main: "line-height:1.3;color:#9FC9F3;background-color:inherit;overflow:auto;",
                        error:
                          "line-height:1.3;color:#D2001A;background-color:#272822;border-radius:6px;overflow:auto;",
                        key: "color:#A460ED;",
                        string: "color:#FD841F;",
                        value: "color:#ADDDD0;",
                        boolean: "color:#10A19D;",
                      }}
                    ></JSONPretty>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
