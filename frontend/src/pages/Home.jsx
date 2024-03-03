import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Message from "../components/Message";
import Product from "./Products/Product";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
// import SideBar from "../components/SideBar";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      <Banner />
      <Hero />
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="bg-gradient-to-l from-gray-500 to-gray-800 bg-opacity-90 mb-[2rem] rounded-tr-[20rem]">
            <div className="flex justify-between items-center">
              <h1 className="ml-[15rem] mt-[5rem] text-[3rem] hover:text-white bg-gradient-to-r from-blue-500 to-silver text-transparent bg-clip-text">
                Special Products
              </h1>
              <Link
                to="/shop"
                className=" font-bold rounded-lg py-2 px-10 mr-[15rem] mt-[5rem]  text-black bg-gradient-to-t from-blue-500 to-silver transition duration-300 ease-in-out "
              >
                Shop
              </Link>
            </div>
            <div>
              <div className="flex flex-wrap ml-[8rem] mr-[6rem] mt-[2rem]">
                {data.products.map((product) => (
                  <div key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
