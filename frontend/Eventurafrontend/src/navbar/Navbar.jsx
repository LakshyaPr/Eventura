import "./Navbar.css";

export default function Navbar({ theme, settheme }) {
  const toggle_mode = () => {
    theme == "light" ? settheme("dark") : settheme("light");
  };

  return (
    <div className="navbar">
      <img
        src={
          theme == "light"
            ? "src/assets/logolight.png"
            : "src/assets/logodark.png"
        }
        alt=""
        className="logo"
        height={70}
      />
      <ul>
        <li>Home</li>
        <li>dummy1</li>
        <li>dummy2</li>
        <li>dummy3</li>
      </ul>
      <div className="searchbox">
        <input type="text" placeholder="Search" />
        <img
          src={
            theme == "light"
              ? "src/assets/search-w.png"
              : "src/assets/search-b.png"
          }
          alt=""
        />
      </div>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "light" ? "src/assets/night.png" : "src/assets/day.png"}
        alt=""
        className="toggleicon"
      />
    </div>
  );
}
