import { Product, Service } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Cama Nuvem Conforto',
    description: 'Proporcione o máximo de conforto para seu pet com esta cama ultra macia e aconchegante. Perfeita para um sono tranquilo.',
    price: 189.90,
    imageUrl: 'https://picsum.photos/seed/petbed/400/300',
    category: 'Acessórios',
  },
  {
    id: 2,
    name: 'Arranhador Torre de Sisal',
    description: 'Estimule o instinto natural do seu gato e proteja seus móveis com esta torre de sisal resistente e divertida.',
    price: 129.90,
    imageUrl: 'https://picsum.photos/seed/catscratcher/400/300',
    category: 'Acessórios',
  },
  {
    id: 3,
    name: 'Ração Premium Cães Adultos',
    description: 'Alimento completo e balanceado com proteínas de alta qualidade para a saúde e vitalidade do seu cão adulto.',
    price: 159.99,
    imageUrl: 'https://picsum.photos/seed/dogfood/400/300',
    category: 'Rações',
  },
  {
    id: 4,
    name: 'Ração Super Premium Gatos Filhotes',
    description: 'Nutrição superior para um crescimento saudável, com ingredientes selecionados para o seu gatinho.',
    price: 89.50,
    imageUrl: 'https://picsum.photos/seed/catfood/400/300',
    category: 'Rações',
  },
  {
    id: 5,
    name: 'Tapete Higiênico Carvão Ativado',
    description: 'Máxima absorção e controle de odores com a tecnologia do carvão ativado, mantendo sua casa limpa.',
    price: 75.00,
    imageUrl: 'https://picsum.photos/seed/petpad/400/300',
    category: 'Higiene e Limpeza',
  },
  {
    id: 6,
    name: 'Shampoo Hipoalergênico Pelos Claros',
    description: 'Fórmula suave e segura para pets com pele sensível, realçando a cor natural dos pelos claros.',
    price: 45.90,
    imageUrl: 'https://picsum.photos/seed/petshampoo/400/300',
    category: 'Higiene e Limpeza',
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: 'Banho Relaxante & Tosa Higiênica',
    description: 'Um tratamento completo que inclui banho com produtos especiais, hidratação e os cuidados essenciais de higiene.',
    price: 95.00,
    hasPickup: false,
  },
  {
    id: 2,
    name: 'Pacote VIP (Banho, Tosa e Tele-busca)',
    description: 'A experiência completa com a conveniência de buscarmos e levarmos seu pet em casa com total segurança e conforto.',
    price: 125.00,
    hasPickup: true,
  },
];