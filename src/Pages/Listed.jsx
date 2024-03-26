import ReadBooks from '../Compment/ReadBooks';
import WishListBook from '../Compment/WishListBook';

const Listed = () => {
  return (
    <div className="w-[85%] mx-auto mt-12">
      <div className="py-8 bg-[#1313130D] text-center rounded-lg mb-8">
        <h2 className="text-3xl font-bold ">Books</h2>
      </div>
      <div className="text-center">
        <button className="btn text-white bg-[#23BE0A] font-semibold">
          Sort By{' '}
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div role="tablist" className="tabs mt-14 tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-[18px] font-medium"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-t-base-300  p-6"
        >
          <ReadBooks></ReadBooks>
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-[18px] font-medium"
          aria-label="Wishlist Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-t-base-300  p-6"
        >
          <WishListBook></WishListBook>
        </div>
      </div>
    </div>
  );
};

export default Listed;
