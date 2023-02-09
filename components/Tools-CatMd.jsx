import Link from "next/link";

export default function ToolsCatMd(props) {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link mx-0 rounded ps-0 py-0 btn-shrink"
          href={props.url}
          id={props.active}
        >
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-2 fa-color">{props.icon}</div>
            <div className="col-10 text-dark tools-nav p-2 rounded">
              {props.title}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
