export const bio = {
  greeting: 'Olá, sou o Bruno 👋',
  paragraphs: [
    'Sou um profissional apaixonado por tecnologia e inovação, com experiência em supervisão de equipes de TI, desenvolvimento full stack e otimização de processos. Atualmente, lidero operações N1 na Liberty TI Health Tech, onde aprimoro processos de suporte técnico e automação de fluxos de atendimento para elevar a eficiência operacional.',
    '+10 anos de experiência em liderança e gestão (Supervisão de TI e Varejo). Desenvolvimento Full-Stack (React.js, Node.js, SQL, Docker, AWS). Metodologias Ágeis (Scrum, Kanban) e frameworks de governança de TI (ITIL).',
    'Possuo 6 anos de experiência na Força Aérea Brasileira trabalhando em Recursos Humanos e Licitações. Atuei por 4 anos como Supervisor de Vendas em uma das maiores redes varejistas de artigos esportivos do Brasil (Centauro), e por 5 anos como Supervisor Administrativo Regional. Agora estou em transição profissional para a área de tecnologia, uma área onde sempre tive facilidade e paixão.',
    'Além da faculdade de Análise e Desenvolvimento de Sistemas, estudo na Trybe, escola de tecnologia focada no desenvolvimento de carreiras de sucesso, com formação de mais de 1500 horas cobrindo fundamentos de desenvolvimento web, front-end, back-end, ciência da computação, metodologias ágeis e soft skills.',
  ],
};

export interface Skill {
  name: string;
  percentage: number;
}

export const technicalSkills: Skill[] = [
  { name: 'HTML5', percentage: 85 },
  { name: 'CSS3', percentage: 80 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'GitHub', percentage: 45 },
  { name: 'Angular', percentage: 15 },
];

export interface SoftSkill {
  title: string;
  description: string;
}

export const softSkills: SoftSkill[] = [
  {
    title: 'Liderança',
    description: 'Experiência em liderar e desenvolver equipes, com foco em resultados e treinamento.',
  },
  {
    title: 'Comunicação',
    description: 'Comunicação clara com stakeholders e equipes, facilitando alinhamento e execução.',
  },
  {
    title: 'Resolução de Problemas',
    description: 'Abordagem analítica para identificar causas e implementar soluções práticas.',
  },
  {
    title: 'Trabalho em Equipe',
    description: 'Integração em times multidisciplinares, com foco colaborativo e entrega contínua.',
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'Supervisor TI / Supervisor de Operações N1',
    company: 'Liberty Health',
    period: 'agosto de 2024 - Presente',
    description:
      'Atuo como Supervisor de Operações N1 na Liberty TI Health Tech, liderando a equipe de suporte técnico de primeiro nível. Sou responsável por otimizar processos de atendimento, automação de fluxos e melhoria da eficiência operacional em soluções de saúde pública (SGHX).',
    bullets: [
      'Liderança da equipe N1, garantindo SLAs e qualidade no atendimento.',
      'Automação de fluxos e otimização de processos para redução de tempo médio de resolução.',
      'Interface com times de desenvolvimento para priorização de correções e melhorias.',
      'Uso de ferramentas como Jira para gestão de backlog e acompanhamento de entregas.',
    ],
    skills: ['Suporte Técnico', 'Automação', 'Gestão de TI'],
  },
  {
    title: 'Supervisor de Vendas',
    company: 'Centauro',
    period: '2016 - 2020 | 4 anos',
    description:
      'Supervisão de equipe de vendas, gestão de operações em loja, treinamento de pessoal e atendimento ao cliente em grande rede varejista.',
    bullets: [
      'Supervisão direta de equipes de 20+ vendedores e treinamento contínuo.',
      'Alcance consistente de metas de vendas (média de 98% das metas mensais).',
      'Implementação de ações para melhoria do atendimento e aumento da conversão de vendas.',
      'Análise de performance por indicadores e feedback estruturado para equipes.',
    ],
    skills: ['Liderança', 'Vendas', 'Gestão de Equipe'],
  },
  {
    title: 'Supervisor Administrativo Regional',
    company: 'Centauro',
    period: '2020 - 2025 | 5 anos',
    description:
      'Gestão administrativa regional, coordenação de múltiplas unidades, planejamento estratégico e relatórios de desempenho.',
    bullets: [
      'Coordenação de operações em várias unidades com foco em eficiência operacional.',
      'Controle de processos e implementação de melhorias que reduziram retrabalhos operacionais.',
      'Responsável por fechamento e análise de indicadores regionais e apoio na tomada de decisão.',
      'Formação e desenvolvimento de líderes locais para melhorar autonomia das equipes.',
    ],
    skills: ['Gestão Regional', 'Administração', 'Análise de Dados'],
  },
  {
    title: 'Especialista em Recursos Humanos',
    company: 'Força Aérea Brasileira',
    period: '2012 - 2016 | 6 anos',
    description:
      'Gestão de recursos humanos, licitações, recrutamento e seleção de pessoal militar, desenvolvimento de políticas internas e cumprimento de regulamentações federais.',
    bullets: [
      'Recrutamento e seleção com foco em conformidade e perfil técnico-operacional.',
      'Condução e apoio em processos de licitação e contratos administrativos.',
      'Gestão de documentação, protocolos e atendimento a demandas regulatórias.',
      'Desenvolvimento de treinamentos e políticas internas para qualificação de equipes.',
    ],
    skills: ['Recursos Humanos', 'Licitações', 'Administração Pública'],
  },
];

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Paulista (UNIP)',
    date: '2023 - Presente',
    description: 'Curso superior focado em análise, desenvolvimento e gestão de sistemas de informação.',
  },
  {
    title: 'Formação Full Stack Web',
    institution: 'Trybe - Escola de Tecnologia',
    date: '2023 - Presente',
    description:
      'Programa intensivo com mais de 1500 horas cobrindo front-end, back-end, ciência da computação e soft skills.',
  },
  {
    title: 'Formação e Especializações',
    institution: 'Força Aérea Brasileira',
    date: '2012 - 2016',
    description: 'Cursos de formação, liderança e especialização administrativa.',
  },
];

export interface Certification {
  title: string;
  date: string;
  description: string;
  badges?: string[];
}

export const certifications: Certification[] = [
  {
    title: 'Formação em Desenvolvimento Full Stack',
    date: 'Trybe (2023 - 2024)',
    description:
      'Programa Full Stack com foco em front-end, back-end, fundamentos e práticas de mercado (1500+ horas).',
    badges: ['Full Stack', 'React', 'Node.js'],
  },
  {
    title: 'Fundamentals of Web Development',
    date: 'Module',
    description: 'Módulo introdutório com foco em HTML, CSS e JavaScript.',
  },
  {
    title: 'Módulo - Desenvolvimento em Back End',
    date: 'Module',
    description: 'Conteúdo sobre Node.js, APIs, bancos de dados e arquitetura de serviços.',
  },
  {
    title: 'Cloud Fundamentals & Administration',
    date: 'Cloud Fundamentals',
    description: 'Introdução a conceitos de cloud, administração e arquitetura de soluções (AWS/Cloud Fundamentals).',
  },
  {
    title: 'UNIP - Análise e Desenvolvimento de Sistemas',
    date: 'Em Andamento',
    description:
      'Curso superior em Análise e Desenvolvimento de Sistemas. Formação em programação, banco de dados, desenvolvimento de software e gestão de projetos.',
    badges: ['Educação Superior', 'Programação', 'Análise'],
  },
  {
    title: 'JavaScript Avançado',
    date: '2024',
    description:
      'Curso avançado em JavaScript, cobrindo programação orientada a objetos, manipulação do DOM, APIs e JavaScript assíncrono.',
    badges: ['JavaScript', 'OOP', 'Async'],
  },
];

export const contactInfo = {
  email: 'brunodesouzafarias@yahoo.com.br',
  linkedin: 'https://www.linkedin.com/in/bruno-souza-farias/',
  github: 'https://github.com/BrunoSouzaFarias',
  instagram: 'https://www.instagram.com/brusf13/',
  facebook: 'https://web.facebook.com/brunodesouza.farias',
  twitter: 'https://twitter.com/dgkkcs',
};
