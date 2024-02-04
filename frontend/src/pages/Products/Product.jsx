import { Link } from "react-router-dom";
//import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[20rem] h-[17rem] ml-[2rem] border rounded-md mb-6 bg-white p-4 hover:bg-gray-200 hover:bg-opacity-25 hover:backdrop-blur-sm hover:shadow-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="block mx-auto h-[200px]"
        />
        {/* <HeartIcon product={product} /> */}
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center">
            <div className="text-black font-bold">{product.name}</div>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
