import React, { useState, useEffect } from "react";
import logo_hexabirds from "../assets/images/png/logo_hexabirds.png";
import { NavLink } from "react-router-dom";

function NavbarFile() {
  const [open, setopen] = useState(true);
  if (open) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  const [scrollPosition, setScrollPosition] = useState(0);
  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 58.4 ? (
        <nav className="py-3 overflow-hidden position-fixed w-100 z-2 bg_dark">
          <div className="container">
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-between align-items-center w-100">
                <NavLink to="/" onClick={() => setopen(true)}>
                  <img src={logo_hexabirds} alt="logo_hexabirds" />
                </NavLink>
                <button
                  className="d-flex flex-column align-items-center menuIcon bg-transparent border-0 d-lg-none"
                  onClick={() => setopen(false)}
                >
                  <span></span>
                  <span className="my-2"></span>
                  <span></span>
                </button>
              </div>

              <div
                className={
                  open
                    ? " position-fixed bg-black h-100 top-0 w_px_320 d-flex align-items-center justify-content-center end_n_320 transition_300 all_unset"
                    : "position-fixed bg-black h-100 top-0 w_px_320 d-flex align-items-center justify-content-center end-0 transition_300 all_unset"
                }
              >
                <ul className="mb-0 d-lg-flex align-items-center">
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/About"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Services"
                    >
                      SERVICES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Projects"
                    >
                      PROJECTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Career"
                    >
                      CAREER
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Contact"
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="ff_Inter fw-bold fs_xl  text-uppercase ms-1 Store_button py-2 px-3 mt-5 mt-lg-0 rounded-pill d-inline-block"
                      href="#"
                    >
                      <span>Store</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className=" position-absolute end_30 top_30 opacity-100 d-lg-none"
                      onClick={() => setopen(true)}
                      href="#"
                    >
                      close
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="py-3 overflow-hidden position-fixed w-100 z-2">
          <div className="container">
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex justify-content-between align-items-center w-100">
                <NavLink to="/" onClick={() => setopen(true)}>
                  <img src={logo_hexabirds} alt="logo_hexabirds" />
                </NavLink>
                <button
                  className="d-flex flex-column align-items-center menuIcon bg-transparent border-0 d-lg-none"
                  onClick={() => setopen(false)}
                >
                  <span></span>
                  <span className="my-2"></span>
                  <span></span>
                </button>
              </div>

              <div
                className={
                  open
                    ? " position-fixed bg-black h-100 top-0 w_px_320 d-flex align-items-center justify-content-center end_n_320 transition_300 all_unset"
                    : "position-fixed bg-black h-100 top-0 w_px_320 d-flex align-items-center justify-content-center end-0 transition_300 all_unset"
                }
              >
                <ul className="mb-0 d-lg-flex align-items-center">
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/About"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Services"
                    >
                      SERVICES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Projects"
                    >
                      PROJECTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Career"
                    >
                      CAREER
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => setopen(true)}
                      className="ff_Inter fw-bold fs_lg text_primary text-uppercase d-inline-block me-4 mt-5 mt-lg-0 me-xl-5 ms-1 navlink_hover"
                      to="/Contact"
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="ff_Inter fw-bold fs_xl  text-uppercase ms-1 Store_button py-2 px-3 mt-5 mt-lg-0 rounded-pill d-inline-block"
                      href="#"
                    >
                      <span>Store</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className=" position-absolute end_30 top_30 opacity-100 d-lg-none"
                      onClick={() => setopen(true)}
                      href="#"
                    >
                      close
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavbarFile;
