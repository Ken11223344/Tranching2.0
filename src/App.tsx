import "./App.scss";
import logo from "./assets/bigLogo.svg";
import UpRight from "./assets/arrow-up-right.svg";
import UpRightBlack from "./assets/arrow-up-right-black.svg";
import symbol from "./assets/symbol.png";
import useWidth from "./utils/widthHooks";
import whiteClose from "./assets/whiteClose.svg";
import blackClose from "./assets/blackClose.svg";
import { useEffect, useRef, useState } from "react";
import SelfDrawer from "./components/Drawer";


interface MyRef {
  showDrawer: () => void;
  onClose: () => void;
}
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headHeight, setHeadHeight] = useState(0);
  const { innerWidth } = useWidth();
  const RouterList = ["Home", "Features", "Document", "Roadmap", "Partners"];
  const goTidal = () => {
    window.open("https://tidalchain.com/", "_blank");
  };

  const drawerRef = useRef<MyRef>(null);

  useEffect(() => {
    const header_top = document.querySelector(".header_center") as HTMLElement;
    setHeadHeight(header_top?.offsetHeight);
    if (innerWidth >= 1200) {
      closeMenu();
    }
  }, [innerWidth]);

  const openMenu = () => {
    document.documentElement.dataset.theme = "hiden";
    setIsOpen(true);
    drawerRef.current?.showDrawer();
  };

  const closeMenu = () => {
    document.documentElement.dataset.theme = "no_hiden";
    setIsOpen(false);
    drawerRef.current?.onClose();
  };

  return (
    <div className="home">
      <header>
        <div className="border" />
        <div className="header_center">
          <img src={logo} alt="" />
          {innerWidth >= 1200 ? (
            <div className="nav_box">
              {RouterList.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          ) : !isOpen ? (
            <div className="menu" onClick={openMenu}>Menu</div>
          ) : (
            <div className="self_button" onClick={closeMenu}>
              <span>Close</span>
              <div className="img_box">
                <img src={blackClose} alt="" />
                <img src={whiteClose} alt="" />
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="banner">
        <div className="banner_content">
          <div>Introducing: Aggregated Blockchains</div>
          <div>
            Tranching has evolved into <span>Tidal Chain</span>
          </div>
          <p>
            Harnessing state-of-the-art cross-chain liquidity provisioning
            technology to provide customized liquidity management solutions
            within the Bitcoin Layer 2 network, tailored to ecosystem needs and
            on-chain demand.
          </p>
          <div onClick={goTidal} className="self_button">
            <span>Explore More Tidal Chain!</span>
            <div className="img_box">
              <img src={UpRightBlack} alt="" />
              <img src={UpRight} alt="" />
            </div>
          </div>
        </div>
        <img src={symbol} alt="" />
      </div>
      <SelfDrawer headHeight={headHeight} ref={drawerRef} />
    </div>
  );
};

export default App;
