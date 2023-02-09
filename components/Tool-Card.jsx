import Link from "next/link";

export default function ToolCard(props) {
  return (
    <>
      <div className="col-md-4">
        <Link href={props.url} className="text-decoration-none text-dark">
          <div
            className="card border shadow-sm mb-3 py-3 px-2 text-dm"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-header bg-transparent fa-color border-0 mb-3">
              {props.icon}
            </div>
            <div className="card-body">
              <h5 className="card-title text-rubik">{props.title}</h5>
              <p className="card-text">{props.desc} </p>
            </div>
            <div className="card-footer bg-transparent border-0 text-chivo">
              Open <span className="fa-color fw-bold">&gt;</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
