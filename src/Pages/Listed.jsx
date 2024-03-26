import ReadBooks from '../Compment/ReadBooks';
import WishListBook from '../Compment/WishListBook';

const Listed = () => {
  return (
    <div className="w-[85%] mx-auto mt-12">
      <div className="py-8 bg-[#1313130D] text-center mb-8">
        <h2 className="text-3xl font-bold ">Books</h2>
      </div>
      <div role="tablist" className="tabs  tabs-lifted">
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
