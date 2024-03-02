import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[20rem] h-[17rem] ml-[2rem] border rounded-md mb-6 bg-white p-4 hover:bg-opacity-25 hover:backdrop-blur-sm hover:shadow-lg transition duration-300 ease-in-out shadow-inner shadow-silver">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="block mx-auto h-[200px]"
        />
        <HeartIcon product={product} />
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="p-4">
          <h2 className="flex justify-between items-center">
            <div className="text-black">{product.name}</div>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              ${product.price}
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
