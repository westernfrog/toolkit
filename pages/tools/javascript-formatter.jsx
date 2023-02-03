import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
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

  const handleOnClick = () => {
    setNewText(text);
  };

  const handleReset = () => {
    setText("");
    setNewText("");
  };

  const clipboard = () => {
    let newData = $(".input").html();
    let data = JSON.stringify(newData);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar javascriptformatter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName
              name="Javascript formatter"
              url="tools/javascript-formatter"
            />
            <div className="row text-center text-rubik my-3">
              <div className="col-md-4">
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

                <div className="row">
                  <div className="col-6 d-grid">
                    <button
                      type="button"
                      className="btn btn-sm btn-share border text-dm me-2 my-3 rounded text-uppercase text-dark text-dm fw-bold fs-7 py-2 btn-shrink"
                      style={{
                        borderRadius: "10px",
                        fontSize: "14px",
                      }}
                      onClick={handleOnClick}
                    >
                      Format
                      <i className="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                    </button>
                  </div>
                  <div className="col-6 d-grid">
                    <button
                      type="button"
                      className="btn btn-sm btn-share border text-dm my-3 text-uppercase text-dark text-dm fw-bold fs-7 py-2 btn-shrink"
                      style={{ borderRadius: "10px" }}
                      onClick={handleReset}
                    >
                      <i className="fa-solid fa-recycle fa-color me-2 fa-lg"></i>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-3 mt-lg-0">
                <div className="border-0" style={{ borderRadius: "10px" }}>
                  <div
                    className="text-dm rounded shadow-sm text-start p-3 overflow-auto bg-dark output"
                    style={{ height: "400px" }}
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
                  <div className="row g-0">
                    <div className="col-10 d-grid">
                      <button
                        type="button"
                        className="btn btn-sm btn-share btn-shrink border text-dm me-2 my-3 rounded text-dark text-dm fw-bold fs-7 py-2"
                        onClick={() => {
                          clipboard();
                          setShow(true);
                        }}
                      >
                        COPY TO CLIPBOARD
                        <i className="fa-solid fa-copy fa-color ms-2"></i>
                      </button>
                    </div>
                    <div className="col-2">
                      <Toast
                        onClose={() => setShow(false)}
                        show={show}
                        delay={5000}
                        autohide
                      >
                        <Buttons
                          icon="fa-circle-check text-light"
                          class="btn-sm fs-7 btn-success disabled py-2 my-3"
                        />
                      </Toast>
                    </div>
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
