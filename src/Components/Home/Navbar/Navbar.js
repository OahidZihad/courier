import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      //   style={{ backgroundColor: "#e3f2fd" }}
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container-fluid">
        <div class="d-flex">
          <h1
            class="ms-5 active text-brand"
            aria-current="page"
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Courier
          </h1>
          <form class="form-inline ms-4 mt-2 me-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button
            class="btn btn-dark mt-2"
            style={{ height: "38px" }}
            type="submit"
          >
            Search
          </button>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link ms-5 active"
                aria-current="page"
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Login
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link ms-5"
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Parcels
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ms-5"
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Payments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
