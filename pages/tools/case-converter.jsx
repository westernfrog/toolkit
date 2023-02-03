import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { useState } from "react";
import $ from "jquery";
import Buttons from "@/components/Buttons";
import Footer from "@/components/Footer";
import Sample from "@/components/Sample";

export default function CaseConverter() {
  const [text, setText] = useState(" ");

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleBold = () => {
    $(".text-format").toggleClass("fw-bold");
  };
  const handleItalics = () => {
    $(".text-format").toggleClass("fst-italic");
  };
  const handleUnderline = () => {
    $(".text-format").toggleClass("text-decoration-underline");
  };
  const handleStrike = () => {
    $(".text-format").toggleClass("text-decoration-line-through");
  };
  const handleAlignRight = () => {
    $(".text-format").removeClass("text-end text-center");
    $(".text-format").toggleClass("text-start");
  };
  const handleAlignLeft = () => {
    $(".text-format").removeClass("text-start text-center");
    $(".text-format").toggleClass("text-end");
  };
  const handleAlignCenter = () => {
    $(".text-format").removeClass("text-end text-start");
    $(".text-format").toggleClass("text-center");
  };
  const handleCode = () => {
    $(".text-format").toggleClass("font-monospace");
  };
  const handleUpper = () => {
    $(".text-format").removeClass("text-lowercase text-capitalize");
    $(".text-format").toggleClass("text-uppercase");
  };
  const handleLower = () => {
    $(".text-format").removeClass("text-uppercase text-capitalize");
    $(".text-format").toggleClass("text-lowercase");
  };
  const handleSentence = () => {
    $(".text-format").removeClass("text-uppercase text-lowercase");
    $(".text-format").toggleClass("text-capitalize");
  };
  const handleTitle = () => {
    $(".text-format").removeClass("text-uppercase text-lowercase");
    $(".text-format").toggleClass("text-capitalize");
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar caseconverter="active-category" />
          <main className="col-md-11 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4 text-dm">
            <ToolsName name="Case converter" url="tools/case-converter" />
            <p className="text-dm col-lg-10 fs-7">
              A free online tool for converting text to different cases. If you
              have a wrongly formatted text you want to convert it to a{" "}
              <mark>specific case or format a piece of text</mark>, online case
              converter will assist you to perform it immediately.
            </p>
            <Sample />
            <div
              className="btn-group mb-1 rounded d-flex justify-content-between align-items-center"
              role="group"
              aria-label="Basic example"
            >
              <Buttons func={handleBold} icon="fa-bold" class="btn-sm" />
              <Buttons
                func={handleItalics}
                icon="fa-italic"
                class="mx-2 btn-sm"
              />
              <Buttons
                func={handleUnderline}
                icon="fa-underline"
                class="btn-sm"
              />
              <Buttons
                func={handleStrike}
                icon="fa-strikethrough"
                class="btn-sm mx-2"
              />
              <Buttons func={handleCode} icon="fa-code" class="btn-sm" />
              <Buttons
                func={handleAlignRight}
                icon="fa-align-right"
                class="btn-sm mx-2"
              />
              <Buttons
                func={handleAlignLeft}
                icon="fa-align-left"
                class="btn-sm"
              />
              <Buttons
                func={handleAlignCenter}
                icon="fa-align-center"
                class="btn-sm ms-2"
              />
            </div>
            <div className="row mt-2 mb-1 g-2 text-dm">
              <div className="col-6 col-lg-3 d-grid my-1">
                <Buttons
                  name="Uppercase"
                  func={handleUpper}
                  icon="fa-plus me-2 fa-color"
                  class="fs-7"
                />
              </div>
              <div className="col-6 col-lg-3 d-grid my-1">
                <Buttons
                  name="Lowercase"
                  func={handleLower}
                  icon="fa-minus me-2 fa-color"
                  class="fs-7"
                />
              </div>
              <div className="col-6 col-lg-3 d-grid my-1">
                <Buttons
                  name="Sentence case"
                  func={handleSentence}
                  icon="fa-pen me-2 fa-color"
                  class="fs-7"
                />
              </div>
              <div className="col-6 col-lg-3 d-grid my-1">
                <Buttons
                  name="Title case"
                  func={handleTitle}
                  icon="fa-t me-2 fa-color"
                  class="fs-7"
                />
              </div>
            </div>
            <div className="form-floating text-dm">
              <textarea
                className="form-control shadow-sm text-format"
                id="copy-to-clipboard"
                style={{
                  height: "40vh",
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
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
