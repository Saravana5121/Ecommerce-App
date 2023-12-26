
import Lottie from "lottie-react";
import Login from "../assets/LoginLottie.json";


const LoginAnimate = () => {
  return (
    <div>
      <Lottie
        animationData={Login}
        loop={true}
        autoplay={true}
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
};

export default LoginAnimate;
