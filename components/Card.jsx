export default function Card() {
  return (
    <>
      <div className="col-md-4">
        <div
          class="card border shadow-sm mb-3 py-3 text-dm"
          style={{ maxWidth: "18rem" }}
        >
          <div class="card-header bg-transparent border-0">Header</div>
          <div class="card-body">
            <h5 class="card-title text-rubik">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer bg-transparent border-0">Open &gt;</div>
        </div>
      </div>
    </>
  );
}
