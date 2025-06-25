import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block relative pt-[70%] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <Link to={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <Button 
            onClick={() => addToCart(product)}
            size="sm"
            className="bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;