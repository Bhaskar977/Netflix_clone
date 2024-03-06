import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router";

const Navbar = () => {
  const user = useSelector((store) => store?.app?.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      dispatch(setUser(null))
      navigate("/")
      if(res.data.success){
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.res.data.message)
    }
  };
  return (
    <div className="absolute z-10 flex w-[100vw] item-center justify-between px-6 bg-gradient-to-t from-black">
      <img
        width="150px"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt=""
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size={"24"} color="white" />
          <h1 className="text-lg font-medium text-white">{user?.name}</h1>
          <div className="mx-4">
            <button
              className="bg-red-800 text-white px-4 py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
