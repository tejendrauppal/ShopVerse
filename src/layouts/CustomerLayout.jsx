import Navbar from '../components/customer/Navbar';
import { Outlet } from 'react-router-dom';

const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;