export default function Tools(props) {
  return (
    <>
      <div className="col-9">
        <div>
          <h6 className="ms-3 text-rubik">{props.title}</h6>
          <p className="mb-0 ms-3 text-dm" style={{ fontSize: "14px" }}>
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
}
