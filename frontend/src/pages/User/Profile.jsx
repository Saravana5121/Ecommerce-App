import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { useProfileMutation } from "../../redux/api/usersApiSlice";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error("Password does not match!!");
    } else {
      try {
        const res = updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile Updated Successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-14 ml-[2rem]">
      <div className="flex justify-center align-center md:flex md:space-x-4">
        <div className="md:w-1/3">
          <h1 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-r from-black to-gold-500 text-white rounded">
            Update Profile
          </h1>
          <form
            onSubmit={submitHandler}
            className="w-[28rem] p-4 border rounded"
          >
            <div className="mb-4">
              <label className="block text-md font-medium text-black">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input mt-1 p-2 border rounded-sm w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-input mt-1 p-2 border rounded-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-black">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-input mt-1 p-2 border rounded-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-black">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input mt-1 p-2 border rounded-sm w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Update
              </button>
              <Link
                to="/user-orders"
                className="bg-black text-white py-2 px-4 rounded hover:bg-red-600"
              >
                My Orders
              </Link>
            </div>
          </form>
          {loadingUpdateProfile && <Loader />}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
