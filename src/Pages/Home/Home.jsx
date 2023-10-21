import { useState } from "react";
import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Logo from "./Logo/Logo";
import "../Home/style/style.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className="mt-20">
        <div className={darkMode ? "dark-mode" : "light-mode"} >
          <div className="flex justify-start">
          <div className="container">
            <span style={{ color: darkMode ? "grey" : "yellow" }} className="text-xl">☀︎</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input 
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"> </span>
              </label>
            </div>
            <span style={{ color: darkMode ? "#c96dfd" : "grey" }} className="text-xl">☽</span>
          </div>
          </div>
          <Banner></Banner>
          <Logo></Logo>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
