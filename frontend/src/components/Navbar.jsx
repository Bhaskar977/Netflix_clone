import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_END_POINT, basePathEndPoint } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router';
import { getToggle } from '../redux/movieSlice';

const Navbar = () => {
  const { user, toggle } = useSelector(
    (store) => ({
      user: store.app.user,
      toggle: store.movie.toggle,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}${basePathEndPoint}/logout`);
      dispatch(setUser(null));
      navigate('/');
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.res.data.message);
    }
  };
  const handleSearch = () => {
    dispatch(getToggle());
  };

  return (
    <div className='absolute z-10 flex w-[100vw] item-center justify-between px-6 bg-gradient-to-t from-black'>
      <img
        width='150px'
        src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png'
        alt=''
      />
      {user && (
        <div className='flex items-center'>
          <IoIosArrowDropdown size={'24'} color='white' />
          <h1 className='text-lg font-medium text-white'>{user?.name}</h1>
          <div className='mx-4'>
            <button
              className='bg-red-800 text-white px-4 py-2'
              onClick={handleLogout}>
              Logout
            </button>
            <button
              onClick={handleSearch}
              className='bg-red-800 text-white px-4 py-2 ml-2'>
              {toggle ? 'Home' : 'Search Movies'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
