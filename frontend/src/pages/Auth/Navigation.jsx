import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import FavoritesCount from "../Products/FavoritesCount";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } sm:flex xl:flex lg:flex  flex-col justify-between p-2 text-white bg-[#000] w-[4%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-2 ">
        <Link to="/" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineHome className="mr-2 mt-[3rem] " size={24} />
            <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
          </div>
        </Link>
        <Link to="/shop" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineShopping className="mr-2 mt-[3rem]" size={24} />
            <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
          </div>
        </Link>
        <Link to="/cart" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={24} />
            <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
          </div>
          <div className="absolute left-4 top-9">
            {cartItems.length > 0 && (
              <div className="px-1 py-0 text-sm text-white bg-pink-600 rounded-full">
                {cartItems.reduce((a,c) => a + c.qty, 0)}
              </div>
            )}
          </div>
        </Link>
        <Link to="/favorite" className="flex relative">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <FaHeart className="mr-2 mt-[3rem]" size={24} />
            <span className="hidden nav-item-name mt-[3rem]">
              FAVOURITE
            </span>{" "}
            <FavoritesCount />
          </div>
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center text-gray-800 focus:outline-none"
        >
          {userInfo ? (
            <span className="text-white p-2">{userInfo.username}</span>
          ) : (
            <></>
          )}

          {userInfo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          )}
        </button>

        {dropdownOpen && userInfo && (
          <ul
            className={`absolute right-0 mt-2 mr-14 space-y-2 bg-black text-white ${
              !userInfo.isAdmin ? "-top-20" : "-top-80"
            } `}
          >
            {userInfo.isAdmin && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/productlist"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/categorylist"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orderlist"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/userlist"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-800">
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={logoutHandler}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Logout
              </Link>
            </li>
          </ul>
        )}

        {!userInfo && (
          <ul>
            <li>
              <Link to="/login" className="flex ">
                <AiOutlineLogin className="mr-2 mt-[3rem]" size={24} />
                <span className="hidden nav-item-name mt-[3rem]">
                  LOGIN
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/register" className="flex ">
                <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={24} />
                <span className="hidden nav-item-name mt-[3rem]">
                  REGISTER
                </span>{" "}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;
