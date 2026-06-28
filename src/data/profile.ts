export const headline =
  'Supervisor de Operações TI · Gestão de Processos Ágeis · ITIL · Full-Stack Developer';

export const bio = {
  greeting: 'Olá, sou o Bruno 👋',
  paragraphs: [
    'Sou um profissional apaixonado por tecnologia e inovação, com experiência em supervisão de equipes de TI, desenvolvimento full stack e otimização de processos. Atualmente, lidero operações N1 na Liberty TI Health Tech, onde aprimoro processos de suporte técnico e automação de fluxos de atendimento para elevar a eficiência operacional.',
    '+10 anos de experiência em liderança e gestão (Supervisão de TI e Varejo). Desenvolvimento Full-Stack (React.js, Node.js, SQL, Docker, AWS). Metodologias Ágeis (Scrum, Kanban) e frameworks de governança de TI (ITIL).',
    'Com um background sólido no varejo e na tecnologia, trago uma visão estratégica que une liderança, gestão operacional e desenvolvimento de soluções inovadoras. Busco sempre aperfeiçoar processos e criar soluções tecnológicas eficientes, combinando expertise técnica e habilidades de gestão para impulsionar resultados e crescimento organizacional.',
    'Atualmente curso Bacharelado em Cibersegurança na Universidade Anhanguera São Paulo, somado à formação Full Stack pela Trybe — mais de 1500 horas cobrindo front-end, back-end, ciência da computação e soft skills.',
  ],
};

export interface StackItem {
  name: string;
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export const stack: StackCategory[] = [
  {
    label: 'Frontend',
    items: [{ name: 'React' }, { name: 'JavaScript' }, { name: 'HTML5' }, { name: 'CSS3' }],
  },
  {
    label: 'Backend',
    items: [{ name: 'Node.js' }, { name: 'SQL' }],
  },
  {
    label: 'Cloud & DevOps',
    items: [{ name: 'AWS' }, { name: 'Docker' }],
  },
  {
    label: 'Gestão & Processos',
    items: [{ name: 'ITIL' }, { name: 'Scrum' }, { name: 'Kanban' }, { name: 'Jira' }],
  },
];

export interface SoftSkill {
  title: string;
  description: string;
}

export const softSkills: SoftSkill[] = [
  {
    title: 'Gestão de TI',
    description: 'Supervisão de equipes e operações de suporte técnico, com foco em SLA e qualidade.',
  },
  {
    title: 'Automação de Processos',
    description: 'Automação de fluxos de atendimento para elevar a eficiência operacional.',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Uso de indicadores e dados para apoiar decisões e priorização de melhorias.',
  },
  {
    title: 'Liderança',
    description: 'Mais de 10 anos liderando e desenvolvendo equipes, com foco em resultados.',
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
    title: 'Supervisor TI | Liberty TI',
    company: 'Liberty Health',
    period: 'agosto de 2024 - Presente · 1 ano 11 meses',
    description:
      'Supervisor de Operações N1 na Liberty TI Health Tech, lidero a equipe de suporte técnico de primeiro nível, garantindo excelência no atendimento e resolução eficiente de chamados. Foco em otimizar processos, fortalecer a comunicação com clientes e impulsionar a performance da equipe no setor de saúde pública, com o sistema SGHX.',
    bullets: [
      'Liderança da equipe de suporte N1, garantindo qualidade e eficiência no atendimento.',
      'Otimização de processos e fortalecimento da comunicação com clientes.',
      'Soluções inovadoras e práticas para o setor de saúde pública (sistema SGHX).',
    ],
    skills: ['Suporte Técnico', 'Gestão de TI', 'Liderança'],
  },
  {
    title: 'Suporte de sistemas de TI',
    company: 'Liberty Health',
    period: 'julho de 2023 - agosto de 2024 · 1 ano 2 meses',
    description:
      'Suporte técnico especializado em software, identificando e solucionando problemas de sistemas de TI, com colaboração ativa em processos de planejamento ágil.',
    bullets: [
      'Implementação e configuração de soluções de software em ambiente corporativo.',
      'Colaboração com equipes de desenvolvimento em reuniões e planejamento ágil.',
      'Gerenciamento de projetos e backlog via Jira; adoção de Scrum e Kanban.',
    ],
    skills: ['Suporte Técnico', 'Jira', 'Scrum', 'Kanban'],
  },
  {
    title: 'Supervisor de vendas',
    company: 'Grupo SBF S/A.',
    period: 'agosto de 2016 - agosto de 2019 · 3 anos 1 mês',
    description:
      'Líder do time de vendas, com negociação de preços e prazos de entrega, estabelecendo metas para o cumprimento dos objetivos da área comercial.',
    bullets: [
      'Liderança do time de vendas e negociação com fornecedores e clientes.',
      'Definição e acompanhamento de metas comerciais.',
    ],
    skills: ['Liderança', 'Vendas', 'Negociação'],
  },
  {
    title: 'Supervisor administrativo Regional',
    company: 'Grupo SBF S/A.',
    period: 'outubro de 2012 - outubro de 2016 · 4 anos 1 mês',
    description: 'Lançamento e atualização no banco de dados via SAP/Datasul de 16 lojas de São Paulo.',
    bullets: ['Gestão administrativa regional de 16 lojas.', 'Atualização e controle de dados via SAP/Datasul.'],
    skills: ['Gestão Regional', 'SAP/Datasul', 'Administração'],
  },
  {
    title: 'Vendedor de varejo',
    company: 'Grupo SBF',
    period: 'março de 2011 - junho de 2011 · 4 meses',
    description: 'Vendas de artigos esportivos em geral.',
    bullets: ['Atendimento e vendas no varejo de artigos esportivos.'],
    skills: ['Vendas', 'Atendimento ao Cliente'],
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
    title: 'Bacharelado em Cibersegurança',
    institution: 'Universidade Anhanguera São Paulo',
    date: 'janeiro de 2023 - julho de 2025',
    description: 'Curso superior com foco em segurança da informação, redes e proteção de sistemas.',
  },
  {
    title: 'Formação Full Stack Web',
    institution: 'Trybe - Escola de Tecnologia',
    date: 'fevereiro de 2023 - fevereiro de 2024',
    description:
      'Programa intensivo com mais de 1500 horas cobrindo front-end, back-end, ciência da computação e soft skills.',
  },
];

export interface Certification {
  title: string;
  date: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: 'Formação em Desenvolvimento Full-Stack',
    date: 'Trybe',
    description: 'Programa Full Stack com foco em front-end, back-end, fundamentos e práticas de mercado.',
  },
  {
    title: 'Front-End Development',
    date: 'Trybe',
    description: 'Módulo com foco em HTML, CSS, JavaScript e construção de interfaces.',
  },
  {
    title: 'Módulo - Desenvolvimento em Back End',
    date: 'Trybe',
    description: 'Conteúdo sobre Node.js, APIs, bancos de dados e arquitetura de serviços.',
  },
  {
    title: 'Module - Fundamentals of Web Development',
    date: 'Trybe',
    description: 'Módulo introdutório com foco em fundamentos de desenvolvimento web.',
  },
  {
    title: 'Cloud Fundamentals, Administration and Solution Architect',
    date: 'Cloud',
    description: 'Conceitos de cloud, administração e arquitetura de soluções.',
  },
];

export const contactInfo = {
  email: 'brunodesouzafarias@yahoo.com.br',
  phone: '11983292388',
  whatsapp: 'https://wa.me/5511983292388',
  linkedin: 'https://www.linkedin.com/in/bruno-souza-farias/',
  github: 'https://github.com/BrunoSouzaFarias',
  instagram: 'https://www.instagram.com/brusf13/',
  facebook: 'https://web.facebook.com/brunodesouza.farias',
  twitter: 'https://twitter.com/dgkkcs',
};
