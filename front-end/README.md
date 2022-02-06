# Frontend SPA (Single Page Application)

## Rotas da Aplicação

  - `"/"`: Landing Page 
  
  - `"/messages"`: Tela com lista de Mensagens, e para usuários logados cadastro de novas mensagens
  
  - `"/login"`: Tela para realizar login
  
  - `"/signup"`: Tela para cadastrar novos usuários
  
  - `"/profile"`: Tela de dados do usuário, diponível somente quando logado

  - `"/*"` (qualquer outra rota): Tela padrão para rotas não definidas
 
## Funcionalidades principais

  - Utilização de componentes estáticos para compor Cabeçalho e container principal da pagina, evitando carregamentos desnecessários

  - Utilização do padrão Funcional (sem uso de classes) e uso de reactHooks

  - Uso de componentes da biblioteca [mui (material-ui para React)](https://mui.com/pt/)

## Configurar na Máquina pessoal

  É necessário ter o [Node](https://nodejs.org/en/) instalado na sua máquina
  Abrir console no diretório de sua preferência e digitar o comando `git clone https://github.com/jorgejunior618/e-commerce` para clonar o repositório
  Ao finalizar o Download, utilizar o comando `yarn` na pasta `front-end` para instalar todas as dependências.
  Para realizar os teste unitários configurados, basta utilizar o comando `yarn run test`, e aguardar os resultados.

  Utilizar o comando `yarn start` para inicializar o projeto em modo de desenvolvimento, ou `yarn run build` para gerar o arquivo em modo de produção.
