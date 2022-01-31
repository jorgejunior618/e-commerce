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
  
  - ```PUT```: "/profile/update" (Atualização de dados do usuário)
    - Headers: Token bearer
    - Body: { email: string, name: string, password: string }
    - Retorno: novo Token
  
  - ```DELETE```: "/profile" (Atualização de dados do usuário)
    - Headers: Token bearer
    - Body: { email: string, name: string, password: string }
    - Retorno: novo Token

 ### Avaliações
  
  - ```GET```: "/messages"
    - Headers: Token bearer
    - Retorno: Lista de mensagens
  
  - ```POST```: "/messages"
    - Headers: Token bearer
    - Body: { message: string, }
    - Retorno: 200 (no body)

