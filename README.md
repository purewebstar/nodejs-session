# User Account Register and Login Using SESSION 
## [NodeJs + ExpressJs + MongoDb + Ejs Template]

### Dependencies to install
- Express, bcrypt, cors, express-session, jquery, mdbootstrap, bootstrap, connect-mongodb-sesssion,
mongoose, ejs, dotenv.
```
npm install --save express bcrypt cors express-session jquery mdbootstrap bootstrap connect-mongodb-session mongoose ejs dotenv
```

### Dev Dependency to install
- nodemon
```
npm install --save nodemon
```
### In package.json (add "type" : "module") 
- for ECS6
```json
"type": "module"
```
### Add .env file and write your
```
DATABASE_URI=?
PORT=?
SESSION_SECRET_KEY=?
```
## Run Project
```
nodemon app.js
```
