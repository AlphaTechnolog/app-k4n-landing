import "./styles/Card.css";
import "atropos/atropos.css";
import Atropos from "atropos/react";
import bg from "./assets/images/atropos-bg.svg";
import forestBack from "./assets/images/atropos-forest-back.svg";
import forestFront from "./assets/images/atropos-forest-front.svg";
import forestMid from "./assets/images/atropos-forest-mid.svg";
import logo from "./assets/images/atropos-logo-en.svg";
import mountains from "./assets/images/atropos-mountains.svg";

export default function Card() {
  return (
    <div className="container">
      <Atropos
        className="my-atropos atropos-banner"
        activeOffset={40}
        shadowScale={1.05}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
      >
        <img className="atropos-banner-spacer" src={bg} alt="" />
        <img className="" src={bg} alt="" data-atropos-offset="-4" />
        <img src={mountains} alt="" data-atropos-offset="-4" />
        <img src={forestBack} alt="" data-atropos-offset="-2" />
        <img src={forestMid} alt="" data-atropos-offset="0" />
        <img src={forestFront} alt="" data-atropos-offset="4" />
        <img src={logo} alt="" data-atropos-offset="5" />
        <div className="atropos-cta" data-atropos-offset="6">
          <button
            onClick={(е) => {
              е.preventDefault();
            }}
          >
            Get started
          </button>
          {/* <a href="/">Get started</a> */}
        </div>
      </Atropos>
    </div>
  );
}
