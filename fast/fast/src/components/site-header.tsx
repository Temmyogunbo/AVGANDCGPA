import React from "react";
import { Image } from "./image";
import { Link } from "react-router-dom";
import fastLogo from '../assets/fastlogo.png';

export class SiteHeader extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#88D20F'}}>
        <Link className="navbar-brand" to="#">
          <Image imageSource={fastLogo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Github
                </Link>
                <Link className="dropdown-item" to="#">
                  Twitter
                </Link>
              </div>
            </li>
            <li className="nav-item ">
              <Link to="/">About</Link>
            </li>
            <li className="nav-item ">
              <Link to="/">Developers</Link>
            </li>
            <li className="nav-item ">
              <Link to="/">Help Centers</Link>
            </li>
            <button className="btn btn-outline-success" type="button">
              Get Started
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}
