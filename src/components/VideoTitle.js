import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-1  md:py-4 px-2 md:px-12 text-lg md:text-xl  rounded-lg hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
