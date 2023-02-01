export default function LetterCounterModal(params) {
  return (
    <>
      <div
        class="modal fade"
        id="Modal"
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content text-rubik bg-light border-0">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="ModalLabel">
                Share tools
              </h5>
            </div>
            <div class="modal-body py-0">
              <p style={{ fontSize: "14px" }}>
                Share this link among your family and friends to make their work
                easier!
              </p>
              <div className="row g-0">
                <div className="col-10 col-lg-11">
                  <div class="input-group input-group-sm mb-3">
                    <input
                      id="clipboard"
                      type="text"
                      class="form-control"
                      aria-label="Sizing  input"
                      aria-describedby="inputGroup-sizing-sm"
                      defaultValue={
                        "https://toolkit-online.vercel.app/" + props.url
                      }
                      disabled
                    />
                  </div>
                </div>
                <div className="col-2 col-lg-1 text-end">
                  <button
                    type="button"
                    class="btn btn-sm btn-copy text-dm"
                    data-bs-toggle="modal"
                    data-bs-target="#Modal2"
                    onClick={clipboard}
                  >
                    <i class="fa-regular fa-clone text-light"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button
                type="button"
                class="btn btn-share btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
