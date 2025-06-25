import { useParams } from 'react-router-dom';
import { mockProducts } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import Button from '../../components/common/Button';
import { ArrowLeft, ShoppingCart, Star, ChevronRight, Heart, Share2 } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Product not found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button as="a" href="/products" className="inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <a href="/products" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                Products
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {product.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto rounded-lg object-contain max-h-[500px] mx-auto"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className="bg-white rounded-lg border border-gray-200 p-2 hover:border-blue-400 transition-colors"
              >
                <img
                  src={product.thumbnail}
                  alt={`${product.title} thumbnail ${i}`}
                  className="w-full h-20 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="sticky top-24">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{product.title}</h1>
                <p className="text-gray-600 mb-4">By {product.brand}</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors p-2">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <div className="flex items-center mt-1">
                  <span className="text-sm line-through text-gray-500 mr-2">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {product.discountPercentage}% OFF
                  </span>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm font-medium">
                  {product.stock > 0 ? `${product.stock} available in stock` : 'Out of stock'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => addToCart(product)}
                className="flex-1 py-3 flex items-center justify-center gap-2"
                disabled={product.stock <= 0}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="flex-1 py-3 flex items-center justify-center gap-2"
              >
                <Share2 size={20} />
                Share
              </Button>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Category</h4>
                  <p className="text-gray-900">{product.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">SKU</h4>
                  <p className="text-gray-900">SKU-{product.id.toString().padStart(4, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;