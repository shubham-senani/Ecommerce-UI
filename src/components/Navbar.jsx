import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div
      className="sticky-top z-5 d-flex navbar-expand-lg align-items-center justify-content-between"
      style={{
        height: "80px",
        boxShadow: "0px 1px 3px -2px",
        backgroundColor: "white",
      }}
    >
      <div className="d-flex ms-3 mb-2 align-items-center ">
        <img src={logo} alt="" width={80} height={75} />
      </div>

      <div
        className="d-flex nav-item align-items-center"
        style={{ width: "700px" }}
      >
        <input
          type="search"
          style={{ backgroundColor: "#EEF1FF" }}
          className="form-control p-2"
          id="site-search"
          name="Search"
          placeholder="Search........."
        />
      </div>
      <div>
        <ul className="d-flex navbar-nav decoration-none mx-5">
          <li className="mx-2 nav-item">
            <Link
              to= "/register"
              className="nav-link text-light fw-medium px-3 p-1 rounded d-none"
              style={{ backgroundColor: "#502185" }}
            >
              Login
            </Link>
          </li>
          <li className="mx-2 nav-item">
            <Link
              to="/register"
              className="nav-link text-light fw-medium px-3 p-1 rounded"
              style={{ backgroundColor: "#502185" }}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
