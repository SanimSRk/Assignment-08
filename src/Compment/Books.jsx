import { useEffect, useState } from 'react';
import BookItem from './BookItem';

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/Book.json')
      .then(res => res.json())
      .then(datas => setData(datas));
  }, []);
  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold">Book</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-6 gap-y-8">
        {data.map(book => (
          <BookItem key={book.id} book={book}></BookItem>
        ))}
      </div>
    </div>
  );
};

export default Books;
