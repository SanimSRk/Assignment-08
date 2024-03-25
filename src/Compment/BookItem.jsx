import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="shadow-sm p-6 rounded-lg ">
        <div className="bg-[#F3F3F3] flex justify-center p-7">
          <img src={image} alt="" />
        </div>
        <div className="mt-6 flex gap-3">
          <button className="btn rounded-3xl font-semibold text-[#23BE0A]">
            {tags[0]}{' '}
          </button>
          <button className="btn rounded-3xl font-semibold text-[#23BE0A]">
            {tags[1]}
          </button>
        </div>
        <div className=" border-b-2 border-dotted pb-4">
          <h2 className="text-2xl font-bold my-4">{bookName}</h2>
          <h2 className="font-medium">By : {author} </h2>
        </div>
        <div className="mt-5 flex justify-between">
          <h2>{category}</h2>
          <div className="flex gap-2">
            <p>{rating} </p>

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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
