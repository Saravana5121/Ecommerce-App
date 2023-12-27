import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import LoginAnimate from "../../components/LoginAnimate";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if( !email || !password){
      toast.warning("Kindly fill all the fields!");
    }

    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      toast.success("Logged in successfully!!");
      dispatch(setCredentials({ ...res }));
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div>
      <section className="pl-[15rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[3rem]">
          <h1 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-r from-black to-gold-500 text-white rounded pl-[1rem]">
            Sign In
          </h1>
          <form
            onSubmit={submitHandler}
            className="container w-[30rem] p-4 border rounded "
          >
            <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-md font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="my-[2rem]">
              <label
                htmlFor="password"
                className="block text-md font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="bg-black text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
            {isLoading && <Loader />}
          </form>
          <div className="mt-4">
            <p className="text-black">
              New Customer ?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
                className="text-black-500 hover:underline font-semibold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <LoginAnimate />
      </section>
    </div>
  );
};

export default Login;
