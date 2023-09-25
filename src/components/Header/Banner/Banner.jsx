import React from 'react';

const Banner = () => {
    return (
        <div className="h-[70vh] relative bg-white-100">
      <img
        className="h-full w-full object-cover opacity-10"
        src="https://i.ibb.co/9pks8mP/team.png"
        alt=""
      />
      
       
    
      <div className="searchbar absolute bottom-[20%]  lg:bottom-[43%]  lg:w-1/2 md:px-12 lg:ml-80 md:ml-32  ">
      <h1 className=' lg:text-[33px] text-2xl mt-5 font-extrabold  text-black text-center mb-7 '>I Grow By Helping People In Need</h1>
       
        <div className="join ml-20 lg:ml-28 mr-12">
  <input className="input input-bordered join-item" placeholder="Search here...."/>
  <button className="btn join-item rounded-r-full bg-[#FF444A] text-white">Search</button>
</div>
      </div>
    </div>
  );
};

export default Banner;