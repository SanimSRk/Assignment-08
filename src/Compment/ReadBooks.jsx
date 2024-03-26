const ReadBooks = ({ bks }) => {
  console.log(bks);
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
  } = bks;
  return (
    <div className="shadow-md p-6 mb-6 lg:flex gap-6">
      <div className="bg-[#1313130D] px-12 py-7 ">
        <img src={image} alt="" />
      </div>
      <div>
        <div className="  pb-4">
          <h2 className="text-2xl font-bold my-4">{bookName}</h2>
          <h2 className="font-medium">By : {author} </h2>
        </div>
        <div className="mt-6 flex gap-3 items-center  pb-5">
          <h2 className="font-bold">Tag</h2>
          {tags?.map(tgs => (
            <button
              key={tgs}
              className="btn rounded-3xl font-semibold text-[#23BE0A]"
            >
              {tgs}{' '}
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
      </div>
    </div>
  );
};

export default ReadBooks;
