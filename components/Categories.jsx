import Link from "next/link";
import Tools from "./Tools";

export default function Categories(params) {
  return (
    <>
      <h1 className="fs-3 text-rubik fw-bold">Tools Categories</h1>
      <div className="row my-4 g-3 text-start">
        <div className="col-md-6 my-3 tool-link">
          <Link href={"/kwk"} className="text-decoration-none text-dark">
            <div className="row g-0">
              <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
                <i className="fa-solid fa-font fa-xl mx-auto text-light"></i>
              </div>
              <Tools title="Text tools" desc="Generate and edit text" />
            </div>
          </Link>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-regular fa-image fa-xl mx-auto text-light"></i>
            </div>
            <Tools title="Image tools" desc="Generate and edit images" />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-regular fa-file-pdf fa-xl mx-auto text-light"></i>
            </div>
            <Tools
              title="File tools"
              desc="Convert files according to your wish"
            />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-solid fa-code fa-xl mx-auto text-light"></i>
            </div>
            <Tools title="JSON formatter" desc="Prettify json code" />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
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
