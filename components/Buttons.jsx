export default function Buttons(props) {
  return (
    <>
      <button
        type="button"
        className={"btn btn-share btn-shrink rounded " + props.class}
        onClick={props.func}
      >
        <i className={"fa-solid fa-sm " + props.icon}></i>
        {props.name}
      </button>
    </>
  );
}
