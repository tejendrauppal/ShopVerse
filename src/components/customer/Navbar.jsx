import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        
          <Link 
            to="/" 
            className="flex items-center text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ShopVerse
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-gray-500 hover:text-gray-900 px-1 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-500"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-gray-500 hover:text-gray-900 px-1 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-500"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-500 hover:text-gray-900 px-1 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-blue-500"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 relative transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
            
            <button className="hidden md:block ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;