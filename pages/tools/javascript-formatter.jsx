import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

export default function JSFormat(params) {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
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
      <div className="container-fluid mb-5">
        <div className="row mx-0 px-md-5">
          <Sidebar javascriptformatter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName
              name="Javascript formatter"
              url="tools/javascript-formatter"
            />
            <div className="row text-center text-rubik my-3">
              <div className="col-md-6">
                <div className="border-0" style={{ borderRadius: "10px" }}>
                  <div className="form-floating text-dm">
                    <textarea
                      className="form-control shadow-sm"
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
                      class="btn btn-sm btn-share border text-dm me-2 my-3 rounded text-dark text-dm fw-bold fs-7 py-2"
                      style={{
                        borderRadius: "10px",
                        fontSize: "14px",
                      }}
                    >
                      Format
                      <i class="fa-solid fa-arrow-right fa-color fa-lg ms-2"></i>
                    </button>
                  </div>
                  <div className="col-6 d-grid">
                    <button
                      type="button"
                      class="btn btn-sm btn-share border text-dm me-2 my-3 rounded text-dark text-dm fw-bold fs-7 py-2"
                      style={{ borderRadius: "10px" }}
                    >
                      <i class="fa-solid fa-recycle fa-color me-2 fa-lg"></i>
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="border-0" style={{ borderRadius: "10px" }}>
                  <div className="form-floating text-dm">
                    <textarea
                      className="form-control shadow-sm"
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
                      className="text-muted text-chivo fs-7"
                    >
                      Output
                    </label>
                  </div>
                  <div className="row g-0">
                    <div className="col-10 d-grid">
                      <button
                        type="button"
                        className="btn btn-sm btn-share border text-dm me-2 my-3 rounded text-dark text-dm fw-bold fs-7 py-2"
                        onClick={(clipboard, () => setShow(true))}
                      >
                        COPY TO CLIPBOARD
                        <i className="fa-regular fa-clone fa-color ms-2"></i>
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
                          className="btn btn-share btn-sm btn-success my-3 rounded fw-bold fs-7 py-2"
                          disabled
                        >
                          <i class="fa-solid fa-check text-light"></i>
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
