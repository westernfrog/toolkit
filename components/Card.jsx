import Link from "next/link";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <Link href={"/" + props.url} className="text-decoration-none text-dark">
          <div className="card border shadow-sm mb-3 py-3 text-dm">
            <div className="card-header bg-transparent border-0 mb-3 text-success">
              {props.icon}
            </div>
            <div className="card-body">
              <h5 className="card-title text-rubik">{props.title}</h5>
              <p className="card-text">{props.desc} </p>
            </div>
            <div className="card-footer bg-transparent border-0">Open &gt;</div>
          </div>
        </Link>
      </div>
    </>
  );
}
