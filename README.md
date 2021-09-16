
# API- Top 5 most popular Programming Languages in 2021-NodeJs

<img src="http://appflower.com/wp-content/uploads/2020/02/top-programming-languages.png;" />

> This was API created for back-end concept studies, using the JavaScript as programming language and the MongoDB as database. I present a complete CRUD in this API of the top five most popular Programming Languages in 2021.

You will be able to use tis project downloading the zip file, or cloning it on your computer using Git. Run the `npm i` command inside the project folder on your computer (the folder containing the package.json file),  and the  `npm i` command will allow to dowload the  project´s dependencies.

## Code specifications

The abbreviation "PL" and "Pl" means Programming Language and "PLS" Programming Languages ​​in the plural.

## Running the project

*This API uses mongodb as database and mongoose as ORM. 

Importante note: You will only be able o test the API completly if you have MongoDb installed on your computer
The following link to install MongoDb:
<https://www.mongodb.com/try/download/community>

Also, you need to create the .env file with your database´s url, *use the .env.exemple file to create yours*. This is an example database connection string: mongodb://localhost:27017/PL_DB.

How to run the project?

* Running the project with nodemon in the terminal:

```bash
npm run dev
```

* Running the project with node,in the terminal:

```bash
npm start
```

## How to test API?

You can use the tools below:

* Postman - `https://www.postman.com/`
* Insomnia-`https://insomnia.rest/download`
* Thunder Client (Visual Studio plugin)

URLs examples:
*This is the default test URL: <http://localhost:3000/Pl>.

* Searching by ID, Edit or Delete, enter the ID in the URL:<http://localhost:3000/Pl/id>.

This is the JSON structure for testing POST and PUT:

```json
{

    "name": "Python ",
    "fact": "The language’s name isn’t about snakes, but about the popular British comedy troupe Monty Python (from the 1970s). Guido himself is a big fan of Monty Python’s Flying Circus. Being in a rather irreverent mood, he named the project ‘Python’.",
    "image": "https://img.olhardigital.com.br/wp-content/uploads/2020/04/20200423030657-1131x450.jpg"
```

It´s possible to access the "database.json" file into the the database folder to test the POST and PUT. There are 2 programming languages examples to create or update in the application.

This project is deployed on Heroku: <https://api-programminglanguages.herokuapp.com/>

 The project can be integrated in a Front End application.

Thank you for using my API. You always most welcome!.
