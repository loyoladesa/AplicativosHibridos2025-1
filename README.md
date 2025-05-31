# Aplicativo de Mensagens Híbrido - Projeto Final

## Visão Geral do Projeto

### Descrição
Este projeto, desenvolvido como requisito final para a disciplina de Aplicativos Híbridos, consiste na criação de um aplicativo de mensagens instantâneas para dispositivos móveis. A aplicação foi construída utilizando **React Native**, o que permite sua compilação e execução em plataformas iOS e Android a partir de um código-base unificado. Para as funcionalidades de backend, como autenticação de usuários, banco de dados em tempo real para as mensagens e outros serviços, foi empregado o **Firebase**, uma plataforma robusta e escalável do Google.

### Objetivo
O objetivo central deste aplicativo é fornecer uma plataforma de comunicação eficiente, intuitiva e em tempo real. Ele visa permitir que os usuários se cadastrem, autentiquem-se e troquem mensagens de texto de forma segura e instantânea. As funcionalidades principais implementadas incluem:

*   **Autenticação de Usuários:** Cadastro de novas contas e login para usuários existentes.
*   **Lista de Conversas:** Visualização das conversas ativas ou contatos disponíveis.
*   **Troca de Mensagens em Tempo Real:** Envio e recebimento de mensagens de texto instantaneamente.
*   **Interface Intuitiva:** Design focado na facilidade de uso e experiência do usuário.

## Estrutura do Projeto

### Arquitetura
O código-fonte do projeto foi organizado de forma a promover a modularidade, escalabilidade e manutenibilidade. A estrutura detalhada dos diretórios, arquivos e seus respectivos papéis pode ser explorada diretamente no repositório GitHub através do seguinte link:
[Estrutura do Projeto no GitHub](https://github.com/loyoladesa/AplicativosHibridos2025-1/tree/whatsapp-firebase) 

De forma geral, a arquitetura de um projeto React Native como este costuma seguir um padrão com os seguintes diretórios principais dentro de `src/` (ou similar):

*   `screens/` ou `views/`: Contém os componentes que representam as diferentes telas da aplicação (ex: `LoginScreen.js`, `ChatScreen.js`, `HomeScreen.js`).
*   `components/`: Abriga componentes de UI reutilizáveis que são utilizados em diversas telas (ex: `Button.js`, `MessageBubble.js`, `Input.js`).
*   `navigation/`: Define a lógica de navegação entre as telas, utilizando bibliotecas como React Navigation.
*   `services/` ou `firebase/`: Módulos responsáveis pela comunicação com os serviços do Firebase, encapsulando a lógica de autenticação, operações de banco de dados (Firestore/Realtime Database), etc.
*   `assets/`: Armazena recursos estáticos como imagens, ícones, fontes personalizadas.
*   `constants/`: Arquivos com valores constantes usados em toda a aplicação (ex: cores, strings de configuração).
*   `store/` ou `context/`: (Se aplicável) Para gerenciamento de estado global com Redux, Context API, etc.
*   `App.js` (ou `index.js` na raiz): Ponto de entrada principal da aplicação React Native.

### Tecnologias
As principais tecnologias utilizadas para o desenvolvimento deste aplicativo foram:

*   **React Native:**
    *   **Descrição:** Um framework JavaScript open-source, criado pelo Facebook, que permite o desenvolvimento de aplicativos móveis multiplataforma (iOS e Android) utilizando uma única base de código. Ele utiliza componentes nativos da plataforma, garantindo uma performance e experiência de usuário de alta qualidade.
    *   **Justificativa da Escolha:** O React Native foi escolhido por sua capacidade de acelerar o desenvolvimento ao permitir a reutilização de código entre plataformas, pela sua vasta comunidade de desenvolvedores, ecossistema rico em bibliotecas e ferramentas, e pela familiaridade com JavaScript, uma linguagem amplamente utilizada.

*   **Firebase:**
    *   **Descrição:** Uma plataforma de desenvolvimento de aplicativos móveis e web do Google (BaaS - Backend as a Service). Ela oferece um conjunto abrangente de ferramentas e serviços para construir, melhorar e escalar aplicativos.
    *   **Justificativa da Escolha:** O Firebase foi selecionado devido à sua facilidade de integração com o React Native e por fornecer soluções prontas e escaláveis para:
        *   **Cloud Firestore (ou Firebase Realtime Database):** Como banco de dados NoSQL em tempo real para armazenar e sincronizar as mensagens, perfis de usuário e outras informações da aplicação de forma eficiente.
  A infraestrutura gerenciada pelo Google e o modelo de precificação flexível também foram fatores importantes para a escolha.

## Autores e Agradecimentos

### Créditos
Este projeto foi concebido e desenvolvido por:
*   **Sidney Loyola**

### Agradecimentos
Gostaríamos de expressar nossa sincera gratidão a todos que contribuíram, direta ou indiretamente, para a realização e o sucesso deste projeto.

Um agradecimento especial aos **alunos do curso de Engenharia de Software da Universidade de Vassouras**. O entusiasmo, as perguntas pertinentes, o feedback construtivo e o ambiente de aprendizado colaborativo proporcionado por vocês durante as aulas da disciplina de Aplicativos Híbridos foram fundamentais e enriquecedores para o desenvolvimento deste trabalho.

## Licença

Este projeto está distribuído sob a licença **MIT License**.

