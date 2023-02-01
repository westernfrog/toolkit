import Link from "next/link";

export default function ToolsCatLg(props) {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link tools-nav mx-0 rounded-start"
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
