
import Lottie from "lottie-react";
import Register from "../assets/home.json";


const RegAnimate = () => {
  return (
    <div>
      <Lottie
        animationData={Register}
        loop={true}
        autoplay={true}
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};

export default RegAnimate;
