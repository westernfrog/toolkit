import Link from "next/link";
import $ from "jquery";
import { useEffect } from "react";
import Dropdown from "./Dropdown";
import Message from "./Message";

export default function Header() {
  useEffect(() => {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom text-dm bg-light sticky-top">
        <div className="container-fluid mx-3">
          <Link className="navbar-brand text-rubik" href="/">
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Overview
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul
                  className="dropdown-menu text-dm border-0 shadow-sm opacity-75"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <Dropdown
                    icon={<i className="fa-solid fa-font me-2"></i>}
                    title="Text tools"
                    url="/tools/text"
                  />
                  <Dropdown
                    icon={<i className="fa-regular fa-image me-2"></i>}
                    title="Image tools"
                    url="/tools/image"
                  />
                  <Dropdown
                    icon={<i className="fa-regular fa-file-pdf me-2"></i>}
                    title="File tools"
                    url="/tools/file"
                  />
                  <Dropdown
                    icon={<i className="fa-regular fa-file-code me-2"></i>}
                    title="JSON formatter"
                    url="/tools/json"
                  />
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/playground">
                  Playground
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex align-items-lg-center">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Contact
                </Link>
                <ul
                  className="dropdown-menu text-dm border-0 shadow-sm opacity-75"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <Dropdown
                    icon={<i className="fa-regular fa-envelope me-2"></i>}
                    title="E-mail"
                    url="mailto:haaamansingh007@gmail.com"
                  />
                  <Dropdown
                    icon={<i className="fa-brands fa-linkedin-in me-2"></i>}
                    title="Linkedin"
                    url="https://linkedin.com/in/Linkman-singh123/"
                  />
                  <Dropdown
                    icon={<i className="fa-brands fa-instagram me-2"></i>}
                    title="Instagram"
                    url="https://instagram.com/iam__amansingh/"
                  />
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="https://github.com/westernfrog/toolkit/"
                >
                  <i className="fa-brands fa-github me-2 fa-lg"></i>
                  Github
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="https://www.buymeacoffee.com/amansinghme"
                >
                  <i className="fa-solid fa-bolt me-2 fa-lg"></i>
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <div className="nav-link">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm m-0"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <i class="fa-solid fa-comment me-2"></i>
                    Send a message
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Message />
    </>
  );
}
