import { Link } from 'react-router-dom';

const ErrorPages = () => {
  return (
    <div className="text-center  mt-36">
      <h2 className="text-5xl font-extrabold"> 404</h2>
      <h2 className="text-3xl font-bold">Pages not found </h2>
      <Link to={'/'}>
        <button
          className="btn mt-4
        "
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPages;
