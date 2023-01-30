import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Message() {
  const [formData, setformData] = useState({
    text: "",
  });

  const handleChange = async (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setformData(newData);
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/posted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
  };
  return (
    <>
      <div
        className="offcanvas offcanvas-end text-dm mx-lg-5 my-lg-5 rounded-3 border-0 shadow-sm "
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom shadow-sm px-4">
          <h6 id="offcanvasRightLabel" className="mb-0 fw-bold">
            <i class="fa-regular fa-comment fa-xl me-2"></i>
            Send a message!
          </h6>
          <button
            type="button"
            className="text-reset btn pe-0 btnclose"
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
          <div>
            <textarea
              className="form-control border bg-light mt-2"
              id="text"
              rows="4"
              value={formData.text}
              placeholder="what's on your mind?..."
              style={{ resize: "none" }}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button
              className="btn btn-light btn-sm my-3 rounded-pill px-3 text-rubik border"
              role="button"
              onClick={handleSubmit}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              autoCorrect="false"
            >
              send <i className="fa-regular fa-paper-plane ms-2"></i>
            </button>
          </div>
          <p className="my-3 text-center" style={{ fontSize: "14px" }}>
            Loved the tool? Please consider donating 💸 to help it improve!
            <br />
            <Link
              href="https://www.buymeacoffee.com/amansinghme"
              target="_blank"
              className="alink"
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
