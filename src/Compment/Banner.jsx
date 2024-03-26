import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="mt-12 text-center lg:text-left lg:flex justify-center items-center rounded-lg lg:h-[554px] bg-[#1313130D] w-[85%] mx-auto">
      <div className=" lg:w-1/2  ">
        <h2 className="lg:text-[56px] text-[30px] font-bold ">
          Books to freshen up your bookshelf
        </h2>

        <Link to={'/Listed'}>
          <button className="btn mt-12 bg-[#23BE0A] text-xl font-bold text-white">
            View The List
          </button>
        </Link>
      </div>
      <div className="">
        <img src="/pngwing.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
