import { useState, useRef, useEffect } from "react";
import airbnbIcon from "../../assets/logo.PNG";
import globeIcon from "../../assets/globe.png";
import profileIcon from "../../assets/profile.png";
import humbergerIcon from "../../assets/humberger.png";
import headerStyles from "./header.module.css";
import globalStyles from "../../global.module.css";

const classes = { ...headerStyles, ...globalStyles };
function Header() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  //detect outside click events
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isVisible && ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isVisible]);
  return (
    <nav
      className={`navbar navbar-light bg-white py-3 px-xl-5 px-md-3 px-sm-3 shadow ${classes.navbar}`}
    >
      <div className="container-fluid position-relative p-0">
        <a className="navbar-brand">
          <img src={airbnbIcon} height={36} />
        </a>

        <div className="d-flex justify-content-center align-items-start">
          <button
            type="button"
            className={`btn btn-outline-light rounded-pill text-dark px-3 py-2 ${
              (classes.apply_font, classes.d_none)
            }`}
          >
            Become a host
          </button>

          <div
            className={`btn btn-outline-light rounded-pill ${classes.d_none}`}
          >
            <img src={globeIcon} height={20} />
          </div>

          <div
            className={`rounded-pill shadow px-2 py-1 ml-2 ${classes.headerProfile}`}
            onClick={() => setIsVisible(!isVisible)}
          >
            <img src={humbergerIcon} />
            <img src={profileIcon} height={34} className="pr-3" />
          </div>
        </div>

        {isVisible ? (
          <div
            className={`position-absolute bg-white shadow py-3 ${classes.porfileDropdown}`}
          >
            <ul className="p-0 m-0">
              <label
                className={`fs-6 fw-bolder mb-3 px-4 ${classes.apply_font}`}
              >
                Sign up
              </label>
              <li className="list-unstyled d-flex flex-column ml-4 mb-2">
                <a
                  href="#"
                  className={`text-decoration-none text-dark px-4 py-2 ${classes.apply_font}`}
                >
                  Login
                </a>
              </li>
            </ul>
            <ul className="p-0 m-0 mt-3">
              <li className="list-unstyled mb-2 py-2">
                <a
                  href="#"
                  className={`text-decoration-none text-dark px-4  ${classes.apply_font}`}
                >
                  Host your home
                </a>
              </li>
              <li className="list-unstyled mb-2 py-2">
                <a
                  href="#"
                  className={`text-decoration-none text-dark px-4  ${classes.apply_font}`}
                >
                  Host an experience
                </a>
              </li>
              <li className="list-unstyled py-2">
                <a
                  href="#"
                  className={`text-decoration-none text-dark px-4  ${classes.apply_font}`}
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Header;
