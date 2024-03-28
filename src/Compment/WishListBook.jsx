const WishListBook = ({ wis }) => {
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = wis;
  return (
    <div className="shadow-md p-6 mb-6 lg:flex grid gap-6 rounded-lg">
      <div className="bg-[#1313130D] lg:py-0 py-4 overflow-hidden px-12 flex justify-center items-center rounded-lg">
        <img className="object-cover  object-center" src={image} alt="" />
      </div>
      <div>
        <div className="  ">
          <h2 className="text-2xl font-bold my-4">{bookName}</h2>
          <h2 className="font-medium">By : {author} </h2>
        </div>
        <div className="mt-3 lg:mt-6 grid lg:flex gap-3 items-center   pb-5">
          <h2 className="font-bold text-center">Tag</h2>
          {tags?.map(tgs => (
            <button
              key={tgs}
              className="btn rounded-3xl font-semibold text-[#23BE0A]"
            >
              #{tgs}{' '}
            </button>
          ))}
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <h2> Year of Publishing: {yearOfPublishing}</h2>
          </div>
        </div>
        <div className=" lg:flex gap-3 grid lg:gap-5  border-b-2 pb-5 ">
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <h2>publisher: {publisher}</h2>
          </div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <h2>Page: {totalPages}</h2>
          </div>
        </div>
        <div className="grid lg:flex gap-3 mt-4">
          <button className="btn rounded-3xl  text-[#328EFF] bg-[#328EFF26] ">
            category: {category}
          </button>
          <button className="btn rounded-3xl bg-[#FFAC3326] text-[#FFAC33]">
            rating: {rating}{' '}
          </button>
          <button className="btn rounded-3xl bg-[#23BE0A] text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListBook;
