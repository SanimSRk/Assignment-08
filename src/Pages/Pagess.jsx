import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { getLockalStroges } from '../ulitly/usLockalStroges';
import { useLoaderData } from 'react-router-dom';

const Pagess = () => {
  const booksData = useLoaderData();
  const [bookDt, setBookdt] = useState([]);
  useEffect(() => {
    const readBk = getLockalStroges();
    if (booksData.length > 0) {
      const bkData = booksData.filter(bok => readBk.includes(bok.bookId));

      setBookdt(bkData);
    }
  }, []);
  console.log(bookDt);
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

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-[85%]  mx-auto bg-[#13131308] lg:py-[90px] lg:px-12">
      <ResponsiveContainer width={'100%'} height={500}>
        <BarChart
          width={1100}
          height={500}
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
            {bookDt?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Pagess;
