import Link from "next/link";

export default function ToolsCat(props) {
  return (
    <>
      <li class="nav-item">
        <Link class="nav-link toolsCat" href={props.url}>
          <div className="row">
            <div className="col-2">{props.icon}</div>
            <div className="col-10"> {props.title}</div>
          </div>
        </Link>
      </li>
    </>
  );
}
