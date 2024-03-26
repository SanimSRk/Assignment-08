import { NavLink } from 'react-router-dom';

const Naver = () => {
  const navsLinks = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive
              ? 'border-[#23BE0A]  border text-[#23BE0A] font-bold'
              : 'font-bold'
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={'/Listed'}
          className={({ isActive }) =>
            isActive
              ? 'border-[#23BE0A]  border text-[#23BE0A] font-bold'
              : 'font-bold'
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to={'/Pages'}
          className={({ isActive }) =>
            isActive
              ? 'border-[#23BE0A]  border text-[#23BE0A] font-bold'
              : 'font-bold'
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-[85%] mx-auto">
      <div className="navbar justify-between bg-base-100">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navsLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-3xl font-bold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[18px] gap-4">
            {navsLinks}
          </ul>
        </div>
        <div className="flex gap-2 lg:gap-4">
          <button className="btn text-white bg-[#23BE0A] lg:font-semibold">
            Sing in{' '}
          </button>
          <button className="btn bg-[#59C6D2] lg:font-semibold text-white">
            Sing up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Naver;
