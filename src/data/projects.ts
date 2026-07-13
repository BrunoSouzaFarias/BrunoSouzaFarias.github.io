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
    slug: 'feed-track',
    title: 'Feed-track',
    thumbnail: '/assets/img/covers/feed-track.svg',
    shortDescription:
      'Sistema profissional de feedback de colaboradores com IA integrada para apoiar a avaliação. Une gestão de pessoas e desenvolvimento.',
    tech: ['TypeScript', 'IA', 'Full-Stack'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/Feed-track',
    problem:
      'Dar feedback estruturado e recorrente a uma equipe é trabalhoso e subjetivo — falta padronização, histórico e apoio na hora de avaliar de forma justa.',
    solution:
      'Plataforma que centraliza os ciclos de feedback entre líder e colaboradores, com IA integrada para apoiar a avaliação e tornar o processo mais consistente.',
    result:
      'Ferramenta que combina diretamente minha experiência de liderança de equipes com desenvolvimento full-stack e uso prático de IA aplicada à gestão de pessoas.',
  },
  {
    slug: 'pixelcrew',
    title: 'PixelCrew',
    thumbnail: '/assets/img/covers/pixelcrew.svg',
    shortDescription:
      'Escritório virtual retrô em pixel art dentro do VS Code para ver seus agentes de IA (Claude Code, Gemini) trabalhando em tempo real.',
    tech: ['TypeScript', 'VS Code', 'WebSockets'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/PixelCrew',
    problem:
      'Acompanhar vários agentes de IA trabalhando é abstrato: não há uma forma visual e imediata de perceber o que cada um está fazendo em tempo real.',
    solution:
      'Extensão de VS Code que representa cada agente como um personagem pixel art em um escritório virtual, atualizado ao vivo via WebSockets — com suporte a Claude Code, Antigravity/Gemini e fontes customizadas.',
    result:
      'Projeto criativo e tecnicamente robusto que demonstra domínio de extensões de VS Code, comunicação em tempo real e integração com múltiplas ferramentas de IA.',
  },
  {
    slug: 'dashboard-caps',
    title: 'dashboardPy',
    thumbnail: '/assets/img/covers/dashboard-caps.svg',
    shortDescription:
      'Dashboard em Python para acompanhamento dos chamados do CAPS, com visão consolidada de indicadores de atendimento.',
    tech: ['Python', 'Dados', 'Dashboard'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/dashboardPy',
    problem:
      'Sem uma visão consolidada do volume e do status dos chamados do CAPS, fica difícil priorizar e tomar decisões baseadas em dados no dia a dia da operação.',
    solution:
      'Dashboard em Python que agrega e visualiza os indicadores dos chamados, transformando dados brutos em um painel claro de acompanhamento.',
    result:
      'Painel que apoia decisões data-driven na operação de suporte — nascido diretamente da minha rotina de supervisão de TI na saúde.',
  },
  {
    slug: 'login-sghx',
    title: 'login-cadastro',
    thumbnail: '/assets/img/covers/login-sghx.svg',
    shortDescription:
      'Página de cadastro integrada a uma API em Python que gera automaticamente os campos de usuário no sistema hospitalar SGHX.',
    tech: ['JavaScript', 'Python', 'API'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/login-cadastro',
    problem:
      'Criar e provisionar usuários manualmente no sistema hospitalar SGHX é repetitivo, lento e sujeito a erros de digitação.',
    solution:
      'Página de cadastro conectada a uma API em Python que gera automaticamente os campos necessários no SGHX, padronizando o provisionamento de acessos.',
    result:
      'Automação que reduz trabalho manual e erros no cadastro de usuários — impacto real e direto em um ambiente de saúde em produção.',
  },
  {
    slug: 'barbearia-caninde',
    title: 'Barbearia Canindé',
    thumbnail: '/assets/img/covers/barbearia-caninde.svg',
    shortDescription:
      'Site institucional one-page, moderno e responsivo, com galeria lightbox, depoimentos e integração com WhatsApp. HTML, CSS e JS puros.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/Barbearia-Caninde',
    problem:
      'Um negócio local precisa de presença online que converta: carregue rápido, funcione bem no celular e leve o cliente ao contato sem fricção.',
    solution:
      'Site one-page responsivo em HTML/CSS/JS puro (sem frameworks), com galeria em lightbox, depoimentos de clientes, menu hambúrguer mobile e botão direto de WhatsApp.',
    result:
      'Site institucional elegante (paleta dourado e preto), leve e pronto para captar clientes pelo celular — prova de entrega de front-end polido para cliente real.',
  },
  {
    slug: 'store-manager',
    title: 'store-manager',
    thumbnail: '/assets/img/covers/store-manager.svg',
    shortDescription:
      'API de gerenciamento de vendas completamente RESTful, com camadas bem definidas e operações CRUD sobre produtos e pedidos.',
    tech: ['Node.js', 'Express', 'REST API'],
    repoUrl: 'https://github.com/BrunoSouzaFarias/store-manager',
    problem:
      'Gerenciar produtos e vendas exige uma API confiável, bem modelada e aderente às boas práticas REST para servir com segurança diferentes clientes.',
    solution:
      'API RESTful em Node.js com arquitetura em camadas (model/service/controller), validações de entrada e operações CRUD completas sobre produtos e vendas.',
    result:
      'Back-end que demonstra domínio de arquitetura REST, Node.js e modelagem de dados — fundamentos sólidos de desenvolvimento de serviços.',
  },
];
