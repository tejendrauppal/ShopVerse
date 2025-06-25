const OrderItem = ({ order }) => {
  
  const statusColors = {
    'Completed': 'bg-green-100 text-green-800',
    'Processing': 'bg-blue-100 text-blue-800',
    'Shipped': 'bg-purple-100 text-purple-800',
    'Cancelled': 'bg-red-100 text-red-800',
    'Pending': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-5 border-b border-gray-100 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-medium">Placed on:</span> {order.date}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status] || 'bg-gray-100 text-gray-800'}`}>
          {order.status}
        </span>
      </div>
      
      <div className="p-5">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">ITEMS</h4>
        <ul className="space-y-3">
          {order.items.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-gray-100 rounded-md w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-gray-400 text-xs">IMG</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-50 px-5 py-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">Subtotal</span>
          <span className="text-sm font-medium text-gray-900">${order.subtotal?.toFixed(2) || order.total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-500">Shipping</span>
          <span className="text-sm font-medium text-gray-900">${order.shipping?.toFixed(2) || '0.00'}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-500">Tax</span>
          <span className="text-sm font-medium text-gray-900">${order.tax?.toFixed(2) || '0.00'}</span>
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="font-bold text-gray-900">${order.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View Details
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderItem;