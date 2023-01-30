import Link from "next/link";

export default function PopCard(props) {
  return (
    <>
      <div className="col-md-6 border-0 alink">
        <Link href={props.url} className="text-decoration-none text-light">
          <div
            className="card border-0 mb-3 text-start px-2 shadow"
            style={{
              height: "12rem",
              backgroundImage: `${props.style}`,
            }}
          >
            <div className="card-footer bg-transparent mt-auto border-0">
              <h6 className="text-rubik">{props.title}</h6>
              <p className="text-dm" style={{ fontSize: "14px" }}>
                {props.desc}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
