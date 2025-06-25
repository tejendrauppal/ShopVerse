const Dashboard = () => {
  const stats = [
    { name: 'Total Products', value: 124, change: '+12%', trend: 'up' },
    { name: 'Total Orders', value: 89, change: '+5%', trend: 'up' },
    { name: 'Revenue', value: '$12,345', change: '+8.2%', trend: 'up' },
    { name: 'Customers', value: 342, change: '-2%', trend: 'down' }
  ];

  const activities = [
    { 
      type: 'product', 
      title: 'New product added', 
      description: 'iPhone 13 Pro', 
      time: '2 minutes ago',
      icon: '📦',
      color: 'blue'
    },
    { 
      type: 'order', 
      title: 'New order received', 
      description: 'Order #1234', 
      time: '15 minutes ago',
      icon: '💰',
      color: 'green'
    },
    { 
      type: 'user', 
      title: 'New customer registered', 
      description: 'John Doe', 
      time: '1 hour ago',
      icon: '👤',
      color: 'purple'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div 
            key={stat.name} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.name}</h3>
            <p className="text-2xl font-bold mt-2 text-gray-900">{stat.value}</p>
            <div className={`inline-flex items-center mt-3 text-sm font-medium px-2.5 py-0.5 rounded-full ${
              stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {stat.trend === 'up' ? (
                <svg className="-ml-0.5 mr-1 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="-ml-0.5 mr-1 h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View all
          </button>
        </div>
        
        <div className="divide-y divide-gray-200">
          {activities.map((activity, index) => (
            <div key={index} className="py-4 flex items-start">
              <div className={`bg-${activity.color}-100 p-2 rounded-lg mr-4`}>
                <span className={`text-${activity.color}-600 text-lg`}>{activity.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            Sales chart placeholder
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            Products chart placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;