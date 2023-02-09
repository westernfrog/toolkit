import Link from "next/link";
import ToolsCatLg from "./Tools-CatLg";

export default function Sidebar(props) {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-3 col-xl-2 d-md-block bg-light sidebar collapse mx-3 overflow-auto"
      >
        <div className="my-5">
          <h4 className="sidebar-heading px-3 mt-4 mb-2 text-dm fw-bold">
            <Link
              href={"/text-tools"}
              className="text-decoration-none text-dark"
            >
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
            <ToolsCatLg
              icon={<i className="fa-solid fa-font fa-lg me-2"></i>}
              title="Case converter"
              url="/text-tools/case-converter"
              active={props.caseconverter}
            />
            <ToolsCatLg
              icon={<i className="fa-solid fa-pencil fa-lg me-2"></i>}
              title="Lorem Ipsum generator"
              url="/text-tools/lorem-ipsum-generator"
              active={props.loremipsum}
            />
            <ToolsCatLg
              icon={<i className="fa-solid fa-calculator fa-lg me-2"></i>}
              title="Letter counter"
              url="/text-tools/letter-counter"
              active={props.lettercounter}
            />
            <ToolsCatLg
              icon={<i className="fa-solid fa-laptop-code fa-lg me-2"></i>}
              title="Prettify Javascript"
              url="/misc-tools/javascript-formatter"
              active={props.javascriptformatter}
            />
          </ul>
          <h4 className="sidebar-heading px-3 mt-4 mb-2 text-dm fw-bold">
            <Link
              href={"/image-tools"}
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
            <ToolsCatLg
              icon={<i className="fa-solid fa-photo-film fa-lg me-2"></i>}
              title="Image filters"
              url="/image-tools/image-filter"
              active={props.imagefilter}
            />
            <ToolsCatLg
              icon={<i className="fa-solid fa-image fa-lg me-2"></i>}
              title="Image to Base64 converter"
              url="/image-tools/image-to-base"
              active={props.imagetobase}
            />
            <ToolsCatLg
              icon={<i className="fa-solid fa-code fa-lg me-2"></i>}
              title="Base64 to Image converter"
              url="/image-tools/base-to-image"
              active={props.basetoimage}
            />
          </ul>
          <h4 className="sidebar-heading px-3 mt-4 mb-2 text-dm fw-bold">
            <Link
              href={"/file-tools"}
              className="text-decoration-none text-dark"
            >
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
            <ToolsCatLg
              icon={<i className="fa-regular fa-file-pdf fa-xl me-2"></i>}
              title="PDF to Word converter"
              url="/file-tools/pdf-to-word"
              active={props.pdftoword}
            />
            <ToolsCatLg
              icon={<i className="fa-regular fa-file-word fa-xl me-2"></i>}
              title="Word to PDF converter"
              url="/file-tools/word-to-pdf"
              active={props.wordtopdf}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
