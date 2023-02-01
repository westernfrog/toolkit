import Link from "next/link";
import ToolsCat from "./ToolsCat";

export default function MoreTools(props) {
  return (
    <>
      <button
        className="btn btn-sm btn-share text-dm p-2 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <i className="fa-solid fa-wrench me-2 fa-color"></i>
        More tools
      </button>

      <div
        className="offcanvas offcanvas-start bg-light overflow-auto"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header border-bottom shadow-sm px-4">
          <h6 id="offcanvas-title" className="mb-0 text-rubik">
            <i className="fa-solid fa-infinity fa-xl fa-color me-2"></i>
            Playground
          </h6>
          <button
            type="button"
            className="text-reset btn pe-0 btn-shrink"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ boxShadow: "none" }}
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <nav className="d-md-block bg-light px-2">
            <div className="my-2">
              <h4 className="sidebar-heading text-dm fw-bold">
                <Link href={"/text"} className="text-decoration-none text-dark">
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold h6 mb-0">
                      Text tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
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
                  icon={<i className="fa-solid fa-text-height fa-lg me-2"></i>}
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
                  icon={<i className="fa-solid fa-calculator fa-lg me-2"></i>}
                  title="Letter counter"
                  url="/tools/letter-counter"
                  active={props.lettercounter}
                />
                <ToolsCat
                  icon={<i className="fa-solid fa-laptop-code fa-lg me-2"></i>}
                  title="Prettify Javascript"
                  url="/tools/javascript-formatter"
                  active={props.javascriptformatter}
                />
              </ul>
              <h4 className="sidebar-heading mt-3 text-dm fw-bold">
                <Link
                  href={"/image"}
                  className="text-decoration-none text-dark"
                >
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold h6 mb-0">
                      Image tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </Link>
              </h4>
              <ul className="nav flex-column">
                <ToolsCat
                  icon={<i className="fa-solid fa-photo-film fa-lg me-2"></i>}
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
              <h4 className="sidebar-heading mt-3 text-dm fw-bold">
                <Link href={"/file"} className="text-decoration-none text-dark">
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold h6 mb-0">
                      File tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </Link>
              </h4>
              <ul className="nav flex-column">
                <ToolsCat
                  icon={<i className="fa-regular fa-file-pdf fa-xl me-2"></i>}
                  title="PDF to Word converter"
                  url="/tools/pdf-to-word"
                  active={props.pdftoword}
                />
                <ToolsCat
                  icon={<i className="fa-regular fa-file-word fa-xl me-2"></i>}
                  title="Word to PDF converter"
                  url="/tools/word-to-pdf"
                  active={props.wordtopdf}
                />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
