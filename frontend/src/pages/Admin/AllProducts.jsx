import { Link } from "react-router-dom";
import moment from "moment";
import { useAllProductsQuery } from "../../redux/api/productApiSlice";
import AdminMenu from "./AdminMenu";

const AllProducts = () => {
  const { data: products, isLoading, isError } = useAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <div className="ml-[9rem] mt-[2rem]">
        <div className="flex flex-col md:flex-row">
          <div className="p-3">
            <div className="ml-[2rem] text-xl font-bold h-12 mb-4">
              All Products ({products.length})
            </div>
            <div className="flex flex-wrap justify-around items-center">
              {products.map((product) => (
                <Link
                  key={product._id}
                  to={`/admin/product/update/${product._id}`}
                  className="block p-2 mb-4 overflow-hidden rounded-md hover:bg-tlgray"
                >
                  <div className="flex">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[10rem] object-cover"
                    />
                    <div className="p-4 flex flex-col justify-around">
                      <div className="flex justify-between">
                        <h5 className="text-lg font-semibold mb-2">
                          {product?.name}
                        </h5>

                        <p className="text-gray-400 text-xs">
                          {moment(product.createdAt).format("MMMM Do YYYY")}
                        </p>
                      </div>

                      <p className="text-gray-400 xl:w-[30rem] lg:w-[30rem] md:w-[20rem] sm:w-[10rem] text-sm mb-4">
                        {product?.description?.substring(0, 160)}...
                      </p>

                      <div className="flex justify-between">
                        <Link
                          to={`/admin/product/update/${product._id}`}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-sm hover:bg-tblue focus:ring-4 focus:outline-none focus:ring-tblue"
                        >
                          Update Product
                        </Link>
                        <p>₹ {product?.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-1/4 p-3 mt-2">
            <AdminMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
