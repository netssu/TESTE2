import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-56 object-cover"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 mb-4 h-20">{product.description}</p>
        <div className="text-2xl font-extrabold text-orange-600">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
