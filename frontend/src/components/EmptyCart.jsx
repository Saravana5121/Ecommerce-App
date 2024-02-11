import Lottie from "lottie-react";
import Empty from "../assets/Empty.json";

const EmptyCart = () => {
  return (
    <div>
      <Lottie
        animationData={Empty}
        loop={true}
        autoplay={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default EmptyCart;
