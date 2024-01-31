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
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[15rem] mt-[5rem] text-[3rem]">
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-black font-bold rounded-lg py-2 px-10 mr-[15rem] mt-[5rem] text-white hover:bg-tblue"
            >
              Shop
            </Link>
            <div className="flex flex-wrap justify-center mt-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
