import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const TRANSLATIONS = {
  en: {
    heroContent: `I am a full-stack developer, passionate about creating dynamic and efficient web applications. With a solid foundation in JavaScript, React, Node.js, and MySQL, I am eager to apply my skills to real projects. I seek opportunities to contribute with solutions that provide business growth and exceptional user experiences.`,
    aboutText: `Dedicated and versatile, with a passion for creating efficient, intuitive, and secure web applications. I work with technologies like React, Node.js, MySQL, and JavaScript, always seeking to learn and face new challenges. My journey in web development began with a deep curiosity about how things work and evolved into a commitment to deliver solutions. I value teamwork and solving complex problems. Outside the programming universe, I enjoy exploring new technologies, staying active, and expanding my knowledge through personal projects.`,
    projectsTitle: "Projects",
    technologiesTitle: "Technologies",
    aboutTitle: "About Me",
    aboutTitleHighlight: "About",
    contactTitle: "Get in touch:",
    fullStackDev: "Full-Stack Developer",
    projects: [
      {
        link: "https://srraven.github.io/jogodamemoria/",
        title: "Memory Game",
        image: project1,
        description:
          "A simple memory game where players match pairs of identical cards. Developed with a focus on logic and interactivity.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/SrRaven/react-portfolio",
        title: "Portfolio Website",
        image: project3,
        description:
          "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
      },
      {
        link: "https://sgtviagens.com.br/",
        title: "Global Viagens",
        image: project5,
        description:
          "Travel agency website developed for Global Viagens, offering a modern and intuitive experience for users.",
        technologies: ["React", "Tailwind CSS"],
      },
    ],
  },
  pt: {
    heroContent: `Sou um desenvolvedor full-stack, apaixonado por criar aplicações web dinâmicas e eficientes. Com uma base sólida em JavaScript, React, Node.js e MySQL, estou ansioso para aplicar minhas habilidades em projetos reais. Busco oportunidades para contribuir com soluções que proporcionem crescimento aos negócios e experiências excepcionais aos usuários.`,
    aboutText: `Dedicado e versátil, com paixão por criar aplicações web eficientes, intuitivas e seguras. Trabalho com tecnologias como React, Node.js, MySQL e JavaScript, sempre buscando aprender e enfrentar novos desafios. Minha jornada no desenvolvimento web começou com uma curiosidade profunda sobre como as coisas funcionam e evoluiu para um compromisso em entregar soluções. Valorizo o trabalho em equipe e a resolução de problemas complexos. Fora do universo da programação, gosto de explorar novas tecnologias, me manter ativo e expandir meus conhecimentos em projetos pessoais.`,
    projectsTitle: "Projetos",
    technologiesTitle: "Tecnologias",
    aboutTitle: "Sobre Mim",
    aboutTitleHighlight: "Sobre",
    contactTitle: "Entre em contato:",
    fullStackDev: "Desenvolvedor Full-Stack",
    projects: [
      {
        link: "https://srraven.github.io/jogodamemoria/",
        title: "Jogo da Memória",
        image: project1,
        description:
          "Um jogo simples de memória, onde os jogadores combinam pares de cartas idênticas. Desenvolvido com foco em lógica e interatividade.",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/SrRaven/react-portfolio",
        title: "Portfolio Website",
        image: project3,
        description:
          "Um site de portfólio pessoal apresentando projetos, habilidades e informações de contato.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
      },
      {
        link: "https://sgtviagens.com.br/",
        title: "Global Viagens",
        image: project5,
        description:
          "Site de agência de viagens desenvolvido para a Global Viagens, oferecendo uma experiência moderna e intuitiva para os usuários.",
        technologies: ["React", "Tailwind CSS"],
      },
    ],
  },
};

export const CONTACT = {
  address: "Brasil, Bahia, Salvador ",
  phoneNo: "(71) 99672 8402 ",
  email: "douglasgalvao285@gmail.com ",
};

export const HERO_CONTENT = TRANSLATIONS.en.heroContent;
export const ABOUT_TEXT = TRANSLATIONS.en.aboutText;
