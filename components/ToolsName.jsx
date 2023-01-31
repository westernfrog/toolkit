export default function ToolsName(props) {
  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 border-bottom">
        <h1 class="h2 text-dm fw-bold">{props.name}</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <button
            type="button"
            class="btn btn-sm btn-share text-dm p-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-share-nodes me-2 fa-lg"></i>
            Share tools
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content text-rubik bg-light border-0">
                <div class="modal-header border-0">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Share tools
                  </h5>
                </div>
                <div class="modal-body py-0">
                  <p style={{ fontSize: "14px" }}>
                    Share this link among your family and friends to make their
                    work easier!
                  </p>
                  <div className="row g-0">
                    <div className="col-10 col-lg-11">
                      <div class="input-group input-group-sm mb-3">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          defaultValue={
                            "https://toolkit-online.vercel.app/" + props.url
                          }
                        />
                      </div>
                    </div>
                    <div className="col-2 col-lg-1 text-end">
                      <button
                        type="button"
                        class="btn btn-sm btn-copy text-dm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
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
          <div
            class="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm">
              <div class="modal-content border-0">
                <div
                  class="modal-header rounded border-0 py-1"
                  style={{ backgroundColor: "#BFACE2" }}
                >
                  <h6 class="modal-title text-rubik" id="exampleModalLabel">
                    Link copied!
                  </h6>
                  <button
                    type="button"
                    class="btn px-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style={{ boxShadow: "none" }}
                  >
                    <i class="fa-solid fa-xmark fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
