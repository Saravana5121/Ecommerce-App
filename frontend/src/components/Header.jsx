import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <section className="mt-[1rem] bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              OUR
              <span className="sm:block">
                {" "}
                TOP PRODUCTS!
              </span>
            </h1>
          </div>
          <div className="w-full mt-7">
            <div className="flex">
              {data.map((product) => (
                <div key={product._id} className="flex-1">
                  <SmallProduct product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
