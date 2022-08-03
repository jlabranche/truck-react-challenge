import { Outlet, Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="wrapper">
          <div className="section">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;
