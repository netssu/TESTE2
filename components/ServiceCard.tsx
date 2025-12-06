import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{service.name}</h3>
        <p className="text-slate-600 mb-4">{service.description}</p>
        {service.hasPickup && (
          <div className="mb-4 inline-flex items-center bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Inclui Tele-busca
          </div>
        )}
      </div>
      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <div className="text-2xl font-extrabold text-teal-600">
          R$ {service.price.toFixed(2).replace('.', ',')}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
