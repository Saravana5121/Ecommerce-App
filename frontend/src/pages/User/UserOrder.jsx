import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../redux/api/orderApiSlice";

const UserOrder = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  return (
    <>
      <h2 className="text-3xl font-semibold mb-5 mt-[2rem] ml-[8rem]">My Orders</h2>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.error || error.error}</Message>
      ) : (
        <div className="w-[85%] ml-[8rem] mt-[3rem]">
          <table className="container mx-auto">
            <thead className="bg-tlgray">
              <tr className="mb-[5rem]">
                <th className="text-left pl-1 font-semibold">IMAGE</th>
                <th className="text-left pl-1 font-semibold">ID</th>
                <th className="text-left pl-1 font-semibold">DATE</th>
                <th className="text-left pl-1 font-semibold">TOTAL</th>
                <th className="text-left pl-1 font-semibold">PAID</th>
                <th className="text-left pl-1 font-semibold">DELIVERED</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <img
                    src={order.orderItems[0].image}
                    alt={order.user}
                    className="w-[6rem] pt-4"
                  />

                  <td className="py-2">{order._id}</td>
                  <td className="py-2">{order.createdAt.substring(0, 10)}</td>
                  <td className="py-2">$ {order.totalPrice}</td>

                  <td className="py-2">
                    {order.isPaid ? (
                      <p className="p-1 text-center text-white bg-green-600 w-[6rem] rounded-full">
                        Completed
                      </p>
                    ) : (
                      <p className="p-1 text-center text-white bg-red-600 w-[6rem] rounded-full">
                        Pending
                      </p>
                    )}
                  </td>

                  <td className="px-2 py-2">
                    {order.isDelivered ? (
                      <p className="p-1 text-center text-white bg-green-600 w-[6rem] rounded-full">
                        Completed
                      </p>
                    ) : (
                      <p className="p-1 text-center text-white bg-red-600 w-[6rem] rounded-full">
                        Pending
                      </p>
                    )}
                  </td>

                  <td className="px-2 py-2">
                    <Link to={`/order/${order._id}`}>
                      <button className="text-white bg-tblue text-back py-2 px-3 rounded">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserOrder;
