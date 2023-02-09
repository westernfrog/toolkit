import Link from "next/link";

export default function DropdownLink(props) {
  return (
    <>
      <li>
        <Link className="dropdown-item" href={props.url}>
          {props.icon}
          {props.title}
        </Link>
      </li>
    </>
  );
}
