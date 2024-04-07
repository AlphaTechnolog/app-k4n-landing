import Atropos from 'atropos/react';
import "atropos/atropos.css";
import "./styles/3dWrappper.css";

// import Particles from 'react-tsparticles';
// import paticlesConfig from './configs/particles-config';
const MyImage = () => (
  <div className="container-wrapper">
    {/* <Particles/> */}
    <Atropos
      className="atropos-banner"
      highlight={false}
      onEnter={() => console.log("enter")}
    >
      <img
        className="atropos-banner-spacer"
        src="/app-k4n-landing/assets/images/atropos-bg.svg"
        alt=""
      />
      {/* <img
        data-atropos-offset="-4.5"
        src="/app-k4n-landing/assets/images/atropos-bg.svg"
        alt=""
/> */}
      <img
        data-atropos-offset="-2.5"
        src="/app-k4n-landing/assets/images/atropos-mountains.svg"
        alt=""
      />
      <img
        data-atropos-offset="0"
        src="/app-k4n-landing/assets/images/atropos-forest-back.svg"
        alt=""
      />
      <img
        data-atropos-offset="2"
        src="/app-k4n-landing/assets/images/atropos-forest-mid.svg"
        alt=""
      />
      <img
        data-atropos-offset="4"
        src="/app-k4n-landing/assets/images/atropos-forest-front.svg"
        alt=""
      />
      <img
        data-atropos-offset="5"
        src="/app-k4n-landing/assets/images/K4N_wl.svg"
        alt=""
      />
    </Atropos>
  </div>
);

export default MyImage;
