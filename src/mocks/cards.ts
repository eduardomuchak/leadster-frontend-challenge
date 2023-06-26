import { AllCategoryNames } from "@/hooks/useCategories/categories";

interface Asset {
  name: string;
  url: string;
}

interface Card {
  id: number;
  thumbnail: string;
  video: string;
  title: string;
  description: string;
  assets: Asset[];
  category: AllCategoryNames;
}

export const cards: Card[] = [
  {
    id: 1,
    thumbnail:
      "https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug",
    video: "https://www.youtube.com/embed/yju8RTdhHQ0",
    title: "Conheça as principais plataformas de Marketing Conversacional",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) apresenta as principais plataformas de Marketing Conversacional do mercado.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 2,
    thumbnail:
      "https://i.ytimg.com/vi/VZoPJxdu20c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEzFTblIWct0Cf-82OHOvkM3NOVw",
    video: "https://www.youtube.com/embed/VZoPJxdu20c",
    title:
      "O Marketing Conversacional funciona em todos os segmentos de negócio?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) responde à pergunta "O Marketing Conversacional funciona em todos os segmentos de negócio?"`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 3,
    thumbnail:
      "https://i.ytimg.com/vi/jmZv8kDH8fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfykRIQ96kv-4ZYYPCxdd6FyIYBQ",
    video: "https://www.youtube.com/embed/jmZv8kDH8fg",
    title:
      "Qual é a diferença entre Marketing Digital, Marketing Conversacional e Marketing no WhatsApp?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) explica a diferença entre Marketing Digital, Marketing Conversacional e Marketing no WhatsApp.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 4,
    thumbnail:
      "https://i.ytimg.com/vi/nPlyLHqDaJw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg3fDlL5cN1C4L5gWlK7grr69WDA",
    video: "https://www.youtube.com/embed/nPlyLHqDaJw",
    title:
      "Por que apostar no Marketing Conversacional? Conheça os benefícios para empresas",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) explica por que apostar no Marketing Conversacional e apresenta os benefícios para empresas.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Agências",
  },
  {
    id: 5,
    thumbnail:
      "https://i.ytimg.com/vi/uMWSbDyz2So/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9lKM4jf8OQx4jB5QvCWOXElSUgw",
    video: "https://www.youtube.com/embed/uMWSbDyz2So",
    title: "Por que o Marketing Conversacional é a grande tendência de 2023?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) revela por que o Marketing Conversacional é a grande tendência de 2023.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 6,
    thumbnail:
      "https://i.ytimg.com/vi/lzuB5jLaLWc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQcmErcWnm13dp-ZOv-a5Zo8DvUw",
    video: "https://www.youtube.com/embed/lzuB5jLaLWc",
    title: "Como usar a inteligência artificial nos negócios?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) fala sobre como usar a inteligência artificial nos negócios.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Mídia Paga",
  },
  {
    id: 7,
    thumbnail:
      "https://i.ytimg.com/vi/UYg36xAU_vU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrihLcqLXR51H9BlK9rFcPpAI5ZA",
    video: "https://www.youtube.com/embed/UYg36xAU_vU",
    title:
      "Como usar a inteligência artificial para criar ações e campanhas de marketing?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) revela como usar a inteligência artificial para criar ações e campanhas de marketing.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Mídia Paga",
  },
  {
    id: 8,
    thumbnail:
      "https://i.ytimg.com/vi/GZyDCW-F69I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcDQvI3d4W7UnlgMU1FV4Z_qtkMQ",
    video: "https://www.youtube.com/embed/GZyDCW-F69I",
    title: "O ChatGPT vai automatizar o trabalho do Copywriter?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) responde à pergunta "O ChatGPT vai automatizar o trabalho do Copywriter?"`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 9,
    thumbnail:
      "https://i.ytimg.com/vi/9RcQumcluZI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU14U8Ah-mJ2hNXZ-sDTSK1_3b0w",
    video: "https://www.youtube.com/embed/9RcQumcluZI",
    title: "Como treinar uma inteligência artificial?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) explica como é a relação do Google com o conteúdo gerado pelo ChatGPT.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 10,
    thumbnail:
      "https://i.ytimg.com/vi/o6qeMW-UUb0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEMOz6MVaHeBPz348chTYf88z6HA",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Inteligência artificial e empregabilidade",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 11,
    thumbnail:
      "https://i.ytimg.com/vi/tdAO27BciFk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBemot6yveBdriPOb8hIlOb2vEr1g",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Ferramentas de inteligência artificial para facilitar o dia a dia",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Agências",
  },
  {
    id: 12,
    thumbnail:
      "https://i.ytimg.com/vi/lSBM2UMibfI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFHNZO3JQG5LovAFWq4f-h61PCKg",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title:
      "Qual é o futuro da busca orgânica com a inteligência artificial e ferramentas como o ChatGPT?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 13,
    thumbnail:
      "https://i.ytimg.com/vi/fybMJv1-ZPI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcSSEQaSu1P4yyWv2d7qh4S96jVA",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Como é a relação do Google com o conteúdo gerado pelo ChatGPT?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Agências",
  },
  {
    id: 14,
    thumbnail:
      "https://i.ytimg.com/vi/BDwtdx_BawA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYtdqcreTD-Q_lzLGM4nRqKKjZHw",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "O que é e como funciona o ChatGPT?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Mídia Paga",
  },
  {
    id: 15,
    thumbnail:
      "https://i.ytimg.com/vi/lqMXcSS6JwM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvfibfLQTHHMvd1jwV1It2q6r_BA",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "ChatGPT e a popularidade da inteligência artificial",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 16,
    thumbnail:
      "https://i.ytimg.com/vi/G_QAY_-P2z8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp9RLVNQSf1L5c8ohtBvug9CxL-g",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "O custo em mídia paga vai subir com a extinção dos cookies?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 17,
    thumbnail:
      "https://i.ytimg.com/vi/cywm2tV1BCQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeZWtE_bqZAFpzaQHJioyGs9_jfQ",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Como saber de onde vêm os leads em um futuro sem cookies?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 18,
    thumbnail:
      "https://i.ytimg.com/vi/vcx76GCSuXA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXvKvINdbXXRMIIwZcsX2xRLqeUQ",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Ferramentas de inteligência artificial para facilitar o dia a dia",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 19,
    thumbnail:
      "https://i.ytimg.com/vi/94RY0tD4chE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEQHJ9gBTPAvTAbDyMMJKX3SuUVQ",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Leadster - Demonstração da plataforma de Marketing Conversacional",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Agências",
  },
  {
    id: 20,
    thumbnail:
      "https://i.ytimg.com/vi/0gma7MHghnM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA77Q2pDgZWUgSSZOzhZZGcVBG-TQ",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title:
      "Por que você perde 60% dos leads usando formulários de contato no site?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Mídia Paga",
  },
  {
    id: 1,
    thumbnail:
      "https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug",
    video: "https://www.youtube.com/embed/yju8RTdhHQ0",
    title: "Conheça as principais plataformas de Marketing Conversacional",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) apresenta as principais plataformas de Marketing Conversacional do mercado.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 2,
    thumbnail:
      "https://i.ytimg.com/vi/VZoPJxdu20c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEzFTblIWct0Cf-82OHOvkM3NOVw",
    video: "https://www.youtube.com/embed/VZoPJxdu20c",
    title:
      "O Marketing Conversacional funciona em todos os segmentos de negócio?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) responde à pergunta "O Marketing Conversacional funciona em todos os segmentos de negócio?"`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 3,
    thumbnail:
      "https://i.ytimg.com/vi/jmZv8kDH8fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfykRIQ96kv-4ZYYPCxdd6FyIYBQ",
    video: "https://www.youtube.com/embed/jmZv8kDH8fg",
    title:
      "Qual é a diferença entre Marketing Digital, Marketing Conversacional e Marketing no WhatsApp?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) explica a diferença entre Marketing Digital, Marketing Conversacional e Marketing no WhatsApp.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 4,
    thumbnail:
      "https://i.ytimg.com/vi/nPlyLHqDaJw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg3fDlL5cN1C4L5gWlK7grr69WDA",
    video: "https://www.youtube.com/embed/nPlyLHqDaJw",
    title:
      "Por que apostar no Marketing Conversacional? Conheça os benefícios para empresas",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) explica por que apostar no Marketing Conversacional e apresenta os benefícios para empresas.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Agências",
  },
  {
    id: 5,
    thumbnail:
      "https://i.ytimg.com/vi/uMWSbDyz2So/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9lKM4jf8OQx4jB5QvCWOXElSUgw",
    video: "https://www.youtube.com/embed/uMWSbDyz2So",
    title: "Por que o Marketing Conversacional é a grande tendência de 2023?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", Fabrício Toledo (CEO da Leadster) revela por que o Marketing Conversacional é a grande tendência de 2023.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Marketing Digital",
  },
  {
    id: 6,
    thumbnail:
      "https://i.ytimg.com/vi/lzuB5jLaLWc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQcmErcWnm13dp-ZOv-a5Zo8DvUw",
    video: "https://www.youtube.com/embed/lzuB5jLaLWc",
    title: "Como usar a inteligência artificial nos negócios?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) fala sobre como usar a inteligência artificial nos negócios.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 7,
    thumbnail:
      "https://i.ytimg.com/vi/UYg36xAU_vU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrihLcqLXR51H9BlK9rFcPpAI5ZA",
    video: "https://www.youtube.com/embed/UYg36xAU_vU",
    title:
      "Como usar a inteligência artificial para criar ações e campanhas de marketing?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) revela como usar a inteligência artificial para criar ações e campanhas de marketing.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Chatbot",
  },
  {
    id: 8,
    thumbnail:
      "https://i.ytimg.com/vi/GZyDCW-F69I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcDQvI3d4W7UnlgMU1FV4Z_qtkMQ",
    video: "https://www.youtube.com/embed/GZyDCW-F69I",
    title: "O ChatGPT vai automatizar o trabalho do Copywriter?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) responde à pergunta "O ChatGPT vai automatizar o trabalho do Copywriter?"`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
  {
    id: 9,
    thumbnail:
      "https://i.ytimg.com/vi/9RcQumcluZI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCU14U8Ah-mJ2hNXZ-sDTSK1_3b0w",
    video: "https://www.youtube.com/embed/9RcQumcluZI",
    title: "Como treinar uma inteligência artificial?",
    description: `Neste corte do webinar "O Futuro do Marketing - 3 Tendências que vão Mudar (Quase) Tudo que sabemos sobre Marketing Digital", John Martin (Consultor de SEO na SEO Martin) explica como é a relação do Google com o conteúdo gerado pelo ChatGPT.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Mídia Paga",
  },
  {
    id: 10,
    thumbnail:
      "https://i.ytimg.com/vi/o6qeMW-UUb0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEMOz6MVaHeBPz348chTYf88z6HA",
    video: "https://www.youtube.com/embed/o6qeMW-UUb0",
    title: "Inteligência artificial e empregabilidade",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet interdum maximus. Cras malesuada tincidunt erat. In vestibulum fermentum nisi eget malesuada. Nullam libero urna, egestas et condimentum vel, accumsan ut odio. Ut iaculis mauris sed urna sodales aliquam. In vitae mollis quam. Suspendisse pulvinar odio a vulputate pellentesque. Integer vitae neque bibendum, condimentum sapien quis, egestas massa. Duis suscipit massa sit amet libero congue, vel consequat purus semper. Aenean ut venenatis felis.`,
    assets: [
      {
        name: "Spreadsheet.xls",
        url: "./download/Spreadsheet.xls",
      },
      {
        name: "Document.doc",
        url: "./download/Document.doc",
      },
      {
        name: "Presentation.ppt",
        url: "./download/Presentation.ppt",
      },
      {
        name: "Folder.zip",
        url: "./download/Folder.zip",
      },
    ],
    category: "Geração de Leads",
  },
];
