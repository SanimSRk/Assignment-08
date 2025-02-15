import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getLockalStroges, saveLockalStroges } from '../ulitly/usLockalStroges';
import {
  getWishLockalStroges,
  saveWishLockalStroges,
} from '../ulitly/anthorLockalStroges';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const detailsDat = useLoaderData();
  const [bookItems, setBookItems] = useState([]);

  useEffect(() => {
    const books = detailsDat.find(book => book.bookId === intId);
    setBookItems(books);
  }, []);

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
  } = bookItems;

  const handileClickRead = intId => {
    const lockData = getLockalStroges();

    const dataBoks = lockData.includes(intId);

    if (!dataBoks) {
      saveLockalStroges(intId);
      toast.success('succssfully Read !!');
    } else {
      toast.warning('Already Read added!');
    }
  };

  const handileClickWishLest = () => {
    const wishData = getWishLockalStroges();
    const lockal = getLockalStroges();
    const wishFinal = wishData.includes(intId);
    const lockalFinale = lockal.includes(intId);

    if (lockalFinale) {
      saveWishLockalStroges(intId);
      toast.warn('This book has already read !');
    } else if (!wishFinal) {
      saveWishLockalStroges(intId);
      toast.success('wishlist succssFully add!');
    } else if (wishFinal) {
      saveWishLockalStroges(intId);
      toast.warning('wishlist already added!');
    }
  };
  return (
    <div className="w-[85%] mx-auto lg:flex gap-12 mt-12 ">
      <div className="lg:w-1/2 px-[74px] pt-[74px] bg-[#1313130D] ">
        <img
          className="w-full object-cover object-center "
          src={image}
          alt=""
        />
      </div>
      <div className="lg:w-1/2  ">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="mt-5 mb-4 text-xl font-medium">By : {author}</p>
        <div className="border-y-2 py-4">
          <p>{category}</p>
        </div>
        <p className="mt-6">
          <span className="font-bold">review :</span> {review}
        </p>

        <div className="mt-6 flex gap-3 items-center border-b-2 pb-5">
          <h2 className="font-bold">Tag</h2>
          {tags?.map(tgs => (
            <button
              key={tgs}
              className="btn rounded-3xl font-semibold text-[#23BE0A]"
            >
              {tgs}{' '}
            </button>
          ))}
        </div>
        <div className="mt-6 flex gap-14 ">
          <div>
            <p className="">Number of Pages:</p>
            <p className="my-3">Publisher:</p>
            <p>Year of Publishing:</p>
            <p className="mt-3">Rating:</p>
          </div>

          <div className="font-semibold">
            <p className=""> {totalPages}</p>
            <p className="my-3">{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p className="mt-3">{rating}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <button
            onClick={() => handileClickRead(intId)}
            className="btn font-semibold bg-white "
          >
            Read
          </button>
          <button
            onClick={handileClickWishLest}
            className="btn font-semibold text-white bg-[#50B1C9]"
          >
            Wishlist{' '}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
