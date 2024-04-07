import "./styles/Card.css";
import "atropos/atropos.css";
import Atropos from "atropos/react";

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
        <img className="atropos-banner-spacer" src="/app-k4n-landing/assets/images/atropos-bg.svg" alt="" />
        <img className="" src="/app-k4n-landing/assets/images/atropos-bg.svg" alt="" data-atropos-offset="-4" />
        <img src="/app-k4n-landing/assets/images/atropos-mountains.svg" alt="" data-atropos-offset="-4" />
        <img src="/app-k4n-landing/assets/images/atropos-forest-back.svg" alt="" data-atropos-offset="-2" />
        <img src="/app-k4n-landing/assets/images/atropos-forest-mid.svg" alt="" data-atropos-offset="0" />
        <img src="/app-k4n-landing/assets/images/atropos-forest-front.svg" alt="" data-atropos-offset="4" />
        <img src="/app-k4n-landing/assets/images/atropos-logo.svg" alt="" data-atropos-offset="5" />
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
