import React from 'react';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-700 mb-6 border-l-4 border-teal-500 pl-4">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
