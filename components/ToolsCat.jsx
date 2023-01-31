import Link from "next/link";

export default function ToolsCat(props) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link toolsCat mx-0 rounded-start" href={props.url}>
          <div className="row">
            <div className="col-2">{props.icon}</div>
            <div className="col-10">{props.title}</div>
          </div>
        </Link>
      </li>
    </>
  );
}
