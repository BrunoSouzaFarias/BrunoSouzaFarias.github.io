export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  tech: string[];
  repoUrl: string;
  problem: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: 'project-fallen',
    title: 'Project Fallen',
    thumbnail: '/assets/img/work1.png',
    shortDescription:
      'Jogo interativo desenvolvido em JavaScript puro, com lógica de gameplay, controle de personagens e sistema de pontuação.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/project-fallen',
    problem:
      'Construir um jogo funcional do zero, sem engines ou frameworks, para consolidar fundamentos de lógica de programação, manipulação de estado e DOM em tempo real.',
    solution:
      'Implementação de um game loop em JavaScript puro: controle de personagem via eventos de teclado, sistema de colisão, geração de obstáculos e contagem de pontuação persistida durante a sessão.',
    result:
      'Jogo completo e jogável publicado no GitHub, usado como prova de domínio de lógica de programação e manipulação de DOM sem dependências externas.',
  },
  {
    slug: 'social-tree',
    title: 'Social Tree',
    thumbnail: '/assets/img/work2.jpg',
    shortDescription:
      'Aplicação web para centralizar e compartilhar links de redes sociais, com design responsivo e interface amigável.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/social-tree',
    problem:
      'Muitas pessoas têm presença em várias redes sociais e precisam de uma forma simples de compartilhar todos os links a partir de um único endereço — sem depender de serviços pagos de terceiros.',
    solution:
      'Página estática responsiva, com layout configurável de links, construída para carregar rápido e funcionar bem em qualquer dispositivo, sem necessidade de backend.',
    result:
      'Aplicação leve e totalmente funcional, fácil de personalizar e hospedar gratuitamente como página estática.',
  },
  {
    slug: 'banco-digital-oop',
    title: 'Banco Digital OOP',
    thumbnail: '/assets/img/work3.jpg',
    shortDescription:
      'Aplicação de banco digital usando programação orientada a objetos: contas, transações e operações bancárias.',
    tech: ['JavaScript', 'OOP', 'Node.js'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/lab-banco-digital-oo',
    problem:
      'Modelar um domínio bancário simplificado (contas, saldos, transações) de forma orientada a objetos, aplicando encapsulamento e responsabilidade única entre as classes.',
    solution:
      'Classes para Conta, Cliente e Transação com validações de regras de negócio (saldo insuficiente, limites, histórico de operações), rodando em Node.js.',
    result:
      'Sistema funcional que demonstra aplicação prática de POO e separação de responsabilidades em um domínio com regras de negócio reais.',
  },
];
