import React, { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1450778865369-3d44a1e9818c?q=80&w=1920&auto=format&fit=crop',
    title: 'Bem-vindo ao Petshop PUCRS',
    subtitle: 'O melhor cuidado para o seu melhor amigo'
  },
  {
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1920&auto=format&fit=crop',
    title: 'Serviços Especializados',
    subtitle: 'Banho, Tosa e Tratamentos Vips'
  },
  {
    url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1920&auto=format&fit=crop',
    title: 'Produtos de Qualidade',
    subtitle: 'Rações, Brinquedos e Acessórios'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden group">
      <div
        className="w-full h-full bg-center bg-cover duration-700 ease-in-out transition-all relative"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        role="img"
        aria-label={`Slide ${currentIndex + 1}: ${slides[currentIndex].title}`}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
           <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg tracking-wide animate-fade-in-up">
             {slides[currentIndex].title}
           </h2>
           <p className="text-lg md:text-2xl drop-shadow-md font-medium animate-fade-in-up delay-100">
             {slides[currentIndex].subtitle}
           </p>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-orange-500 scale-125' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;