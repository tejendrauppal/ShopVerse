import Sidebar from '../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;