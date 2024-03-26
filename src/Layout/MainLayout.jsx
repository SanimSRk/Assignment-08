import { Outlet } from 'react-router-dom';
import Naver from '../Compment/Naver';

const MainLayout = () => {
  return (
    <div>
      <div>
        <Naver></Naver>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
