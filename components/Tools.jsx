import Link from "next/link";

export default function Tools(props) {
  return (
    <>
      <div className="col-md-6 my-3 tool-link">
        <Link href={"/" + props.url} className="text-decoration-none text-dark">
          <div className="row g-0">
            <div
              className="col-3 d-flex align-items-center justify-content-between mx-auto rounded"
              style={props.color}
            >
              {props.icon}
            </div>
            <div className="col-9">
              <div>
                <h6 className="ms-3 text-rubik">{props.title}</h6>
                <p className="mb-0 ms-3 text-dm" style={{ fontSize: "14px" }}>
                  {props.desc}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
