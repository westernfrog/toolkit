import Link from "next/link";
import ToolsCat from "./ToolsCat";

export default function ToolsName(props) {
  function clipboard() {
    let text = document.getElementById("clipboard");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2">
        <h1 class="h2 text-dm fw-bold">{props.name}</h1>
        <div class="btn-toolbar my-2 mb-md-0">
          <button
            type="button"
            class="btn btn-sm btn-share text-dm p-2 me-2"
            data-bs-toggle="modal"
            data-bs-target="#Modal"
          >
            <i class="fa-solid fa-share-nodes me-2 fa-lg"></i>
            Share tools
          </button>
          <button
            class="btn btn-sm btn-share text-dm p-2 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i class="fa-solid fa-wrench me-2 fa-lg"></i>
            More tools
          </button>

          <div
            class="offcanvas offcanvas-start bg-light overflow-auto"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header border-bottom shadow-sm px-4">
              <h6 id="offcanvas-title" className="mb-0 text-rubik">
                <i
                  class="fa-solid fa-infinity fa-xl me-2"
                  style={{ color: "#674188" }}
                ></i>
                Playground
              </h6>
              <button
                type="button"
                className="text-reset btn pe-0 btnclose"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ boxShadow: "none" }}
              >
                <i className="fa-solid fa-xmark fa-xl"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <nav className="d-md-block bg-light px-2">
                <div className="my-2">
                  <h4 className="sidebar-heading my-2 text-dm fw-bold">
                    <Link
                      href={"/text"}
                      className="text-decoration-none text-dark"
                    >
                      <div className="row">
                        <div className="col-9 text-rubik">Text tools</div>
                        <div className="col-2 text-end px-0">
                          <i class="fa-solid fa-link"></i>
                        </div>
                      </div>
                    </Link>
                  </h4>
                  <ul className="nav flex-column">
                    <ToolsCat
                      icon={<i className="fa-solid fa-font fa-lg me-2"></i>}
                      title="Case converter"
                      url="/tools/case-converter"
                      active={props.caseconverter}
                    />
                    <ToolsCat
                      icon={
                        <i className="fa-solid fa-text-height fa-lg me-2"></i>
                      }
                      title="Text formatting"
                      url="/tools/text-format"
                      active={props.textformat}
                    />
                    <ToolsCat
                      icon={<i className="fa-solid fa-pencil fa-lg me-2"></i>}
                      title="Lorem Ipsum generator"
                      url="/tools/lorem-ipsum-generator"
                      active={props.loremipsum}
                    />
                    <ToolsCat
                      icon={
                        <i className="fa-solid fa-calculator fa-lg me-2"></i>
                      }
                      title="Letter counter"
                      url="/tools/letter-counter"
                      active={props.lettercounter}
                    />
                    <ToolsCat
                      icon={
                        <i className="fa-solid fa-laptop-code fa-lg me-2"></i>
                      }
                      title="Prettify Javascript"
                      url="/tools/javascript-formatter"
                      active={props.javascriptformatter}
                    />
                  </ul>
                  <h4 className="sidebar-heading my-2 text-dm fw-bold">
                    <Link
                      href={"/image"}
                      className="text-decoration-none text-dark"
                    >
                      <div className="row">
                        <div className="col-9 text-rubik">Image tools</div>
                        <div className="col-2 text-end px-0">
                          <i class="fa-solid fa-link"></i>
                        </div>
                      </div>
                    </Link>
                  </h4>
                  <ul className="nav flex-column">
                    <ToolsCat
                      icon={
                        <i className="fa-solid fa-photo-film fa-lg me-2"></i>
                      }
                      title="Image filters"
                      url="/tools/image-filter"
                      active={props.imagefilter}
                    />
                    <ToolsCat
                      icon={<i className="fa-solid fa-image fa-lg me-2"></i>}
                      title="Image to Base64 converter"
                      url="/tools/image-to-base"
                      active={props.imagetobase}
                    />
                    <ToolsCat
                      icon={<i className="fa-solid fa-code fa-lg me-2"></i>}
                      title="Base64 to Image converter"
                      url="/tools/base-to-image"
                      active={props.basetoimage}
                    />
                  </ul>
                  <h4 className="sidebar-heading my-2 text-dm fw-bold">
                    <Link
                      href={"/file"}
                      className="text-decoration-none text-dark"
                    >
                      <div className="row">
                        <div className="col-9 text-rubik">File tools</div>
                        <div className="col-2 text-end px-0">
                          <i class="fa-solid fa-link"></i>
                        </div>
                      </div>
                    </Link>
                  </h4>
                  <ul className="nav flex-column">
                    <ToolsCat
                      icon={
                        <i className="fa-regular fa-file-pdf fa-lg me-2"></i>
                      }
                      title="PDF to Word converter"
                      url="/tools/pdf-to-word"
                      active={props.pdftoword}
                    />
                    <ToolsCat
                      icon={
                        <i className="fa-regular fa-file-word fa-lg me-2"></i>
                      }
                      title="Word to PDF converter"
                      url="/tools/word-to-pdf"
                      active={props.wordtopdf}
                    />
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div
            class="modal fade"
            id="Modal"
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content text-rubik bg-light border-0">
                <div class="modal-header border-0">
                  <h5 class="modal-title" id="ModalLabel">
                    Share tools
                  </h5>
                </div>
                <div class="modal-body py-0">
                  <p style={{ fontSize: "14px" }}>
                    Share this link among your family and friends to make their
                    work easier!
                  </p>
                  <div className="row g-0">
                    <div className="col-10 col-lg-11">
                      <div class="input-group input-group-sm mb-3">
                        <input
                          id="clipboard"
                          type="text"
                          class="form-control"
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
                        class="btn btn-sm btn-copy text-dm"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal2"
                        onClick={clipboard}
                      >
                        <i class="fa-regular fa-clone text-light"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="modal-footer border-0 pt-0">
                  <button
                    type="button"
                    class="btn btn-share btn-sm"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="Modal2"
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm modal-dialog-scrollable">
              <div class="modal-content border-0">
                <div
                  class="modal-header rounded border-0 py-1"
                  style={{ backgroundColor: "#BFACE2", color: "#5d3891" }}
                >
                  <h6 class="modal-title text-rubik" id="ModalLabel">
                    Link copied!
                  </h6>
                  <button
                    type="button"
                    class="btn px-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ boxShadow: "none" }}
                  >
                    <i
                      class="fa-solid fa-xmark fa-lg"
                      style={{ color: "#5d3891" }}
                    ></i>
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
