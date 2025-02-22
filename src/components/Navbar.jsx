import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>Best</h2>
            </div>

            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="./home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="./About Us">AboutUs</a>
              </li>
              <li>
                <a href="./Rooms">Rooms</a>
              </li>
              <li>
                <a href="./contact">Contact</a>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}></div>
            <FaBars />
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="content text-light my-4 mx-3">
            <h2 className="text-light my-1">Home, away From Home</h2>
            <h4>Friendly staff, tidy rooms and tasty food!</h4>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
