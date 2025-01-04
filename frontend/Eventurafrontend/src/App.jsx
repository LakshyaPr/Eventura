import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const curtheme = localStorage.getItem("curtheme");
  const [theme, settheme] = useState(curtheme ? curtheme : "light");

  useEffect(() => {
    localStorage.setItem("curtheme", theme);
  }, [theme]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} settheme={settheme} />
      </div>
      <Footer/>
    </>
  );
}

export default App;
