# E-COMMERCE Api

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

