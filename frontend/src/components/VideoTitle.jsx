import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { CiCircleInfo } from 'react-icons/ci';

const VideoTitle = ({ title, id, overview }) => {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl fw-800'>{title}</h1>
      <p className='w-1/3 pt-4'>{overview}</p>
      <div className='flex mt-8'>
        <button className='flex px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
          <CiPlay1 size={'22px'} />
          <span className='ml-1'>Play</span>
        </button>
        <button className='flex mx-2 px-6 py-2 bg-gray-500 bg-opacity-60 text-black rounded-md hover:bg-opacity-80 '>
          <CiCircleInfo size={'22px'} />
          <span className='ml-1'>Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
