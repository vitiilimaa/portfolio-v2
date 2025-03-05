import { TechliseLogo, AvmbLogo } from "@portfolio/assets";

const careerData = [
  {
    careerId: 0,
    companyLogo: TechliseLogo,
    position: "Desenvolvedor Front-End Trainee",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Ago 2024 - atual",
    jobDescription: `Desenvolvi telas para uma plataforma de gestão financeira de granja de suínos, utilizando Next.js e Chakra UI, implementando formulários, imagens com posicionamento absoluto, listagens com funcionalidades de CRUD, entre outras. Trabalhei na criação do componente de quadro Kanban utilizando dndkit, além de outros componentes, como tabelas simples e expansivas, sempre seguindo o protótipo do Figma.

Desenvolvi também um app de chamadas utilizando o protocolo WebRTC e Socket para permitir a comunicação entre dois dispositivos. Para o envio de notificações sobre quem está recebendo a ligação, integrei a API do OneSignal, tornando essa funcionalidade possível.`,
  },
  {
    careerId: 1,
    companyLogo: TechliseLogo,
    position: "Estágio em Desenvolvimento Front-End",
    companyName: "Techlise Soluções em TI",
    workPeriod: "Jan 2024 - Ago 2024",
    jobDescription: `Desenvolvi telas para uma plataforma de médicos utilizando Next.js e Chakra UI, implementando formulários, agendas, sistema de pontos, listagens com funcionalidades de CRUD, entre outras. Implementei a mudança dinâmica de cores do tema, permitindo que o usuário selecionasse ou arrastasse uma cor no Color Picker para atualizar o sistema em tempo real.
    
Para gerenciar o estado global da aplicação, utilizei Redux, realizando também a integração com a API para manipulação de dados. Além disso, apliquei algumas dessas funcionalidades e design para o aplicativo mobile do sistema, garantindo uma experiência consistente em ambas as plataformas.

Durante o desenvolvimento, para realizar a criação de um usuário de forma rápida, utilizei o Puppeteer para fazer o processo de entrada na plataforma, criação do usuário e, posteriormente, login com a conta criada de forma automatizada.`,
  },
  {
    careerId: 2,
    companyLogo: AvmbLogo,
    position: "Estágio em Desenvolvimento Web",
    companyName: "AVMB - Soluções em TI",
    workPeriod: "Mar 2022 - Dez 2023",
    jobDescription: `Atuei na manutenção de portais e na criação de menus, utilizando a ferramenta de modelagem de processos da empresa. Fui responsável por treinar novos estagiários e desenvolver uma metodologia de treinamento, que incluía vídeoaulas rápidas e objetivas, além de exercícios que incentivavam a reflexão e a pesquisa de soluções, ensinando-os a utilizar a ferramenta de modelagem e reduzindo significativamente o tempo de aprendizado.

Além disso, auxiliei no desenvolvimento de um aplicativo mobile que buscava trazer, de forma simplificada e ágil, as principais funcionalidades de uma plataforma já existente na web.

Foi nesse ambiente que aprendi minhas primeiras tecnologias: Delphi 7, HTML, CSS, JavaScript, jQuery, Pure CSS, React, React Native, Lua, PostgreSQL e DB2.

Aqui foi onde minha trajetória como programador iniciou, mesmo sem conhecimento prévio em programação, mas com um grande desafio: entregar resultados em menos de 3 meses. Após 1 ano, alcancei o nível máximo de estágio.`,
    logoStyle: { width: 32, height: 32 },
  },
];

export default careerData;
