import { useLoaderData } from 'react-router-dom';
import ReadBooks from '../Compment/ReadBooks';
import WishListBook from '../Compment/WishListBook';
import { useEffect, useState } from 'react';
import { getLockalStroges } from '../ulitly/usLockalStroges';
import { getWishLockalStroges } from '../ulitly/anthorLockalStroges';

const Listed = () => {
  const booksAlldata = useLoaderData();

  const [bookDatas, setBookData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [redBooks, setRedBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [displys, setDisply] = useState([]);
  const [wisDisply, setWihDisply] = useState([]);

  useEffect(() => {
    const readDatabooks = getLockalStroges();

    const dataBoks = booksAlldata?.filter(bok =>
      readDatabooks?.includes(bok.bookId)
    );
    setRedBooks(dataBoks);
  }, []);

  useEffect(() => {
    const getWish = getWishLockalStroges();
    const wishBookDat = booksAlldata?.filter(bok =>
      getWish?.includes(bok.bookId)
    );

    setWishBooks(wishBookDat);
  }, []);

  const handileSortBooks = sortDts => {
    if (sortDts === 'rating') {
      const sortrating = redBooks.sort((a, b) => b.rating - a.rating);
      const wishSort = wishBooks.sort((a, b) => b.rating - a.rating);

      setDisply(sortrating);
      setWihDisply(wishSort);
    } else if (sortDts === 'totalPages') {
      const Totlepgs = redBooks.sort((a, b) => b.totalPages - a.totalPages);
      const wishTotle = wishBooks.sort((a, b) => b.totalPages - a.totalPages);
      setDisply(Totlepgs);
      setWihDisply(wishTotle);
    } else if (sortDts === 'yearOfPublishing') {
      const yearOf = redBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      const wishYearof = wishBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );

      setDisply(yearOf);
      setWihDisply(wishYearof);
    }
  };
  // console.log(wisDisply);
  useEffect(() => {
    const readBk = getLockalStroges();
    if (booksAlldata.length > 0) {
      const bkData = booksAlldata?.filter(bok => readBk?.includes(bok.bookId));

      setBookData(bkData);
      setDisply(bkData);
    }
  }, []);

  useEffect(() => {
    const wisBk = getWishLockalStroges();

    if (booksAlldata.length > 0) {
      const wiDat = booksAlldata.filter(wish => wisBk.includes(wish.bookId));
      setWishData(wiDat);
      setWihDisply(wiDat);
    }
  }, []);

  return (
    <div className="w-[85%] mx-auto mt-12">
      <div className="py-8 bg-[#1313130D] text-center rounded-lg mb-8">
        <h2 className="text-3xl font-bold ">Books</h2>
      </div>
      <div className="text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" m-1">
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
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button onClick={() => handileSortBooks('rating')}>
              <li>
                <a>Item 1</a>
              </li>{' '}
            </button>
            <button onClick={() => handileSortBooks('totalPages')}>
              <li>
                <a>Item 2</a>
              </li>{' '}
            </button>
            <button onClick={() => handileSortBooks('yearOfPublishing')}>
              <li>
                <a>Item 3</a>
              </li>{' '}
            </button>
          </ul>
        </div>
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
          <div>
            {displys.map(bks => (
              <ReadBooks key={bks.bookId} bks={bks}></ReadBooks>
            ))}
          </div>
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
          <div>
            {wisDisply.map(wis => (
              <WishListBook key={wis.bookId} wis={wis}></WishListBook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listed;
