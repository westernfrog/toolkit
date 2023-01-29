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
                <i className="fa-solid fa-font fa-2xl mx-auto text-light"></i>
              </div>
              <Tools
                title="Case converter"
                desc="Convert your text or string to uppercase or lowercase."
              />
            </div>
          </Link>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-solid fa-font fa-2xl mx-auto text-light"></i>
            </div>
            <Tools
              title="Case convertors"
              desc="Convert your text or string to uppercase or lowercase."
            />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-solid fa-font fa-2xl mx-auto text-light"></i>
            </div>
            <Tools
              title="Case convertors"
              desc="Convert your text or string to uppercase or lowercase."
            />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-solid fa-font fa-2xl mx-auto text-light"></i>
            </div>
            <Tools
              title="Case convertors"
              desc="Convert your text or string to uppercase or lowercase."
            />
          </div>
        </div>
        <div className="col-md-6 my-3 tool-link">
          <div className="row g-0">
            <div className="col-3 bg-success d-flex align-items-center justify-content-between mx-auto rounded">
              <i className="fa-solid fa-font fa-2xl mx-auto text-light"></i>
            </div>
            <Tools
              title="Case convertors"
              desc="Convert your text or string to uppercase or lowercase."
            />
          </div>
        </div>
      </div>
    </>
  );
}
