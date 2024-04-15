import "./App.scss";
import logo from "./assets/bigLogo.svg";
import UpRight from "./assets/arrow-up-right.svg";
import UpRightBlack from "./assets/arrow-up-right-black.svg";
import symbol from "./assets/symbol.svg"

const App = () => {
  const RouterList = ["Home", "Features", "Document", "Roadmap", "Partners"];
  const goTidal = () => {
    window.open("https://tidalchain.com/","_blank")
  }

  return (
    <div className="home">
      <header>
        <div className="border" />
        <div className="header_center">
          <img src={logo} alt="" />
          <div className="nav_box">
            {RouterList.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
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
    </div>
  );
};

export default App;