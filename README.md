# <p align = "center"> Mirror </p>

<p align="center">
   <img src="https://github.com/EricChandia/mirror-back/blob/main/src/ksnip_20230209-015209.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-ERIC_CHANDIA-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/EricChandia/projeto21-singmeasong?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição
O Mirror é uma plataforma online de relacionamentos, com ele é possível encontrar o seu par ideal em poucos passos :). Para isso basta fazer o cadastro, preencher as informações básicas, subir aquelas fotos maneiras e você estará pronto para se relacionar.

Você pode acessa-lo diretamente pelo link: https://mirror-pi.vercel.app/

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- Node.js com express
- TypeScript
- Postgres com Prisma
- React.js
- Mongodb
- Cloudinary para upload de fotos

***

## :rocket: Pré requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/).
Caso quiser editar o código, irá precisar de um bom editor como o [VSCode](https://code.visualstudio.com/)


## :rocket: Rotas

<details><summary>AUTENTICAÇÃO</summary>
   
   ```yml
POST /signup
    - Cadastra um novo usuário.
    - headers: {}
    - body:{
      "email": "A String (a valid email)",
      "senha": "String (A valid password)"
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

</details>



<details><summary>PROFILES</summary>
   
   ```yml
POST /createProfile
    - Cria um perfil para o usuário com as informações preenchidas.
    - Rota autenticada.
    - headers: {}
    - body:{
        name: "Name",
        gender: "Men/Woman",
        lookingFor: "Men/Woman/Any",
        age: "Number",
        description: "Text Description",
        identification: "You can specify more about your gender here",
        occupation: "Job occupation",
        schooling: "Schooling"
    }
```
```yml
GET /getUserProfile
    - Obtem os dados do perfil do usuário.
    - Rota autenticada.
    - Precisa apenas estar autenticado na plataforma.
    }
```
```yml
POST /deleteProfile/:id
    - Deleta o perfil do usuário na plataforma.
    - Rota autenticada.
    }
```
```yml
POST /updateProfile/:id
    - Deleta o perfil do usuário na plataforma.
    - Rota autenticada.
    - body:{
        name: "Name",
        gender: "Men/Woman",
        lookingFor: "Men/Woman/Any",
        age: "Number",
        description: "Text Description",
        identification: "You can specify more about your gender here",
        occupation: "Job occupation",
        schooling: "Schooling"
    }
```
   
```yml
POST /find10Profiles
    - Procura por 10 profiles diferentes da profile do usuário logado atual.
    - Rota autenticada.
    }
```

</details>


<details><summary>PHOTOS</summary>

   
```yml
POST /uploadPhoto
    - Faz o upload da foto enviada para a nuvem.
    - Rota autenticada.
    - headers: {}
```
   
```yml
POST /getProfilePhotos
    - Retorna todas as fotos enviadas pelo usuário.
    - Rota autenticada.
    - headers: {}
```
   
</details>

<details><summary>LIKES</summary>
   
```yml
POST /likeProfile/:id
    - Cadastra um like entre o usuário logado e a profile recebida por params.
    - Rota autenticada.
    - headers: {}
```
   
```yml
POST /likeProfile/:id
    - Retorna os likes que a profile passada por params possui.
    - Rota autenticada.
    - headers: {}
```
   
```yml
POST /checkIfItMatch/:id
    - Verifica e retorna se as profiles passadas deram match.
    - Rota autenticada.
    - headers: {}
    - body: {
      userProfileId: number
      likeGivenProfileId: number
    }
```
   
</details>

<details><summary>DISLIKES</summary>
   
```yml
POST /dislikeProfile/:id
    - Cadastra um dislike entre o usuário que está logado e o usuário recebido por params.
    - Rota autenticada.
    - headers: {}
```
   
</details>

<details><summary>MATCH</summary>
   
```yml
GET /getAllProfileMatchs
    - Retorna todos os matchs que a profile logada possui.
    - Rota autenticada.
    - headers: {}
```
   
</details>

<details><summary>CHAT</summary>
   
```yml
POST /insertMessage
    - Insere uma mensagem no chat entre a profile logada e a profile recebida por body.
    - Rota autenticada.
    - headers: {}
    - body: {
      matchId: number (matchId of profiles)
      whoReceivedId: number (id of profile who received the message)
      message: "text of message"
   }
```
   
```yml
GET /getChatMessages/:id
    - Retorna todos as mensagens do chat correspondente ao matchId enviado por params.
    - Rota autenticada.
    - headers: {}
```
</details>




## 🏁 Rodando a aplicação
Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/EricChandia/mirror-back/
```

Entrar na pasta do projeto.

Crie um arquivo .env na pasta root do projeto, o arquivo precisará seguir o padrão informado no arquivo .env.example


Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install ; npm run build;
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

O servidor rodará na porta 5000 por padrão.

 
