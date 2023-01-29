import Link from "next/link";
import Tools from "./Tools";

export default function Categories(params) {
  return (
    <>
      <h1 className="fs-3 text-rubik fw-bold">Tools Categories</h1>
      <div className="row my-4 g-4 text-start">
        <div className="col-md-6 my-3 tool-link">
          <Link href={"/tools/text"} className="text-decoration-none text-dark">
            <div className="row g-0">
              <div
                className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
                style={{ backgroundColor: "#19c37d" }}
              >
                <i className="fa-solid fa-font fa-xl mx-auto text-light"></i>
              </div>
              <Tools title="Text tools" desc="Generate and edit text" />
            </div>
          </Link>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div
              className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
              style={{ backgroundColor: "#dd5ce5" }}
            >
              <i className="fa-regular fa-image fa-xl mx-auto text-light"></i>
            </div>
            <Tools title="Image tools" desc="Generate and edit images" />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div
              className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
              style={{ backgroundColor: "#5436da" }}
            >
              <i className="fa-regular fa-file-pdf fa-xl mx-auto text-light"></i>
            </div>
            <Tools title="File tools" desc="Convert files as your wish" />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div
              className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
              style={{ backgroundColor: "#ef4146" }}
            >
              <i class="fa-solid fa-laptop-code fa-xl mx-auto text-light"></i>
            </div>
            <Tools title="JSON formatter" desc="Prettify json code" />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div
              className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
              style={{ backgroundColor: "#f4ac36" }}
            >
              <i className="fa-solid fa-paragraph fa-xl mx-auto text-light"></i>
            </div>
            <Tools
              title="Lorem ipsum generator"
              desc="Generate and edit lorem text"
            />
          </div>
        </div>
      </div>
    </>
  );
}
