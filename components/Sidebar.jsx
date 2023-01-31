import Link from "next/link";
import ToolsCat from "./ToolsCat";

export default function Sidebar() {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-4 mx-3"
      >
        <div className="position-sticky my-5">
          <h4 className="sidebar-heading  px-3 mt-4 mb-2 text-dm fw-bold">
            <Link href={"/text"} className="text-decoration-none text-dark">
              <div className="row">
                <div className="col-9">Text tools</div>
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
            />
            <ToolsCat
              icon={<i className="fa-solid fa-text-height fa-lg me-2"></i>}
              title="Text formatting"
              url="/tools/text-format"
            />
            <ToolsCat
              icon={<i className="fa-solid fa-pencil fa-lg me-2"></i>}
              title="Lorem Ipsum generator"
              url="/tools/lorem-ipsum-generator"
            />
            <ToolsCat
              icon={<i className="fa-solid fa-calculator fa-lg me-2"></i>}
              title="Letter counter"
              url="/tools/letter-counter"
            />
            <ToolsCat
              icon={<i className="fa-solid fa-laptop-code fa-lg me-2"></i>}
              title="Prettify Javascript"
              url="/tools/javascript-formatter"
            />
          </ul>
          <h4 className="sidebar-heading px-3 mt-4 mb-2 text-dm fw-bold">
            <Link href={"/image"} className="text-decoration-none text-dark">
              <div className="row">
                <div className="col-9">Image tools</div>
                <div className="col-2 text-end px-0">
                  <i class="fa-solid fa-link"></i>
                </div>
              </div>
            </Link>
          </h4>
          <ul className="nav flex-column">
            <ToolsCat
              icon={<i className="fa-solid fa-photo-film fa-lg me-2"></i>}
              title="Image filters"
              url="/tools/image-filter"
            />
            <ToolsCat
              icon={<i className="fa-solid fa-image fa-lg me-2"></i>}
              title="Image to Base64 converter"
              url="/tools/image-to-base"
            />
            <ToolsCat
              icon={<i className="fa-solid fa-code fa-lg me-2"></i>}
              title="Base64 to Image converter"
              url="/tools/base-to-image"
            />
          </ul>
          <h4 className="sidebar-heading px-3 mt-4 mb-2 text-dm fw-bold">
            <Link href={"/file"} className="text-decoration-none text-dark">
              <div className="row">
                <div className="col-9">File tools</div>
                <div className="col-2 text-end px-0">
                  <i class="fa-solid fa-link"></i>
                </div>
              </div>
            </Link>
          </h4>
          <ul className="nav flex-column">
            <ToolsCat
              icon={<i className="fa-regular fa-file-pdf fa-lg me-2"></i>}
              title="PDF to Word converter"
              url="/tools/pdf-to-word"
            />
            <ToolsCat
              icon={<i className="fa-regular fa-file-word fa-lg me-2"></i>}
              title="Word to PDF converter"
              url="/tools/word-to-pdf"
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
