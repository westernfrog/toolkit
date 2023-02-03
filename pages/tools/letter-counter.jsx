import Buttons from "@/components/Buttons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { useState } from "react";
import { Toast } from "react-bootstrap";

export default function LetterCounter() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    setText(event.target.value);
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
      <div className="container-fluid mb-4">
        <div className="row mx-0 px-md-5">
          <Sidebar lettercounter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4 text-dm">
            <ToolsName name="Letter counter" url="tools/letter-counter" />
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div
                className="btn-group rounded"
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
                className="btn-group rounded ms-auto"
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
            <div className="form-floating my-1 text-dm">
              <textarea
                id="copy-to-clipboard"
                className="form-control shadow-sm"
                style={{
                  height: "46vh",
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
            <div className="row text-center text-rubik g-0">
              <div className="col-4 btn-shrink">
                <div
                  className="me-2 me-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1 className="fa-color">{text.split(".").length - 1}</h1>
                  <p className="mb-0 text-muted">line</p>
                </div>
              </div>
              <div className="col-4 btn-shrink">
                <div
                  className="mx-1 mx-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1 className="fa-color">{text.split(" ").length - 1}</h1>
                  <p className="mb-0 text-muted">word</p>
                </div>
              </div>
              <div className="col-4 btn-shrink">
                <div
                  className="ms-2 ms-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1 className="fa-color">{text.length}</h1>
                  <p className="mb-0 text-muted">letter</p>
                </div>
              </div>
            </div>
            <section className="mt-5">
              <h5 className="text-rubik">More about Letter counter</h5>
              <ol className="fs-7 text-dm list-group list-group-numbered list-group-flush">
                <li className="list-group-item bg-light border-0">
                  Letter counter counts the total number of characters
                  (including white spaces) for the <mark>letter column</mark>.
                </li>
                <li className="list-group-item bg-light border-0">
                  For the <mark>word column </mark> total number of white spaces
                  are counted.
                </li>
                <li className="list-group-item bg-light border-0">
                  Lastly for the <mark>line column </mark> total number of full
                  stops are counted.
                </li>
              </ol>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
