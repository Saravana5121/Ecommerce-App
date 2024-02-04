import { Link } from "react-router-dom";
//import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-[17rem] h-[17rem] ml-[2rem] p-2 border rounded-md">
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
            <div>{product.name}</div>
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
