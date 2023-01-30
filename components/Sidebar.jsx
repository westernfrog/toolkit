import Link from "next/link";
import ToolsCat from "./ToolsCat";

export default function Sidebar() {
  return (
    <>
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-4"
      >
        <div class="position-sticky my-5">
          <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-dm fw-bold">
            <Link href={"/text"} className="text-decoration-none text-dark">
              # &nbsp;Text tools
            </Link>
          </h4>
          <ul class="nav flex-column">
            <ToolsCat
              icon={<i className="fa-solid fa-font fa-lg me-2"></i>}
              title="Case converter"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-text-height fa-lg me-2"></i>}
              title="Text formatting"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-pencil fa-lg me-2"></i>}
              title="Lorem ipsum generator"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-calculator fa-lg me-2"></i>}
              title="Letter counter"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-laptop-code fa-lg me-2"></i>}
              title="Prettify json"
              url="/json"
            />
          </ul>
          <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-dm fw-bold">
            <Link href={"/image"} className="text-decoration-none text-dark">
              # &nbsp;Image tools
            </Link>
          </h4>
          <ul class="nav flex-column">
            <ToolsCat
              icon={<i class="fa-regular fa-image fa-lg me-2"></i>}
              title="Image filter"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-photo-film fa-lg me-2"></i>}
              title="Image to Base64 converter"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-solid fa-terminal fa-lg me-2"></i>}
              title="Base64 to Image converter"
              url="/tools/text"
            />
          </ul>
          <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-dm fw-bold">
            <Link href={"/file"} className="text-decoration-none text-dark">
              # &nbsp;File tools
            </Link>
          </h4>
          <ul class="nav flex-column">
            <ToolsCat
              icon={<i class="fa-regular fa-file-pdf fa-lg me-2"></i>}
              title="PDF to Word converter"
              url="/tools/text"
            />
            <ToolsCat
              icon={<i class="fa-regular fa-file-word fa-lg me-2"></i>}
              title="Word to PDF converter"
              url="/tools/text"
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
