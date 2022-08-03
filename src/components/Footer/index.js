import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <p>Support</p>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>Learn</p>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Footer;
