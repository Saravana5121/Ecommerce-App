import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import RegAnimate from "../../components/RegAnimate";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
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

    if(!username || !email || !password || !confirmPassword){
      toast.warning("Kindly fill all the fields");
    }

    if (password != confirmPassword) {
      toast.error("Passwords does not match!!");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered!!");
      } catch (error) {
        console.log(error);
        toast.error(error.data.message);
      }
    }
  };

  return (
    <section className="pl-[15rem] flex flex-wrap">
      <div className="mr-[4rem] mt-[3rem]">
        <h1 className="text-2xl font-semibold mb-4 p-2 text-white rounded pl-[1rem] bg-gradient-to-r from-black to-gold-500">
          Register
        </h1>

        <form
          onSubmit={submitHandler}
          className="container w-[30rem] p-4 border rounded bg-tlgray"
        >
          <div className="my-[2rem]">
            <label
              htmlFor="name"
              className="block text-md font-medium text-balck"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="email"
              className="block text-md font-medium text-balck"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@gmail.com"
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="password"
              className="block text-md font-medium text-balck"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
          <div className="my-[2rem]">
            <label
              htmlFor="confirmPassword"
              className="block text-md font-medium text-balck"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type Password"
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-black text-white px-4 py-2 rounded cursor-pointer my-[1rem] border hover:bg-tblue hover:text-white transition duration-200 font-semibold hover:shadow-2xl"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          {isLoading && <Loader />}
        </form>

        <div className="mt-4">
          <p className="text-black">
            Already have an account?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="text-tblue hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <RegAnimate />
    </section>
  );
};

export default Register;
