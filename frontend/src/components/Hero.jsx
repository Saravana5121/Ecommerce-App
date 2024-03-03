import WomanImg from "../assets/lady-potrait.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="h-[50rem] py-20">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center ml-[10rem]">
          <div className="font-semibold flex items-center">
            <div className="w-10 h-[2px] bg-purple-800 mr-3"></div>SHOP WITH
          </div>
          <h1 className="text-[70px] leading-[1.1] font-semibold mb-4 ">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
              SHOP EASE
            </span>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
              The TrendSetter&apos;s Choice
            </span>
          </h1>
          <Link to={"/shop"} className="self-start uppercase font-semibold">
            discover more
          </Link>
          <div className="w-[20rem] h-[2px] bg-purple-800 mt-3 mr-3 mb-5"></div>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
