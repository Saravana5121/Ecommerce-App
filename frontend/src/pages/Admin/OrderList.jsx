import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import AdminMenu from "./AdminMenu";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="w-[85%] mt-[4rem] ml-[4rem]">
        <table className="container mx-auto">
          <AdminMenu />

          <thead className="w-full border bg-tlgray">
            <tr className="mb-[5rem]">
              <th className="text-left pl-1">ITEMS</th>
              <th className="text-left pl-1">ID</th>
              <th className="text-left pl-1">USER</th>
              <th className="text-left pl-1">DATA</th>
              <th className="text-left pl-1">TOTAL</th>
              <th className="text-left pl-1">PAID</th>
              <th className="text-left pl-1">DELIVERED</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <img
                    src={order.orderItems[0].image}
                    alt={order._id}
                    className="w-[5rem] pt-4"
                  />
                </td>
                <td>{order._id}</td>

                <td>{order.user ? order.user.username : "N/A"}</td>

                <td>
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>

                <td>$ {order.totalPrice}</td>

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

                <td>
                  <Link to={`/order/${order._id}`}>
                    <button>More</button>
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

export default OrderList;
