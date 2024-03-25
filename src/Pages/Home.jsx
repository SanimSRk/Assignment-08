import Banner from '../Compment/Banner';
import Books from '../Compment/Books';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-[100px] w-[85%] mx-auto">
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
