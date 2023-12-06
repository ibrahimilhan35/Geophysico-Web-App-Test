import { HouseDoorFill, GearFill, EnvelopeFill, InfoCircleFill } from "react-bootstrap-icons"; // Import other Bootstrap icons

const Header = () => {
  return (
    <header className="bg-dark text-white">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-12 text-lg-left text-center mb-3 mb-lg-0">
            {/* Left-align the logo on large screens and center on small screens */}
            <div className="logo">
              <span className="text-white">GEOPHYSICO</span>
            </div>
          </div>
          <div className="col-lg-9 col-12 text-lg-right text-center mb-3 mb-lg-0">
            {/* Right-align the nav items on large screens and center on small screens */}
            {/* Navigation Menu */}
            <nav>
              <ul className="nav justify-content-lg-end justify-content-center">
                {/* Align to the end on large screens and center on small screens */}
                <li className="nav-item">
                  <a className="nav-link text-white d-flex align-items-center" href="/">
                    <HouseDoorFill className="mr-1" /> {/* Home icon */}
                    Home {/* Home text */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white d-flex align-items-center" href="/services">
                    <GearFill className="mr-1" /> {/* Services icon */}
                    Services {/* Services text */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white d-flex align-items-center" href="/contact">
                    <EnvelopeFill className="mr-1" /> {/* Envelope icon */}
                    Contact Us {/* Contact text */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white d-flex align-items-center" href="/about">
                    <InfoCircleFill className="mr-1" /> {/* InfoCircle icon */}
                    About Us {/* About text */}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
