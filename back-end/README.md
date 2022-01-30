# E-COMMERCE Api

## Banco de Dados

  ### Usuário
  ```
  (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
  )
  ```

  ### Mensagens
  ```
  (
    id SERIAL,
    userId INT NOT NULL,
    message VARCHAR NOT NULL
  )
  ```

## Rotas

 ### Sessão

  - POST: "/session/login" (Realizar Login de usuário registrado)
    - Body: { email: string, password: string(Hash) }
    - Retorno: Token com dados do usuário
  - POST: "/session/register" (Criação de novo usuário)
    - Body: { email: string, name: string, password: string }
    - Retorno: 200 (no body)

 ### Usuário

  - PUT: "/user/:id" (Atualização de dados do usuário)
    - Headers: Token bearer
    - Body: { email: string, name: string, password: string }
    - Retorno: novo Token

 ### Avaliações
  
  - GET: "/messages"
    - Headers: Token bearer
    - Retorno: Lista de mensagens
  
  - POST: "/messages"
    - Headers: Token bearer
    - Body: { message: string, }
    - Retorno: 200 (no body)

