import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { useState } from "react";

export default function LetterCounter() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container-fluid mb-4">
        <div className="row mx-0 px-md-5">
          <Sidebar lettercounter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName name="Letter counter" url="tools/letter-counter" />
            <div className="form-floating my-3 text-dm">
              <textarea
                className="form-control shadow-sm"
                style={{
                  height: "46vh",
                  borderRadius: "10px",
                  resize: "none",
                }}
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
