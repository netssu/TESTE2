import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-2">Petshop PUCRS</h3>
            <p className="text-slate-400">Cuidando do seu melhor amigo com carinho.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <ul className="text-slate-400 space-y-1">
              <li>Email: contato@email.com</li>
              <li>Telefone: (XX) XXXX-XXXX</li>
              <li>Endereço: Rua Fictícia, 123 - Cidade, Estado</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Navegação</h3>
            <ul className="space-y-1">
              <li><a href="#produtos" className="text-slate-400 hover:text-orange-400">Produtos</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-orange-400">Serviços</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-slate-700 text-center text-slate-500 text-sm">
          <p className="mb-1">&copy; 2024 Petshop PUCRS. Todos os direitos reservados.</p>
          <p>Desenvolvido por: [Seu Nome Completo]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;