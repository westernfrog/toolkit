import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import $ from "jquery";

export default function Message() {
  const [formData, setformData] = useState({
    user: "",
  });

  const handleChange = async (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setformData(newData);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  useEffect(() => {
    $(".btn-Reload").on("click", function () {
      location.reload();
    });
  }, []);

  return (
    <>
      <div
        className="offcanvas offcanvas-end text-dm mx-lg-5 my-lg-5 rounded-3 border-0 shadow-sm"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom shadow-sm px-4">
          <h6 id="offcanvasRightLabel" className="mb-0 text-rubik">
            <i className="fa-regular fa-comment fa-xl fa-color me-2"></i>
            Send a message!
          </h6>
          <button
            type="button"
            className="text-reset btn pe-0 btn-shrink"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ boxShadow: "none" }}
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
        <div className="offcanvas-body my-4 mx-2 mx-lg-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/893/893268.png"
            alt="twbs"
            width="100"
            height="100"
            className="img-fluid mx-auto d-block"
          />
          <div className="my-3 text-center" style={{ fontSize: "14px" }}>
            <p>
              Request a feature ✨ or report a bug 🪲 send it via message. This
              would surely make The ToolKit better.
            </p>
          </div>
          <div className="d-grid">
            <textarea
              className="form-control border bg-light mt-2"
              id="user"
              rows="4"
              value={formData.user}
              placeholder="what's on your mind?..."
              style={{ resize: "none", borderRadius: "10px" }}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button
              className="btn btn-success btn-sm my-3 rounded-pill px-3 text-rubik btn-Reload btn-shrink"
              role="button"
              onClick={handleSubmit}
              autoCorrect="false"
            >
              send <i className="fa-regular fa-paper-plane fa-sm ms-2"></i>
            </button>
          </div>
          <p className="my-3 text-center" style={{ fontSize: "14px" }}>
            Loved the tool? Please consider donating 💸 to help it improve!
            <br />
            <Link
              href="https://www.buymeacoffee.com/amansinghme"
              target="_blank"
              className="a-link"
            >
              <Image
                className="mt-3"
                src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                alt="Buy me A Coffee"
                height="23"
                width="100"
              />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
