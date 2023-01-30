export default function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <div
          class="card border shadow-sm mb-3 py-3 text-dm"
          style={{ maxWidth: "18rem" }}
        >
          <div class="card-header bg-transparent border-0 mb-3 text-success">
            {props.icon}
          </div>
          <div class="card-body">
            <h5 class="card-title text-rubik">{props.title}</h5>
            <p class="card-text">{props.desc} </p>
          </div>
          <div class="card-footer bg-transparent border-0">Open &gt;</div>
        </div>
      </div>
    </>
  );
}
