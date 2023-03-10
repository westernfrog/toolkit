import Link from "next/link";
import ToolsCatMd from "./Tools-CatMd";

export default function MoreTools(props) {
  return (
    <>
      <button
        className="btn btn-sm btn-white btn-shrink text-dm p-2 d-lg-none ms-2"
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
                <Link
                  href={"/text-tools"}
                  className="text-decoration-none text-dark"
                >
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold mb-0">
                      Text tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </Link>
              </h4>
              <ul className="nav flex-column">
                <ToolsCatMd
                  icon={<i className="fa-solid fa-font fa-lg me-2"></i>}
                  title="Case converter"
                  url="/text-tools/case-converter"
                  active={props.caseconverter}
                />
                <ToolsCatMd
                  icon={<i className="fa-solid fa-pencil fa-lg me-2"></i>}
                  title="Lorem Ipsum generator"
                  url="/text-tools/lorem-ipsum-generator"
                  active={props.loremipsum}
                />
                <ToolsCatMd
                  icon={<i className="fa-solid fa-calculator fa-lg me-2"></i>}
                  title="Letter counter"
                  url="/text-tools/letter-counter"
                  active={props.lettercounter}
                />
                <ToolsCatMd
                  icon={<i className="fa-solid fa-laptop-code fa-lg me-2"></i>}
                  title="Prettify Javascript"
                  url="/misc-tools/javascript-formatter"
                  active={props.javascriptformatter}
                />
              </ul>
              <h4 className="sidebar-heading mt-3 text-dm fw-bold">
                <Link
                  href={"/image-tools"}
                  className="text-decoration-none text-dark"
                >
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold mb-0">
                      Image tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </Link>
              </h4>
              <ul className="nav flex-column">
                <ToolsCatMd
                  icon={<i className="fa-solid fa-photo-film fa-lg me-2"></i>}
                  title="Image filters"
                  url="/image-tools/image-filter"
                  active={props.imagefilter}
                />
                <ToolsCatMd
                  icon={<i className="fa-solid fa-image fa-lg me-2"></i>}
                  title="Image to Base64 converter"
                  url="/image-tools/image-to-base"
                  active={props.imagetobase}
                />
                <ToolsCatMd
                  icon={<i className="fa-solid fa-code fa-lg me-2"></i>}
                  title="Base64 to Image converter"
                  url="/image-tools/base-to-image"
                  active={props.basetoimage}
                />
              </ul>
              <h4 className="sidebar-heading mt-3 text-dm fw-bold">
                <Link
                  href={"/file-tools"}
                  className="text-decoration-none text-dark"
                >
                  <div className="row g-0">
                    <div className="col-10 text-chivo fw-bold mb-0">
                      File tools
                    </div>
                    <div className="col-2 text-end px-0">
                      <i className="fa-solid fa-link"></i>
                    </div>
                  </div>
                </Link>
              </h4>
              <ul className="nav flex-column">
                <ToolsCatMd
                  icon={<i className="fa-regular fa-file-pdf fa-xl me-2"></i>}
                  title="PDF to Word converter"
                  url="/file-tools/pdf-to-word"
                  active={props.pdftoword}
                />
                <ToolsCatMd
                  icon={<i className="fa-regular fa-file-word fa-xl me-2"></i>}
                  title="Word to PDF converter"
                  url="/file-tools/word-to-pdf"
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
