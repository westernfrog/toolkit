export default function Name(props) {
  return (
    <>
      <h1 className="fs-3 text-rubik fw-bold" id={props.id}>
        # &nbsp;&nbsp;{props.name}
      </h1>
    </>
  );
}
