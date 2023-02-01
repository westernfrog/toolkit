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
      <div className="container-fluid mb-5">
        <div className="row mx-0 px-md-5">
          <Sidebar lettercounter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName name="Letter counter" url="tools/letter-counter" />
            <div className="form-floating my-3 text-dm">
              <textarea
                className="form-control shadow-sm"
                placeholder="enter the text.."
                id="floatingTextarea"
                style={{
                  height: "300px",
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
              <div className="col-4">
                <div
                  className="me-2 me-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1>{text.split(".").length - 1}</h1>
                  <p className="mb-0 text-muted">line</p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="mx-1 mx-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1>{text.split(" ").length - 1}</h1>
                  <p className="mb-0 text-muted">word</p>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="ms-2 ms-lg-3 border py-3 py-lg-5 shadow-sm bg-white"
                  style={{ borderRadius: "10px" }}
                >
                  <h1>{text.length}</h1>
                  <p className="mb-0 text-muted">letter</p>
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
