import Iphone from "../assets/i7.gif";

const GIFBanner1 = () => {
  return (
    <div className="relative mb-5">
      <img
        src={Iphone}
        alt="GIF Banner"
        className="w-120% h-60% ml-[19rem]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* <h1 className="text-4xl font-bold text-white">Welcome to Our Store</h1>
        <p className="text-lg text-white mt-4">Discover amazing deals on our products</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Shop Now</button> */}
      </div>
    </div>
  );
};

export default GIFBanner1;