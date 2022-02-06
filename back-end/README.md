# E-COMMERCE Api

## Banco de Dados

  ### Usuário
  ```
  (
    id SERIAL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    password VARCHAR NOT NULL
  )
  ```

  ### Mensagens
  ```
  (
    id SERIAL UNIQUE,
    userId INT NOT NULL,
    message VARCHAR NOT NULL,
    postDate DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT fk_user_message
      FOREIGN KEY(userId) 
      REFERENCES ecommerce_users(id)
  )
  ```

## Rotas

 ### Sessão

  - ```POST```: "/session/login" (Realizar Login de usuário registrado)
    - Body: { email: string, password: string(Hash) }
    - Retorno: Token com dados do usuário
    
  - ```POST```: "/session/register" (Criação de novo usuário)
    - Body: { email: string, name: string, password: string }
    - Retorno: 200 (no body)

 ### Usuário

  - ```GET```: "/profile" (Dados do usuário)
    - Headers: Token bearer
    - Retorno: dados do usuario
  
  - ```PUT```: "/profile" (Atualização de dados do usuário)
    - Headers: Token bearer
    - Body: { email: string, name: string, password: string }
    - Retorno: novo Token
  
  - ```DELETE```: "/profile" (Atualização de dados do usuário)
    - Headers: Token bearer
    - Body: { email: string, name: string, password: string }
    - Retorno: novo Token

 ### Avaliações
  
  - ```GET```: "/messages"
    - Retorno: Lista de mensagens
  
  - ```POST```: "/messages"
    - Headers: Token bearer
    - Body: { message: string }
    - Retorno: 200 (no body)
  
## Configurar na Máquina pessoal

  É necessário ter o [Node](https://nodejs.org/en/) instalado na sua máquina
  Abrir console no diretório de sua preferência e digitar o comando `git clone https://github.com/jorgejunior618/e-commerce` para clonar o repositório
  Ao finalizar o Download, utilizar o comando `npm install` na pasta `back-end` para instalar todas as dependências.

  Utilizar o comando `npm run dev` para inicializar o projeto em modo de desenvolvimento, ou `npm run build` seguido de `npm start` para gerar o arquivo em modo de produção, e simulá-lo localmente.

