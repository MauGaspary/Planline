# PlanLine: Planning Poker

Aplicação de **Planning Poker** para times ágeis estimarem tarefas em conjunto. Quem conduz a sessão cria uma sala pela **interface web** e os participantes entram pelo **app mobile**, usando um QR Code ou um código. Cada pessoa vota na pontuação das tarefas e, ao final, o condutor revela os votos, vê média e moda e define a pontuação final.

Projeto desenvolvido na **AGES (Agência Experimental de Engenharia de Software) da PUCRS** no 2º semestre de 2023 (agosto a novembro).

## Estrutura do repositório

Este repositório junta os três repositórios originais do projeto, com o histórico de commits preservado:

| Pasta | Descrição | Stack |
|---|---|---|
| [`backend/`](backend) | API REST que gerencia projetos, sprints, tarefas, sessões e votos | TypeScript, Node.js, Express, Prisma, Swagger |
| [`web/`](web) | Interface web de quem cria e conduz a sessão | TypeScript, React, Vite, Tailwind CSS |
| [`mobile/`](mobile) | App dos participantes, que entram na sessão e votam | TypeScript, React Native, Expo, Tailwind CSS |

O tempo real da sessão (entrada de participantes e votos) usa o **Firebase**. Cada pasta tem um README próprio com as instruções para rodar aquela parte.

## Funcionalidades

- **Criar sessão** (web): escolher projeto e sprint e gerar um QR Code ou código de acesso.
- **Entrar na sessão** (mobile): ler o QR Code ou digitar o código e escolher qual integrante do time você é.
- **Votação**: os participantes votam na pontuação de cada tarefa.
- **Acompanhar a sessão** (web): ver quem votou, revelar os votos, ver média, moda e resultado, pular tarefas e definir a pontuação final.
- **Cadastro** de projetos, sprints, tarefas e integrantes.
- **Importação e exportação** de tarefas em `.csv`.

## Arquitetura

Os três projetos seguem princípios de *Clean Architecture*:

- **Backend:** camadas `Controllers` → `Services` → `Repositories`, com os models definidos via Prisma (ORM).
- **Web e Mobile:** organizados em `Components`, `Hooks`, `Contexts` (web), `Pages` e `Services` (integração com a API e com o Firebase).
- **Deploy:** a cada nova versão na `main` dos repositórios Web e Backend, o código era empacotado em containers Docker e publicado via GitLab CI/Runner.

## Como rodar

Requisitos: Node.js >= 18 e Yarn (`npm install -g yarn`).

```sh
# Backend
cd backend && yarn install
cp .env.example .env   # preencha as variáveis
docker compose up -d   # banco de dados
yarn dev

# Web (http://localhost:8080)
cd web && yarn install && yarn dev

# Mobile (abra pelo app Expo Go, na mesma rede)
cd mobile && yarn install && yarn start
```

As credenciais originais (`.env`) foram removidas do histórico. Para rodar o projeto, crie um projeto próprio no Firebase e preencha as variáveis com base nos arquivos `.env.example`.

## Branches

A branch `main` tem o estado final de cada repositório. As demais branches originais foram mantidas com o nome da pasta como prefixo, por exemplo `web/develop` e `backend/main`.

## Equipe

**Professor orientador:** Edson Moreno
**Stakeholders:** Augusto Linhares, Cássio Trindade, Leticia Reis

| Nível | Integrantes |
|---|---|
| AGES I | Arthur Fenilli de Souza, Gabriel Bohn, Jocemar Nicolodi Junior, Maurício Gaspary, Nicolas Tanure Miszczuk |
| AGES II | Bruno de Sá Bolzan, Eduardo Amengual Garcia, Eduardo Kohut Martinbiancho, Kayky Casagrande, Lázaro Maciel Vasconcelos, Leticia Brasil Flores, Marcelo Ferreira Boeira Júnior |
| AGES III | Giovanni Gonçalves Migon, Gustavo Vicentini Deon, Henrique Derlam Zwetsch, Marcos Menezes Sanhudo |
| AGES IV | Bruno Chanan, Lucas Simon Susin |

---

Repositórios originais: [tools.ages.pucrs.br/planline](https://tools.ages.pucrs.br/planline)
