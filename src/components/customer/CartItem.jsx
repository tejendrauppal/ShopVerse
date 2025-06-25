const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border border-gray-200 bg-white">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-contain p-1"
        />
      </div>

      <div className="ml-4 flex-1 min-w-0">
        <div className="flex justify-between">
          <div className="pr-2">
            <h3 className="text-base font-medium text-gray-900 truncate">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.brand}</p>
          </div>
          <p className="text-base font-semibold text-gray-900 whitespace-nowrap">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center h-8">
            <button
              onClick={() => item.quantity > 1 && onQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className={`px-2.5 h-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                item.quantity <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              −
            </button>
            <span className="px-3 h-full flex items-center justify-center border-t border-b border-gray-300 text-sm font-medium bg-white">
              {item.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(item.quantity + 1)}
              className="px-2.5 h-full border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              +
            </button>
          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="text-sm font-medium text-red-600 hover:text-red-800 flex items-center focus:outline-none"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        </div>

        <div className="mt-1 text-xs text-gray-500">
          ${item.price.toFixed(2)} each
        </div>
      </div>
    </div>
  );
};

export default CartItem;