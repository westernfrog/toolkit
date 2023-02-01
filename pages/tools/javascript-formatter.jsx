import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

export default function JSFormat() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (event) => {
    let newText = event.target.value;

    setText(newText);
  };

  function clipboard() {
    let text = document.getElementById("clipboard");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  }
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
                  <div className="form-floating text-dm">
                    <textarea
                      className="form-control shadow-sm fs-7"
                      placeholder="enter the text.."
                      id="floatingTextarea"
                      style={{
                        height: "400px",
                        borderRadius: "10px",
                        resize: "none",
                      }}
                      onChange={handleOnChange}
                    ></textarea>
                    <label
                      htmlFor="floatingTextarea"
                      className="text-muted text-chivo"
                      style={{ fontSize: "14px" }}
                    >
                      Input
                    </label>
                  </div>
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
                    >
                      Format
                      <i className="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                    </button>
                  </div>
                  <div className="col-6 d-grid">
                    <button
                      type="button"
                      className="btn btn-sm btn-share border text-dm my-3 rounded text-uppercase text-dark text-dm fw-bold fs-7 py-2 btn-shrink"
                      style={{ borderRadius: "10px" }}
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
                    className="text-dm border border-2 rounded shadow-sm text-start p-3 overflow-auto bg-dark"
                    style={{ height: "400px" }}
                  >
                    <JSONPretty
                      id="json-pretty"
                      data={text}
                      replacer={function (key, value) {
                        if (key === "cccc") {
                          value += "~~~abc";
                        }
                        if (key === "gggg") {
                          value *= 10;
                        }
                        return value;
                      }}
                      space="4"
                      theme={{
                        main: "line-height:1.3;color:#9FC9F3;overflow:auto;",
                        error:
                          "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
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
                        onClick={(clipboard, () => setShow(true))}
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
                        <button
                          type="button"
                          className="btn btn-share btn-sm btn-success rounded fw-bold fs-7 py-2 my-3"
                          disabled
                        >
                          <i className="fa-solid fa-check text-light"></i>
                        </button>
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
