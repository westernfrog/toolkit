import Link from "next/link";
import $ from "jquery";
import { useEffect } from "react";

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
            <i className="fa-solid fa-dharmachakra me-2"></i>
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
                  <li>
                    <Link className="dropdown-item" href="/tools/text">
                      <i className="fa-solid fa-font me-2"></i>
                      Text tools
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/tools/file">
                      <i className="fa-regular fa-file-pdf me-2"></i>
                      File tools
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="tools/image">
                      <i className="fa-regular fa-image me-2"></i>
                      Image tools
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/tools/json">
                      <i className="fa-regular fa-file-code me-2"></i>
                      JSON formatter
                    </Link>
                  </li>
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
                  <li>
                    <Link
                      className="dropdown-item"
                      href="mailto:haaamansingh007@gmail.com"
                    >
                      <i className="fa-regular fa-envelope me-2"></i>
                      E-mail
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://linkedin.com/in/Linkman-singh123/"
                    >
                      <i className="fa-brands fa-linkedin-in me-2"></i>
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://instagram.com/iam__amansingh/"
                    >
                      <i className="fa-brands fa-instagram me-2"></i>
                      Instagram
                    </Link>
                  </li>
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
                <Link className="nav-link" href="/">
                  <button type="button" className="btn btn-primary btn-sm m-0">
                    Sign up
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
