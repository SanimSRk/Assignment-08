import { Link } from 'react-router-dom';

const ErrorPages = () => {
  return (
    <div>
      <h2>Not found 404</h2>
      <Link to={'/'}>
        <button className="btn ">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPages;
