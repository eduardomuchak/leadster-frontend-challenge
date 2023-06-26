
## Sobre o Projeto:

O projeto de avaliação técnica para a vaga de desenvolvedor front-end consistiu na criação de uma landing page para a empresa Leadster (https://leadster.com.br), com o objetivo de demonstrar habilidades de desenvolvimento front-end, bem como a capacidade de criar uma experiência de usuário aprimorada e seguir as melhores práticas de desenvolvimento.
## Principais Tecnologias Utilizadas:

O projeto foi desenvolvido utilizando Next.js, um framework popular e poderoso para desenvolvimento web em React.
O layout foi estilizado com o auxílio do Tailwind CSS e RadixUI, que são ferramentas de utilitários CSS que facilitam a criação de interfaces modernas e acessíveis.
A marcação HTML foi implementada de forma semântica, garantindo uma estrutura clara e acessível para a página.

Links:

- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
## Features

### Renderização de Cards com Paginação e Filtragem:

A landing page exibe uma série de cards que representam diferentes conteúdos relacionados à empresa Leadster.
Os cards são renderizados de forma dinâmica, permitindo a paginação por meio de guias (tabs) para facilitar a navegação entre diferentes categorias.
Além disso, os cards podem ser filtrados com base em categorias específicas, fornecendo uma experiência personalizada ao usuário.

### Testes E2E e Usabilidade:

A aplicação inclui testes End-to-End (E2E) para simular a usabilidade do usuário ao visualizar os cards e utilizar as funcionalidades de filtragem.
Os testes E2E garantem que todas as interações estejam funcionando corretamente, oferecendo uma experiência confiável e intuitiva ao usuário.

### Layout Responsivo e Acessibilidade:

A landing page foi desenvolvida com um layout responsivo, adaptando-se de forma elegante a diferentes dispositivos e tamanhos de tela.
Foram aplicadas boas práticas de acessibilidade, seguindo as diretrizes do WCAG (Web Content Accessibility Guidelines), a fim de garantir que pessoas com deficiências possam acessar e utilizar a página sem dificuldades.

### Boas Práticas de SEO e Código:

A aplicação segue boas práticas de SEO (Search Engine Optimization), fornecendo uma estrutura otimizada para mecanismos de busca e melhorando a visibilidade nos resultados de pesquisa.
O código foi desenvolvido seguindo as melhores práticas, como modularidade, legibilidade e manutenibilidade, demonstrando habilidades sólidas de desenvolvimento front-end.

### Visualização de Modais com Informações Detalhadas:

Ao clicar em um card, a landing page exibe um modal com informações detalhadas sobre o conteúdo, incluindo um vídeo relacionado ao tema e arquivos para download.
Essa funcionalidade proporciona uma experiência interativa e enriquecedora ao usuário, permitindo que ele aprofunde seu conhecimento sobre os tópicos de interesse.

### Nota 100 no Google Lighthouse:

A aplicação foi avaliada utilizando a ferramenta Google Lighthouse, que mede o desempenho, a acessibilidade, o SEO.


## Como instalar e rodar a aplicação

Clone o repositório com o comando:

```bash
  git clone git@github.com:eduardomuchak/leadster-frontend-challenge.git
```

Acesse o diretório raiz do projeto:
```bash
  cd leadster-frontend-challenge
```

Instale as dependências com o comando:
```bash
  yarn install
```

Para rodar a aplicação, execute o comando:
```bash
  yarn run dev
```


    
## Como rodar os testes

Para rodar os testes automatizados através da CLI do terminal:

```bash
  yarn run test
```

Para rodar os testes automatizados e visualizar a execução do Cypress:

Execute o comando:
```bash
  yarn run test:open
```

- Selecione a opção E2E Testing;
- Selecione o navegador de preferência (recomendo o uso do Google Chrome);
- Após selecionar o navegador, clique no botão "Start E2E Testing";
- Selecione o arquivo que você gostaria de executar o teste"


## Experiência

Durante a realização do teste técnico, tive a oportunidade de demonstrar minhas habilidades como desenvolvedor front-end, aplicando diferentes técnicas e tecnologias para criar a landing page proposta. A seguir, descrevo algumas das experiências e abordagens que utilizei ao desenvolver o projeto:

### Separação em Componentes: 
Para manter uma estrutura organizada e reutilizável, decidi separar as seções da landing page em componentes individuais. Isso permitiu uma maior modularidade e facilitou a manutenção do código. Criei componentes como o header, footer, seções de call to action, above the folder, entre outros, para garantir uma organização clara e uma estrutura coesa.

### Estilização Condicional com clsx:
Ao lidar com a estilização condicional de componentes, optei por utilizar a biblioteca clsx. Essa biblioteca facilitou a manipulação das classes CSS com base em determinadas condições, permitindo uma estilização dinâmica dos componentes conforme necessário. Isso proporcionou uma maior flexibilidade na apresentação visual da landing page.

### Organização de Arquivos:
Para manter um projeto bem estruturado e de fácil navegação, organizei os arquivos em pastas separadas de acordo com a função de cada um. Criei pastas específicas para os componentes, hooks, assets e arquivos de mocks. Além disso, aproveitei o novo sistema de organização de pastas do Next.js, incluindo a pasta "app", para manter os arquivos principais do projeto bem estruturados.

### Bibliotecas de Ícones:
Para adicionar ícones à landing page, utilizei as bibliotecas Phosphor Icons e Lucide Icons. Essas bibliotecas oferecem uma ampla variedade de ícones modernos e elegantes, permitindo que eu escolhesse os mais adequados para cada seção da página. A utilização das bibliotecas de ícones contribuiu para a criação de uma interface visualmente atraente e intuitiva.

### Configuração de ESlint Personalizada:
A fim de manter um código limpo e consistente, criei uma configuração personalizada para o ESlint, seguindo minhas próprias preferências e diretrizes de estilo. Isso me permitiu garantir a qualidade do código, identificar possíveis erros e padronizar a formatação do código ao longo do projeto.

No geral, a experiência na realização do teste técnico foi gratificante. Através da utilização das práticas mencionadas, pude demonstrar meu conhecimento em desenvolvimento front-end, organização de código, estilização dinâmica de componentes e utilização de bibliotecas relevantes. Estou confiante de que o resultado final do projeto reflete minhas habilidades e paixão pela criação de interfaces web de alta qualidade e acessíveis.

