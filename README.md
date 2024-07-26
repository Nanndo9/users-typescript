# Users API

Este projeto é uma API para gerenciar usuários, construída com TypeScript, Express e MongoDB. Está em fase de desenvolvimento.

## Estrutura do Projeto

- **index.ts**: Arquivo principal que inicia a aplicação.
- **controllers/get-users/get-users.ts**: Controlador que lida com a lógica de obtenção de usuários.
- **repositories/get-users/mongo-get-users.ts**: Repositório que interage com o banco de dados MongoDB para obter os usuários.
- **database/mongo.ts**: Configuração da conexão com o MongoDB.
- **models/user.ts**: Interface do modelo de usuário.
- **controllers/get-users/protocols.ts**: Interfaces para o controlador e repositório de obtenção de usuários.

## Pré-requisitos

- Node.js
- MongoDB
- npm ou yarn

## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd users-api
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```
    ou
    ```sh
    yarn install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/nome_do_banco_de_dados
    ```

## Executando a Aplicação

1. Inicie o MongoDB (se não estiver em execução):
    ```sh
    mongod
    ```

2. Execute a aplicação:
    ```sh
    npm start
    ```
    ou
    ```sh
    yarn start
    ```

3. A aplicação estará disponível em `http://localhost:3000`.

## Endpoints

### GET /users

Retorna a lista de usuários.

**Resposta:**

- **Status:** 200 OK
- **Body:** Lista de usuários

**Erro:**

- **Status:** 500 Internal Server Error
- **Body:** Mensagem de erro

