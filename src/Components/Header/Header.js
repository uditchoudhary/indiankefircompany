import logo from "../../static/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row header-top-design"></div>
        <div className="row header-row d-flex align-items-center">
          <div className="col">
            <ul className="list-group list-group-horizontal d-flex justify-content-start menu-options">
              <li className="nav-item list-group-item mx-3">Products</li>
              <li className="nav-item list-group-item mx-3">Organics</li>

              <li className="nav-item list-group-item mx-3">Testimony</li>
              <li className="nav-item list-group-item mx-3">Our Roots</li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="col">
            <ul className="list-group list-group-horizontal d-flex justify-content-end menu-options">
              <li className="nav-item list-group-item mx-3">
                {/* <div class="input-group-sm d-flex ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Look for an item here"
                  />
                  <button class="btn btn-sml" type="button" id="button-search">
                    Search
                  </button>
                </div> */}
                Contact Us
              </li>
              <li className="nav-item list-group-item mx-2">Account</li>
              <li className="nav-item list-group-item mx-2">Cart (0)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
