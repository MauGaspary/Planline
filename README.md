# Backend

![Static Badge](https://img.shields.io/badge/Linguagem%3A--gray)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?&logo=typescript&logoColor=blue&color=black)


![Static Badge](https://img.shields.io/badge/Framework_Javascript-express-blue)
![Static Badge](https://img.shields.io/badge/Enviroment-Node.js-green)

Esse é o repositório web do projeto PlanLine. Ele é responsável por prover a interface web.

## express

Express é uma framework para Node.js que ajuda o desenvolvimento de uma API com várias funcionalidades.

## Desenvolvimento

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

5. Para iniciar o servidor de desenvolvimento, execute o comando:

```sh
yarn dev
```

Depois, acesse o endereço `http://localhost:8000` no seu navegador.

5. Para mais comandos, veja o arquivo `package.json` em 'scripts'.

6. As configurações de endpoint da API se encontram no arquivo config.ts. Ao rodar localmente o projeto apontará para o backend local, em produção apontará para o backend em produção.

## Extensões do VSCode

- ESLint
- Prettier
- Editor Config
