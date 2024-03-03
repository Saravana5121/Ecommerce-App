import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mt-8 mb-8 lg:block xl:block md:block">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="flex justify-center items-center p-5 ">
          <Slider
            {...settings}
            className="xl:w-[60rem] lg:w-[35rem] md:w-[35rem] sm:w-[30rem] sm:block "
          >
            {products.map(
              ({
                image,
                _id,
                name,
                price,
                description,
                brand,
                createdAt,
                numReviews,
                rating,
                quantity,
                countInStock,
              }) => (
                <div key={_id}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full rounded-xl object-cover h-[40rem]"
                  />

                  <div className="mt-4 p-2 flex justify-between border rounded-lg">
                    <div className="one ml-5">
                      <h1 className="font-bold">{name}</h1>
                      <p> $ {price}</p> <br />
                      <p className="w-[17rem]">
                        {description.substring(0, 170)} ...
                      </p>
                    </div>

                    <div className="flex justify-between w-[25rem]">
                      <div className="one">
                        <h1 className="flex items-center mb-6">
                          <FaStore
                            color="#1D9BF0"
                            className="mr-2 text-white"
                          />{" "}
                          Brand: {brand}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaClock
                            color="#1D9BF0"
                            className="mr-2 text-white"
                          />{" "}
                          Added: {moment(createdAt).fromNow()}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaStar color="#1D9BF0" className="mr-2 text-white" />{" "}
                          Reviews:
                          {numReviews}
                        </h1>
                      </div>

                      <div className="two mr-5">
                        <h1 className="flex items-center mb-6">
                          <FaStar color="#1D9BF0" className="mr-2 text-white" />{" "}
                          Ratings: {Math.round(rating)}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaShoppingCart
                            color="#1D9BF0"
                            className="mr-2 text-white"
                          />{" "}
                          Quantity: {quantity}
                        </h1>
                        <h1 className="flex items-center mb-6">
                          <FaBox color="#1D9BF0" className="mr-2 text-white" />{" "}
                          In Stock: {countInStock}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
