import React, { useState, useEffect } from 'react';

const PawIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.5-7c-1.93 0-3.5 1.57-3.5 3.5S10.07 15 12 15s3.5-1.57 3.5-3.5S13.93 8 12 8z" transform="scale(0.8) translate(3, 3)" />
    <path d="M4.74,14.04C5.9,12.03,8.03,11,10,11c1.1,0,2.18,0.36,3.06,1.03C11.95,12.2,11,13.25,11,14.5 c0,1.93,1.57,3.5,3.5,3.5c1.25,0,2.3-0.66,2.95-1.63C16.32,18.64,13.88,20,11,20c-3.53,0-6.43-2.61-7.11-6 C3.9,13.97,3.92,13.95,3.92,13.92C3.92,13.92,4.74,14.04,4.74,14.04z" transform="scale(0.9) translate(1, -1) rotate(-15 12 12)" />
  </svg>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const hour = new Date().getHours();
      // Simple logic: Open between 08:00 and 18:00
      setIsOpen(hour >= 8 && hour < 18);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
           <PawIcon className="w-9 h-9 text-orange-500" />
           <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-800 leading-none">
                Petshop PUCRS
            </span>
            <div className="flex items-center space-x-1 mt-1">
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-xs font-semibold ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                    {isOpen ? 'ABERTO AGORA' : 'FECHADO'}
                </span>
            </div>
           </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            <li>
              <a href="#produtos" className="text-slate-600 hover:text-orange-500 transition-colors duration-300 font-medium">
                Produtos
              </a>
            </li>
            <li>
              <a href="#servicos" className="text-slate-600 hover:text-orange-500 transition-colors duration-300 font-medium">
                Serviços
              </a>
            </li>
            <li>
              <a href="#agendamento" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-bold bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Agendamento
              </a>
            </li>
            <li>
              <a href="#contato" className="text-slate-600 hover:text-orange-500 transition-colors duration-300 font-medium">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;