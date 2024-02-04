import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "./redux/api/productApiSlice";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Message from "./components/Message";
import Product from "./pages/Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <div className="bg-black bg-opacity-90 mb-[2rem] rounded-tr-[20rem]">
          <div className="flex justify-between items-center">
            <h1 className="ml-[15rem] mt-[5rem] text-[3rem] text-white">
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-white font-bold rounded-lg py-2 px-10 mr-[15rem] mt-[5rem] text-black hover:bg-tblue hover:text-white"
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
      )}
    </>
  );
};

export default Home;
