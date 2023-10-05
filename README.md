# ⚙️ Backend

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

Esse é o repositório web do projeto PlanLine. Ele é responsável por prover a interface web.

## 🔧 Express

Express é uma framework de Node.js que ajuda o desenvolvimento de uma API com várias funcionalidades.

## 💻 Desenvolvimento

1. Instale o [Node.js](https://nodejs.org/en) versão `>= 18`.

2. Instale o [Yarn](https://yarnpkg.com/) com o comando:

```sh
npm install -g yarn
```

3. Instale as dependências do projeto com o comando:

```sh
yarn install
```

Para isso, é necessário estar com um terminal aberto na pasta raiz do projeto.

4. É necessário renomear o arquivo .env.example para .env, dessa maneira as envs locais são importadas corretamente

5. Para iniciar o servidor de desenvolvimento, execute os comandos:

```sh
#gera o cli do prisma
yarn prisma generate 
```
```sh
#cria as estruturas descritas nas models dentro do banco
yarn prisma migrate dev
```
```sh
#roda o projeto
yarn dev
```

Depois, acesse o endereço `http://localhost:8000` no seu navegador.

5. Para mais comandos, veja o arquivo `package.json` em 'scripts'.

6. As configurações de endpoint da API se encontram no arquivo config.ts. Ao rodar localmente o projeto apontará para o backend local, em produção apontará para o backend em produção.

## 🛠️ Extensões do VSCode

- ESLint
- Prettier
- Editor Config
