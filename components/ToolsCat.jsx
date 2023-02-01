import Link from "next/link";

export default function ToolsCat(props) {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link toolsCat mx-0 rounded"
          href={props.url}
          id={props.active}
        >
          <div className="row">
            <div className="col-2 fa-color">{props.icon}</div>
            <div className="col-10 text-dark">{props.title}</div>
          </div>
        </Link>
      </li>
    </>
  );
}
