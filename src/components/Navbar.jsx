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
            <div className="icon" onClick={toogleMenu}></div>
            <FaBars />
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="content">
            <h2>Home away From Home</h2>
            <h4>Friendly staff, tidy rooms and tasty food!</h4>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
