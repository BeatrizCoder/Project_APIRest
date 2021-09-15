# API Linguagens de Programação-NodeJs


<img src="http://appflower.com/wp-content/uploads/2020/02/top-programming-languages.png;" />

> API criada para estudos de  conceitos em back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu apresento um CRUD completo de seis principais Linguagensde Programação atuais.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Sobre o código
A abreviacao "PL" e "Pl" significa Programming Language e "PLS" Programming Languages no plural.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador
O link a seguir para instalar o MongoDb:
https://www.mongodb.com/try/download/community.*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/PL_DB.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Como testar API?

Você pode utilizar as ferramentas:

* Postman - https://www.postman.com/
* Insomnia-https://insomnia.rest/download
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/Pl

* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/Pl/id

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "name": "Python ",
    "fact": "The language’s name isn’t about snakes, but about the popular British comedy troupe Monty Python (from the 1970s). Guido himself is a big fan of Monty Python’s Flying Circus. Being in a rather irreverent mood, he named the project ‘Python’.",
    "image": "https://img.olhardigital.com.br/wp-content/uploads/2020/04/20200423030657-1131x450.jpg"
}
```

Agradeco por utilizar minha API. Seja sempre bem vindo!