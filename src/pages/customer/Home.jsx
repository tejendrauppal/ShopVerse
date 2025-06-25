import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12">
      
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">ShopVerse</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover carefully curated products at competitive prices, all with exceptional customer service.
        </p>
        
        <Link to="/products" className="inline-block">
          <Button 
            size="lg"
            className="group flex items-center gap-2 px-8 py-4 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Browse Products</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-4">
        {[
          {
            title: "Premium Selection",
            description: "Handpicked quality products from trusted brands"
          },
          {
            title: "Secure Shopping",
            description: "Your data is protected with industry-standard security"
          },
          {
            title: "Fast Delivery",
            description: "Reliable shipping with real-time tracking"
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;