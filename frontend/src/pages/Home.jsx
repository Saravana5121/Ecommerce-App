import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Message from "../components/Message";
import Product from "./Products/Product";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductCarousel from "../pages/Products/ProductCarousel";

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
          <ProductCarousel />
          <div className="bg-gray-800 mb-[2rem] rounded-tr-[20rem] p-5">
            <div className="flex flex-col justify-center items-center p-5">
              <div>
                <h1 className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                  Special Products
                </h1>
              </div>
              
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
