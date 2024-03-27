import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getLockalStroges } from '../ulitly/usLockalStroges';
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';
const Pagess = () => {
  const booksData = useLoaderData();
  const [bookDt, setBookdt] = useState({});
  useEffect(() => {
    const readBk = getLockalStroges();
    if (booksData.length > 0) {
      const bkData = booksData.filter(bok => readBk.includes(bok.bookId));

      setBookdt(bkData);
    }
  }, []);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  console.log(getPath);

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;
    console.log(props);
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-[85%] mx-auto">
      <BarChart
        width={1100}
        height={550}
        data={bookDt}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey={'totalPages'}
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: 'top' }}
        >
          {/* {bookDt.map((bk, inx) => (
            <Cell key={`cell${inx}`}></Cell>
          ))} */}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Pagess;
