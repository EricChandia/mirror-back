# <p align = "center"> Mirror </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-ERIC_CHANDIA-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/EricChandia/projeto21-singmeasong?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição
O Mirror é uma plataforma online de relacionamentos, com ele é possível encontrar o seu par ideal em poucos passos :). Para isso basta fazer o cadastro, preencher as informações básicas, subir aquelas fotos maneiras e você estará pronto para se relacionar.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- Node.js
- TypeScript
- Postgres with Prisma
- React

***

## :rocket: Rotas

```yml
POST /signup
    - Cadastra um novo usuário.
    - headers: {}
    - body:{
      "email": "exemplo@gmail.com",
      "senha": "**********"
    }
```

```yml
POST /signin
    - Loga o usuário na plataforma.
    - headers: {}
    - body:{
      "email": "exemplo@gmail.com",
      "senha": "**********"
    }
```
```yml
POST /createProfile
    - Cria um perfil para o usuário com as informações preenchidas.
    - headers: {}
    - body:{
      "email": "exemplo@gmail.com",
      "senha": "**********"
    }
```

## 🏁 Rodando a aplicação
Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/EricChandia/mirror-back/
```

Entrar na pasta do projeto.

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install ; npm run build;
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

 
